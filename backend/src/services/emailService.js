import nodemailer from "nodemailer";

// ✅ SMTP Transport (FIXED + STABLE)
const getTransporter = () => {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error("❌ SMTP credentials missing in env");
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,

    // 🔥 FIXES
    family: 4,
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,

    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// ✅ Branding
const FROM_EMAIL =
  process.env.EMAIL_FROM || "Autism Violet <info@autismviolet.com>";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const COMPANY_NAME = process.env.COMPANY_NAME || "Autism Violet";

// 🎨 Gradient
const gradient = "linear-gradient(135deg,#6B3FA0,#B88AD9,#4B2A7A)";


// 🔥 ADMIN EMAIL
export const sendAdminEmail = async ({ name, email, phone, message }) => {
  try {
    const transporter = getTransporter();

    if (!ADMIN_EMAIL) throw new Error("ADMIN_EMAIL not defined");

    await transporter.sendMail({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Client Inquiry - ${COMPANY_NAME}`,

      html: `
<div style="font-family:Arial,sans-serif;background:#F5F3F8;padding:30px;">
  <div style="max-width:620px;margin:auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 20px 50px rgba(0,0,0,0.08);">

    <div style="background:${gradient};padding:25px;text-align:center;color:#fff;">
      <h2 style="margin:0;font-size:22px;">📩 New Inquiry</h2>
      <p style="margin:5px 0 0;font-size:13px;opacity:0.9;">
        ${COMPANY_NAME}
      </p>
    </div>

    <div style="padding:25px;">
      <p style="color:#555;margin-bottom:20px;">
        A new client has submitted a contact request:
      </p>

      <div style="border-radius:12px;overflow:hidden;border:1px solid #eee;">
        ${[
          ["Name", name],
          ["Email", email],
          ["Phone", phone || "N/A"],
          ["Message", message],
        ]
          .map(
            ([label, value], i) => `
          <div style="display:flex;padding:12px;background:${
            i % 2 === 0 ? "#fff" : "#F9F7FC"
          };">

            <div style="width:120px;font-weight:600;color:#4B2A7A;">
              ${label}
            </div>

            <div style="flex:1;color:#555;">
              ${value}
            </div>

          </div>
        `
          )
          .join("")}
      </div>
    </div>

    <div style="padding:15px;text-align:center;font-size:12px;color:#777;background:#F5F3F8;">
      © ${new Date().getFullYear()} ${COMPANY_NAME}
    </div>

  </div>
</div>
`,
    });
  } catch (error) {
    console.error("❌ Admin Email Error:", error);
  }
};


// 🔥 USER AUTO REPLY
export const sendUserEmail = async ({ name, email }) => {
  try {
    const transporter = getTransporter();

    await transporter.sendMail({
      from: FROM_EMAIL,
      to: email,
      subject: `We’ve Received Your Request - ${COMPANY_NAME}`,

      html: `
<div style="font-family:Arial,sans-serif;background:#F5F3F8;padding:30px;">

  <div style="max-width:620px;margin:auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 20px 50px rgba(0,0,0,0.08);">

    <div style="background:${gradient};padding:30px;text-align:center;color:#fff;">
      <h2 style="margin:0;font-size:24px;">${COMPANY_NAME}</h2>
      <p style="margin:6px 0 0;font-size:14px;opacity:0.9;">
        Compassion • Growth • Care
      </p>
    </div>

    <div style="padding:28px;">

      <h3 style="margin-top:0;color:#4B2A7A;">Hello ${name}, 👋</h3>

      <p style="color:#555;line-height:1.6;">
        Thank you for reaching out to <strong>${COMPANY_NAME}</strong>.
        We’ve received your message and our team will contact you shortly.
      </p>

      <p style="color:#555;line-height:1.6;">
        ⏱ Expected response time: <strong>within 24 hours</strong>
      </p>

      <div style="margin:30px 0;text-align:center;">
        <a href="mailto:${ADMIN_EMAIL}"
           style="background:#6B3FA0;color:#fff;padding:14px 22px;border-radius:999px;text-decoration:none;font-weight:bold;box-shadow:0 8px 20px rgba(107,63,160,0.3);">
          Contact Support →
        </a>
      </div>

      <p style="font-size:13px;color:#777;text-align:center;">
        If urgent, feel free to reply directly to this email.
      </p>

    </div>

    <div style="padding:18px;text-align:center;font-size:12px;color:#777;background:#F5F3F8;">
      © ${new Date().getFullYear()} ${COMPANY_NAME}<br/>
      Supporting every child’s journey 💜
    </div>

  </div>
</div>
`,
    });
  } catch (error) {
    console.error("❌ User Email Error:", error);
  }
};