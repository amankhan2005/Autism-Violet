// 🎯 COLORS
const violet = "#7C3AED";
const orange = "#F97316";
const dark = "#1a0a3b";

// ================= ADMIN TEMPLATE =================
export const adminTemplate = ({
  name,
  email,
  phone,
  position,
  experience,
  message,
}) => `
  <div style="font-family: Arial; padding:20px;">
    
    <h2 style="color:${violet};">New Job Application</h2>

    <div style="border-left:4px solid ${orange}; padding-left:12px; margin:16px 0;">
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Position:</b> ${position}</p>
      <p><b>Experience:</b> ${experience || "N/A"}</p>
    </div>

    <p style="color:${dark};">
      <b>Message:</b><br/>
      ${message || "No message provided"}
    </p>

  </div>
`;

// ================= USER TEMPLATE =================
export const userTemplate = ({ name, position }) => `
  <div style="font-family: Arial; padding:24px; background:#faf9ff;">
    
    <div style="max-width:500px; margin:auto; background:white; padding:24px; border-radius:12px;">
      
      <h2 style="color:${violet}; margin-bottom:10px;">
        Thank You for Applying!
      </h2>

      <p style="color:${dark};">
        Hi <b>${name}</b>,
      </p>

      <p style="color:#555;">
        We’ve received your application for the 
        <b>${position}</b> role at <b>Autism Violet</b>.
      </p>

      <div style="background:#FFF3E8; padding:12px; border-radius:8px; margin:16px 0;">
        <p style="margin:0; color:${orange}; font-weight:bold;">
          Our team will review your application and get back to you soon.
        </p>
      </div>

      <p style="color:#777; font-size:14px;">
        If you have any questions, feel free to reply to this email.
      </p>

      <p style="margin-top:20px;">
        Regards,<br/>
        <b style="color:${violet};">Autism Violet Team</b>
      </p>

    </div>
  </div>
`;