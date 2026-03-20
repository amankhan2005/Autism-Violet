 import Contact from "../models/Contact.js";

export const submitContact = async (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body;

    // ✅ Fast validation
    if (![name, email, message].every(Boolean)) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required"
      });
    }

    // ✅ Save contact
    const contact = await Contact.create({
      name,
      email,
      phone,
      message
    });

    // ✅ Clean response (secure)
    return res.status(201).json({
      success: true,
      message: "Your message has been sent successfully",
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        createdAt: contact.createdAt
      }
    });

  } catch (error) {
    next(error); // 🔥 error middleware handle karega
  }
};