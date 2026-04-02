import { Link } from "react-router-dom";
import Container from "../common/Container";
import { useTheme } from "../../context/ThemeContext";
import logo from "../../assets/logo/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about-us" },
  { label: "Services", to: "/services" },
  { label: "FAQ", to: "/faq" },
  { label: "Career", to: "/career" },
  { label: "Contact", to: "/contact-us" },
  { label: "Kenya program", to: "/kenya" },
  { label: "Privacy policy", to: "/privacy-policy" },
];

const contactItems = [
  {
    label: "Location",
    value: "Massachusetts, USA",
    icon: (
      <svg className="w-3.5 h-3.5 stroke-[#7C3AED]" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "info@autismviolet.com",
    icon: (
      <svg className="w-3.5 h-3.5 stroke-[#7C3AED]" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+1 (508) 373-4511",
    icon: (
      <svg className="w-3.5 h-3.5 stroke-[#7C3AED]" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Autism-Violet/61576823500353/",
    icon: (
      <svg className="w-3.5 h-3.5 fill-[#7C3AED]" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/autismviolet/",
    icon: (
      <svg className="w-3.5 h-3.5 fill-[#7C3AED]" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="white" />
      </svg>
    ),
  },
];

const Footer = () => {
  const { dark } = useTheme();

  const colors = {
    bg:          dark ? "#0a0a0a" : "#faf9ff",
    border:      dark ? "#1f1f2e" : "#DDD6FE",
    heading:     dark ? "#c4b5fd" : "#4B2C73",
    body:        dark ? "#a89bc2" : "#5a4e72",
    muted:       dark ? "#7a6a9a" : "#9880c0",
    iconBg:      dark ? "#1e1530" : "#EEEDFE",
    socialBg:    dark ? "#111" : "#fff",
    socialHover: dark ? "#1e1530" : "#EEEDFE",
    primary:     "#7C3AED",
  };

  return (
    <footer
      className="border-t transition-colors duration-300"
      style={{ background: colors.bg, borderColor: colors.border }}
    >
      <Container>

        {/* MAIN GRID */}
        <div className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-10">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Autism Violet" className="h-18 w-auto" />
              <h2
                className="font-playfair text-xl font-bold"
                style={{ color: colors.heading }}
              >
                Autism Violet
              </h2>
            </div>
            <p
              className="text-[13.5px] leading-relaxed max-w-xs mb-0"
              style={{ color: colors.body }}
            >
              Helping children with autism unlock their potential through
              science-backed, compassionate care — building communication,
              confidence, and independence every day.
            </p>
          </div>

          {/* NAV + CONTACT */}
          <div className="grid grid-cols-2 md:contents gap-6 sm:gap-8">

            {/* NAVIGATION */}
            <div>
              <h3
                className="text-[13px] font-semibold tracking-widest uppercase mb-4"
                style={{ color: colors.heading }}
              >
                Navigation
              </h3>
              <div className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-[13px] transition-colors duration-150"
                    style={{ color: colors.body }}
                    onMouseEnter={e => e.currentTarget.style.color = colors.primary}
                    onMouseLeave={e => e.currentTarget.style.color = colors.body}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h3
                className="text-[13px] font-semibold tracking-widest uppercase mb-4"
                style={{ color: colors.heading }}
              >
                Contact
              </h3>
              <div className="flex flex-col gap-4">
                {contactItems.map((item) => {
                  let href = "#";
                  if (item.label === "Email") href = `mailto:${item.value}`;
                  else if (item.label === "Phone") href = `tel:${item.value}`;
                  else if (item.label === "Location") href = "https://www.google.com/maps?q=Massachusetts";

                  return (
                    <a
                      key={item.label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-start gap-2.5 hover:opacity-80 transition"
                    >
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: colors.iconBg }}
                      >
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <p
                          className="text-[11px] uppercase tracking-wider mb-0.5"
                          style={{ color: colors.muted }}
                        >
                          {item.label}
                        </p>
                        <p
                          className="text-[12.5px] break-words leading-snug"
                          style={{ color: colors.body }}
                        >
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          className="border-t py-5 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderColor: colors.border }}
        >

          {/* Socials */}
          <div className="flex gap-2 md:order-last">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-150"
                style={{
                  background: colors.socialBg,
                  border: `1px solid ${colors.border}`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = colors.socialHover;
                  e.currentTarget.style.borderColor = colors.primary;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = colors.socialBg;
                  e.currentTarget.style.borderColor = colors.border;
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <p
            className="text-[12px] text-center md:text-left"
            style={{ color: colors.muted }}
          >
            © {new Date().getFullYear()} Autism Violet · All rights reserved
          </p>

          <p
            className="text-[12px] text-center"
            style={{ color: colors.muted }}
          >
            Design & Developed by{" "}
            
            <a
              href="https://www.webieapp.com/"
              target="_blank"
              rel="noreferrer"
              className="font-medium hover:underline"
              style={{ color: colors.primary }}
            >
              WebieApp Solutions
            </a>
          </p>

        </div>
      </Container>
    </footer>
  );
};

export default Footer;