import Contact from "../models/Contact.js";
import { sendAdminEmail, sendUserEmail } from "./emailService.js";

export const createContactService = async (data) => {
  const { name, email, phone, message } = data;

  if (!name || !email || !message) {
    throw new Error("Required fields missing");
  }

  // ✅ Save in DB first (important)
  const contact = await Contact.create(data);

  // ✅ Send emails (fail-safe)
  try {
    await Promise.all([
      sendAdminEmail({ name, email, phone, message }),
      sendUserEmail({ name, email })
    ]);
  } catch (error) {
    console.error("⚠️ Email sending failed:", error.message);
    // ❗ API fail nahi karega
  }

  return contact;
};