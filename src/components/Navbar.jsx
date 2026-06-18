import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-50 bg-[#111111]/100 backdrop-blur-md border-b border-gray-800 ">
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-white font-bold text-xl">
          My Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-bold text-gray-300">
          {navLinks.map((item, i) => (
            <li key={i}>
              <a
                href={item.link}
                className="hover:text-blue-400 transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f172a] border-t border-gray-800 px-6 py-4">
          <ul className="flex flex-col gap-4 text-gray-300">
            {navLinks.map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-blue-400 transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;