import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Footer.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      mirror: false,
      easing: "ease-out-cubic",
      offset: 50,
    });
  }, []);

  return (
    <>
      <footer className="footer position-relative overflow-hidden">
        <br />
        <br /> <br /> <br />{" "}
        <div className="position-absolute inset-0 pointer-events-none opacity-10">
          <i
            className="fas fa-heart text-pink-400 position-absolute text-9xl animate-pulse"
            style={{ top: "20%", left: "10%" }}
          ></i>
          <i
            className="fas fa-star text-purple-400 position-absolute text-8xl animate__animated animate__tada animate__infinite animate__slow"
            style={{ top: "35%", right: "15%" }}
          ></i>
          <i
            className="fas fa-baby text-yellow-400 position-absolute text-9xl animate-pulse"
            style={{ bottom: "25%", left: "12%" }}
          ></i>
        </div>
        <div className="footer-container position-relative">
          <h3
            className="footer-title fw-bold mb-4"
            style={{
              background: "linear-gradient(90deg, #ec4899, #c084fc, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            data-aos="fade-up"
          >
            Dr. Ahmed Mohamed Pediatric Clinic
          </h3>

          <p
            className="footer-text fs-5 text-muted mb-5 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Caring for your child's health with love, expertise, and compassion
            since day one. Your trusted partner in every smile and every step of
            growth.
          </p>

          <div
            className="social-icons mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://wa.me/201234567890"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>

          <p
            className="footer-copy text-muted small"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            © 2025 Dr. Ahmed Mohamed Pediatric Clinic — All Rights Reserved
            <br />
            Made with <i className="fas fa-heart text-pink-600 mx-1"></i> for
            Happy Children & Families
          </p>
        </div>
      </footer>
    </>
  );
}
