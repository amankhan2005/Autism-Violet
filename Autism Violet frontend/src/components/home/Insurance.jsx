import { useTheme } from "../../context/ThemeContext";

const InsuranceSection = () => {
  const { dark } = useTheme();

  // ✅ DESIGN SYSTEM
  const colors = {
    bg: dark ? "#000" : "#fff",
    card: dark ? "#0f0f0f" : "#faf9ff",
    border: dark ? "#1f1f1f" : "#EDE7F6",
    text: dark ? "#fff" : "#1a0a3b",
    muted: dark ? "#bbb" : "#6b7280",
    primary: "#7C3AED",
    accent: "#F97316",
  };

  return (
    <section
      className="py-20 transition-colors duration-300"
      style={{ background: colors.bg }}
    >
      <div className="max-w-[1200px] mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <p
            className="text-[11px] tracking-[0.2em] uppercase mb-3"
            style={{ color: colors.primary }}
          >
            Insurance Partners
          </p>

          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ color: colors.text }}
          >
            We’re affiliated with{" "}
            <span className="text-orange-500 italic">
              trusted providers
            </span>
          </h2>

          <p
            className="max-w-xl mx-auto text-[15px]"
            style={{ color: colors.muted }}
          >
            We work with leading insurance providers to make therapy accessible and affordable.
          </p>
        </div>

        {/* LOGOS GRID */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">

          {/* CARD */}
          {[ 
            { src: "/logos/bcbs.png", alt: "Blue Cross Blue Shield" },
            { src: "/logos/aetna.png", alt: "Aetna" },
          ].map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl px-10 py-8 transition-all duration-300"
              style={{
                background: colors.card,
                border: `1px solid ${colors.border}`,
              }}
            >
              {/* Glow effect */}
              <div className="relative">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-16 md:h-20 object-contain mx-auto transition-transform duration-300 group-hover:scale-105"
                />

                {/* subtle glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
                  style={{
                    boxShadow: dark
                      ? "0 0 30px rgba(124,58,237,0.15)"
                      : "0 10px 30px rgba(124,58,237,0.08)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* EXTRA TEXT */}
        <div className="text-center mt-12">
          <p
            className="text-[13px]"
            style={{ color: colors.muted }}
          >
            Don’t see your provider? Contact us — we’re constantly expanding our network.
          </p>
        </div>

      </div>
    </section>
  );
};

export default InsuranceSection;