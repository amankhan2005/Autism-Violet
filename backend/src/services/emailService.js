 import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// ✅ ENV VARIABLES
const FROM_EMAIL =
  process.env.EMAIL_FROM || "Vital Trust Health <onboarding@resend.dev>";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const COMPANY_NAME = process.env.COMPANY_NAME || "Vital Trust Health LLC";

// 🔥 ADMIN EMAIL (You receive inquiry)
export const sendAdminEmail = async ({ name, email, phone, message }) => {
  try {
    if (!ADMIN_EMAIL) {
      throw new Error("ADMIN_EMAIL not defined in env");
    }

    const response = await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Client Inquiry - ${COMPANY_NAME}`,

      html: `
  <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:30px;">
    
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.05);">
      
      <!-- Header -->
      <div style="background:#2F5D5E; color:#fff; padding:20px; text-align:center;">
        <h2 style="margin:0;">📩 New Client Inquiry</h2>
        <p style="margin:5px 0 0; font-size:14px;">${COMPANY_NAME}</p>
      </div>

      <!-- Body -->
      <div style="padding:25px;">
        
        <p style="margin-bottom:20px; color:#555;">
          You have received a new inquiry from your website contact form.
        </p>

        <table style="width:100%; border-collapse:collapse;">
          <tr>
            <td style="padding:10px; font-weight:bold;">Name:</td>
            <td style="padding:10px;">${name}</td>
          </tr>
          <tr style="background:#f9f9f9;">
            <td style="padding:10px; font-weight:bold;">Email:</td>
            <td style="padding:10px;">${email}</td>
          </tr>
          <tr>
            <td style="padding:10px; font-weight:bold;">Phone:</td>
            <td style="padding:10px;">${phone || "N/A"}</td>
          </tr>
          <tr style="background:#f9f9f9;">
            <td style="padding:10px; font-weight:bold;">Message:</td>
            <td style="padding:10px;">${message}</td>
          </tr>
        </table>

      </div>

      <!-- Footer -->
      <div style="background:#f1f1f1; padding:15px; text-align:center; font-size:12px; color:#777;">
        © ${new Date().getFullYear()} ${COMPANY_NAME}. All rights reserved.
      </div>

    </div>
  </div>
`
    });

    return response;
  } catch (error) {
    console.error("❌ Admin Email Error:", error.message);
  }
};

// 🔥 USER AUTO REPLY
export const sendUserEmail = async ({ name, email }) => {
  try {
    const response = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: `We’ve Received Your Request - ${COMPANY_NAME}`,

      html: `
  <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:30px;">
    
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.05);">
      
      <!-- Header -->
      <div style="background:#2F5D5E; color:#fff; padding:25px; text-align:center;">
        <h2 style="margin:0;">${COMPANY_NAME}</h2>
        <p style="margin:5px 0 0; font-size:14px;">
          Your message has been received
        </p>
      </div>

      <!-- Body -->
      <div style="padding:25px;">
        
        <h3 style="margin-top:0;">Hello ${name}, 👋</h3>

        <p style="color:#555; line-height:1.6;">
          Thank you for reaching out to <strong>${COMPANY_NAME}</strong>.
          We’ve received your message and our team will get back to you shortly.
        </p>

        <p style="color:#555; line-height:1.6;">
          We typically respond within <strong>24 hours</strong>.
        </p>

        <!-- CTA -->
        <div style="margin:30px 0; text-align:center;">
          <a href="mailto:${ADMIN_EMAIL}" 
             style="background:#2F5D5E; color:#fff; padding:12px 20px; border-radius:8px; text-decoration:none; font-weight:bold;">
            Contact Us Directly
          </a>
        </div>

        <p style="color:#777; font-size:14px;">
          If your concern is urgent, please don’t hesitate to reach out directly.
        </p>

      </div>

      <!-- Footer -->
      <div style="background:#f1f1f1; padding:15px; text-align:center; font-size:12px; color:#777;">
        © ${new Date().getFullYear()} ${COMPANY_NAME}  
        <br/>
        Compassion • Care • Trust
      </div>

    </div>
  </div>
`
    });

    return response;
  } catch (error) {
    console.error("❌ User Email Error:", error.message);
  }
};