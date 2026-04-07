import fs from "fs";
import nodemailer from "nodemailer";
import {
  adminTemplate,
  userTemplate,
} from "../utils/emailTemplates.js";

// ✅ SMTP Transport
const getTransporter = () => {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error("❌ SMTP credentials missing in env");
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

export const submitCareerForm = async (req, res) => {
  try {
    const transporter = getTransporter();

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

    // ✅ ADMIN EMAIL (with attachment)
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

    // 🧹 Delete file
    fs.unlinkSync(req.file.path);

    res.json({ message: "Application submitted successfully" });

  } catch (err) {
    console.error("❌ Controller Error:", err.message);

    // ❗ file cleanup even on error
    if (req.file?.path && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    res.status(500).json({ message: "Server error" });
  }
};