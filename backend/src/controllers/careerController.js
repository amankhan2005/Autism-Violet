import fs from "fs";
import nodemailer from "nodemailer";
import dns from "dns";
import {
  adminTemplate,
  userTemplate,
} from "../utils/emailTemplates.js";

// 🔥 FORCE IPv4 globally
dns.setDefaultResultOrder("ipv4first");

// ✅ SINGLE TRANSPORTER (BEST PRACTICE)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,

  family: 4,

  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000,

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const submitCareerForm = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      position,
      experience,
      message,
    } = req.body;

    if (!name || !email || !phone || !position || !req.file) {
      return res.status(400).json({
        message: "All required fields are required",
      });
    }

    const fileBuffer = fs.readFileSync(req.file.path);

    // 🔥 EMAILS (NON-BLOCKING)
    setImmediate(async () => {
      try {
        // ✅ ADMIN EMAIL
        await transporter.sendMail({
          from: process.env.EMAIL_FROM,
          to: process.env.ADMIN_EMAIL,
          subject: `New Application - ${position}`,
          html: adminTemplate({
            name,
            email,
            phone,
            position,
            experience,
            message,
          }),
          attachments: [
            {
              filename: req.file.originalname,
              content: fileBuffer,
            },
          ],
        });

        // ✅ USER EMAIL
        await transporter.sendMail({
          from: process.env.EMAIL_FROM,
          to: email,
          subject: "Application Received – Autism Violet",
          html: userTemplate({ name, position }),
        });

        console.log("✅ Career emails sent");

      } catch (emailErr) {
        console.error("❌ Career Email Error:", emailErr);
      }
    });

    // 🧹 Delete file safely
    setTimeout(() => {
      if (req.file?.path && fs.existsSync(req.file.path)) {
        fs.unlinkSync(req.file.path);
      }
    }, 5000);

    // ✅ Instant response
    res.json({ message: "Application submitted successfully" });

  } catch (err) {
    console.error("❌ Controller Error:", err);

    if (req.file?.path && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    res.status(500).json({ message: "Server error" });
  }
};