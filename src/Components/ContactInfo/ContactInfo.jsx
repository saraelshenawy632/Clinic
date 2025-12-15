import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactInfo() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      mirror: false,
      easing: "ease-out-cubic",
      offset: 80,
    });
  }, []);

  return (
    <>
      <section
        id="contact"
        className="py-9 py-lg-11 position-relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #fce7f3 0%, #fae8ff 50%, #e0e7ff 100%)",
        }}
      >
        <br />
        <br />
        <br />

        <div className="position-absolute inset-0 pointer-events-none opacity-8">
          <i
            className="fas fa-heart text-pink-300 position-absolute text-9xl animate-pulse"
            style={{ top: "10%", left: "8%" }}
          ></i>
          <i
            className="fas fa-star text-purple-300 position-absolute text-8xl"
            style={{ top: "28%", right: "12%" }}
          ></i>
          <i
            className="fas fa-baby text-yellow-300 position-absolute text-8xl animate-pulse"
            style={{ bottom: "18%", left: "10%" }}
          ></i>
        </div>

        <div className="container position-relative">
          <div className="text-center mb-8" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-3 text-gray-800">
              Get in Touch
            </h2>
            <br />
            <br />

            <p
              className="fs-3 fw-semibold"
              style={{
                background: "linear-gradient(90deg, #ec4899, #c084fc, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              We're Here for Your Child
            </p>
            <p className="text-muted col-lg-7 mx-auto mt-4 fs-5">
              Book an appointment or ask anything — we reply instantly on
              WhatsApp!
            </p>
          </div>

          <br />
          <br />
          <br />

          <div className="row g-4 g-lg-5 justify-content-center max-w-4xl mx-auto mb-9">
            <div
              className="col-sm-6 col-md-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="text-center p-5 bg-white rounded-3 shadow-lg hover:shadow-xl transition-all duration-300 h-100">
                <i className="fas fa-phone-alt fa-3x text-success mb-3"></i>
                <h5 className="fw-bold mb-2">Phone & WhatsApp</h5>
                <p className="fw-bold text-success mb-3 fs-5">
                  +20 123 456 7890
                </p>
                <a
                  href="https://wa.me/201234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success btn-sm rounded-pill px-4 py-2"
                >
                  <i className="fab fa-whatsapp me-1"></i> Chat Now
                </a>
              </div>
            </div>

            <div
              className="col-sm-6 col-md-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="text-center p-5 bg-white rounded-3 shadow-lg hover:shadow-xl transition-all duration-300 h-100">
                <i className="fas fa-map-marker-alt fa-3x text-pink-600 mb-3"></i>
                <h5 className="fw-bold mb-2">Clinic Location</h5>
                <p className="text-muted small mb-3">
                  123 Main Street
                  <br />
                  Nasr City, Cairo
                </p>
                <a
                  href="https://maps.google.com/?q=123+Main+Street+Nasr+City+Cairo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-pink btn-sm rounded-pill px-4 py-2 text-pink-600 border-pink-600 hover:bg-pink-600 hover:text-white"
                >
                  <i className="fas fa-directions me-1"></i> Open Map
                </a>
              </div>
            </div>

            <div
              className="col-sm-6 col-md-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="text-center p-5 bg-white rounded-3 shadow-lg hover:shadow-xl transition-all duration-300 h-100">
                <i className="fas fa-clock fa-3x text-purple-600 mb-3"></i>
                <h5 className="fw-bold mb-2">Working Hours</h5>
                <p className="mb-2">
                  Sat – Thu:{" "}
                  <strong className="text-success">5:00 – 9:00 PM</strong>
                </p>
                <p className="text-danger small fw-bold">Friday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/201234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="position-fixed bottom-0 end-0 m-3"
        style={{
          width: "50px",
          height: "50px",
          zIndex: 1050,
        }}
      >
        <div className="bg-success text-white rounded-circle shadow-lg d-flex align-items-center justify-content-center animate__animated animate__bounce animate__infinite w-100 h-100">
          <i className="fab fa-whatsapp fa-lg"></i>
        </div>
      </a>
         <br />

    </>
  );
}
