import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo-box" onClick={() => scrollToSection("home")}>
          <img src="/images/logo.jpg" alt="Logo" className="logo-img" />
        </div>

        <div className={`nav-links ${open ? "show" : ""}`}>
          {[
            "home",
            "about",
            "services",
            "gallery",
            "testimonials",
            "appointment",
            "contact",
          ].map((section) => (
            <button key={section} onClick={() => scrollToSection(section)}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        <div className="menu-btn" onClick={() => setOpen(!open)}>
          <span className={open ? "close" : ""}></span>
          <span className={open ? "close" : ""}></span>
          <span className={open ? "close" : ""}></span>
        </div>
      </div>
    </nav>
  );
}
