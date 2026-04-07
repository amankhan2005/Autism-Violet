import Contact from "../models/Contact.js";
import { sendAdminEmail, sendUserEmail } from "../services/emailService.js";

export const submitContact = async (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body;

    // ✅ Validation
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

    // 🔥 EMAIL (non-blocking behavior)
    try {
      await sendAdminEmail({ name, email, phone, message });

      const SEND_USER_EMAIL = true;
      if (SEND_USER_EMAIL) {
        await sendUserEmail({ name, email });
      }

      console.log("✅ Emails sent successfully");

    } catch (emailError) {
      console.error("❌ EMAIL ERROR:", emailError.message);
      // ❗ fail nahi karenge
    }

    // ✅ Always success response
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
    console.error("❌ CONTROLLER ERROR:", error);
    next(error);
  }
};