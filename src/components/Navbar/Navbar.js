import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import "./NavbarStyles.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Education", path: "/education" },
    { name: "Freelancing", path: "/freelancing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`header ${scrolled ? "header-bg" : ""}`}>
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span>SARA</span>
          <span>SHAIKH</span>
        </Link>

        {/* Desktop / Mobile Navigation */}
        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Resume */}
          <a
            href="/Sara-Shaikh-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
            onClick={closeMenu}
          >
            Resume
            <FaArrowRight size={12} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>
    </header>
  );
};

export default Navbar;