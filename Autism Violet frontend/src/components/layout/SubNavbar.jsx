import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext"; // ✅ ADD

const SubNavbar = () => {
  const { dark } = useTheme(); // ✅ GLOBAL THEME

  const links = [
    { name: "Early Intervention", path: "/early-intervention" },
    { name: "Therapy Services", path: "/therapies" },
    { name: "Assessments", path: "/assessments" },
    { name: "Intervention Programs", path: "/programs" },
    { name: "Family Support", path: "/parent-support" },
    { name: "Learning Resources", path: "/resources" },
  ];

  return (
    <div
      className="w-full text-sm sticky top-[72px] z-40 overflow-hidden transition-all duration-300"
      style={{
        background: dark
          ? "#000"
          : "linear-gradient(90deg, #6A3FA0, #B58ED6)",
        color: "#fff",
        borderBottom: dark ? "1px solid #222" : "none",
      }}
    >
      {/* 💻 Desktop */}
      <div className="hidden md:flex w-full">
        <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-center gap-10 h-[52px]">

          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="whitespace-nowrap relative group transition"
            >
              {link.name}

              {/* Hover underline */}
              <span
                className="absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                style={{ background: "#fff" }}
              />
            </Link>
          ))}

        </div>
      </div>

      {/* 📱 Mobile Marquee */}
      <div className="md:hidden h-[52px] flex items-center overflow-hidden">
        <div className="flex gap-8 whitespace-nowrap animate-marquee">
          {[...links, ...links].map((link, index) => (
            <Link key={index} to={link.path} className="px-4">
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* 🎬 Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            display: flex;
            min-width: max-content;
            animation: marquee 30s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default SubNavbar;