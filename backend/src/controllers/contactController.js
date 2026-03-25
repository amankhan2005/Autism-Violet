 import Contact from "../models/Contact.js";
import { sendAdminEmail, sendUserEmail } from "../services/emailService.js";

export const submitContact = async (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body;

    if (![name, email, message].every(Boolean)) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required"
      });
    }

    // ✅ Save to DB
    const contact = await Contact.create({
      name,
      email,
      phone,
      message
    });

    // 🔥 EMAILS (CONTROL HERE)

    // 👉 Always send to admin
    sendAdminEmail({ name, email, phone, message });

    // 👉 Toggle user email (ON/OFF)
    const SEND_USER_EMAIL = true;

    if (SEND_USER_EMAIL) {
      sendUserEmail({ name, email });
    }

    // ✅ Response fast
    return res.status(201).json({
      success: true,
      message: "Your message has been sent successfully",
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email
      }
    });

  } catch (error) {
    next(error);
  }
};