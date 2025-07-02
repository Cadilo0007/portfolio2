import { useState, useEffect } from "react";
import { FaHome, FaUserAlt, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showNav && (
        <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-60 px-6 py-3 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] flex items-center gap-6 text-amber-400 text-xl bg-gradient-to-br from-indigo-900/20 to-indigo-950/30 backdrop-blur-2xl border border-white/10">

          <a href="#hero" className="hover:text-indigo-300 transition" title="Home">
            <FaHome />
          </a>
          <a href="#about" className="hover:text-indigo-300 transition" title="About">
            <FaUserAlt />
          </a>
          <a href="#projects" className="hover:text-indigo-300 transition" title="Projects">
            <FaProjectDiagram />
          </a>
          <a href="#contact" className="hover:text-indigo-300 transition" title="Contact">
            <FaEnvelope />
          </a>
        </nav>
      )}
    </>
  );
};

export default Nav;
