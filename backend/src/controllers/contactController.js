 import Contact from "../models/Contact.js";

export const submitContact = async (req, res, next) => {
  try {
    let { name, email, phone, message } = req.body;

    // ✅ Trim inputs
    name = name?.trim();
    email = email?.trim();
    message = message?.trim();

    // ✅ Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required",
      });
    }

    // ✅ Email format check (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // ✅ Save to DB
    const contact = await Contact.create({
      name,
      email,
      phone,
      message,
    });

    // ✅ Response (safe)
    return res.status(201).json({
      success: true,
      message: "Your message has been sent successfully",
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        createdAt: contact.createdAt,
      },
    });

  } catch (error) {
    next(error);
  }
};