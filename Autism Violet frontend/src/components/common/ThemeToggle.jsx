import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggle = () => {
    const isDark = !dark;
    setDark(isDark);

    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggle}
      className="w-12 h-6 bg-gray-300 rounded-full flex items-center p-1"
    >
      <div
        className={`w-4 h-4 bg-white rounded-full transition ${
          dark ? "translate-x-6" : ""
        }`}
      />
    </button>
  );
};

export default ThemeToggle;