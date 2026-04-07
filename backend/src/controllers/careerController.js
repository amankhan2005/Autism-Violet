import fs from "fs";
import { Resend } from "resend";
import {
  adminTemplate,
  userTemplate,
} from "../utils/emailTemplates.js";

// ✅ SAFE INIT (fix)
const getResend = () => {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("❌ RESEND_API_KEY missing in env");
  }
  return new Resend(process.env.RESEND_API_KEY);
};

export const submitCareerForm = async (req, res) => {
  try {
    const resend = getResend(); // ✅ FIXED

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

    // ✅ ADMIN EMAIL
    await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: [process.env.ADMIN_EMAIL],
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
    await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: [email],
      subject: "Application Received – Autism Violet",
      html: userTemplate({ name, position }),
    });

    fs.unlinkSync(req.file.path);

    res.json({ message: "Application submitted successfully" });

  } catch (err) {
    console.error("❌ Controller Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};