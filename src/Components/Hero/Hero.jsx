import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      easing: "ease-out-cubic",
      offset: 60,
    });
  }, []);

  return (
    <>
      <div className="my-8 my-lg-10"></div>
      <div className="my-6"></div>

      <section
        id="home"
        className="min-vh-100 d-flex align-items-center position-relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #fce7f3 0%, #fae8ff 50%, #e0e7ff 100%)",
        }}
      >
        <div className="position-absolute inset-0 pointer-events-none opacity-10">
          <i
            className="fas fa-heart text-pink-300 position-absolute text-5xl animate-pulse"
            style={{ top: "10%", left: "8%" }}
          ></i>
          <i
            className="fas fa-star text-purple-300 position-absolute text-4xl"
            style={{ top: "28%", right: "12%" }}
          ></i>
          <i
            className="fas fa-smile-beam text-yellow-300 position-absolute text-5xl animate-pulse"
            style={{ bottom: "18%", left: "10%" }}
          ></i>
        </div>

        <div className="container position-relative">
          <div className="row align-items-center g-4 justify-content-center">
            <div
              className="col-lg-6 text-center text-lg-start"
              data-aos="fade-right"
            >
              <div className="mb-3 d-inline-block">
                <span
                  className="badge bg-success text-white px-2 py-1 rounded-pill fw-bold d-flex align-items-center gap-2"
                  style={{ fontSize: "0.75rem" }}
                >
                  <i
                    className="fas fa-circle text-white animate-ping"
                    style={{ width: "8px", height: "8px" }}
                  ></i>
                  Open Now • 5:00 PM – 9:00 PM
                </span>
              </div>

              <h1 className="display-6 fw-bold mb-3 lh-1">
                Dr. Ahmed Mohamed
                <br />
                <span
                  className="d-block mt-2"
                  style={{
                    background:
                      "linear-gradient(90deg, #ec4899, #d946ef, #a855f7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontSize: "0.95rem",
                  }}
                >
                  Consultant Pediatrician & Neonatologist
                </span>
              </h1>

              <p className="lead text-muted mb-4 col-lg-10 mx-auto mx-lg-0 fs-6">
                12+ years of excellence • Growth monitoring • Vaccinations •
                Respiratory care
                <br className="d-none d-lg-block" />
                State-of-the-art clinic designed with love, comfort, and your
                child's smile
              </p>

              <div className="d-grid d-md-flex gap-2 justify-content-center justify-content-lg-start mb-4">
                <a
                  href="#appointment"
                  className="btn rounded-pill px-4 py-2 fw-bold text-white d-flex align-items-center justify-content-center gap-2"
                  style={{
                    background: "linear-gradient(135deg, #ec4899, #d946ef)",
                    fontSize: "0.85rem",
                  }}
                >
                  <i className="fas fa-calendar-check"></i>
                  Book Appointment
                  <span
                    className="badge bg-pink-600 text-white rounded-pill px-2 py-0 small fw-bold"
                    style={{ fontSize: "0.65rem", background: "transparent" }}
                  >
                    Most Popular
                  </span>
                </a>

                <a
                  href="https://wa.me/201234567890?text=Hello Dr. Ahmed, I'd like to book an appointment for my child"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn rounded-pill px-4 py-2 border-2 border-success text-success fw-bold d-flex align-items-center justify-content-center gap-2"
                  style={{ fontSize: "0.85rem" }}
                >
                  <i className="fab fa-whatsapp fa-sm"></i>
                  WhatsApp Instantly
                </a>
              </div>

              <div className="row g-3 text-center text-lg-start mt-4">
                {[
                  { num: "2,000+", label: "Happy Families" },
                  { num: "12+", label: "Years Experience" },
                  { num: "4.9", label: "Google Rating" },
                  { num: "24/7", label: "WhatsApp Support" },
                ].map((stat, i) => (
                  <div key={i} className="col-6 col-sm-3 mb-2">
                    <h5 className="fw-bold text-pink-600 mb-1 fs-5">
                      {stat.num}
                    </h5>
                    <p className="small text-muted mb-0">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="col-lg-6 text-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="position-relative d-inline-block">
                <div
                  className="position-absolute inset-0 rounded-3 blur-2xl opacity-25 animate-pulse"
                  style={{
                    background:
                      "radial-gradient(circle, #ec4899, transparent 70%)",
                  }}
                />
                <img
                  src="https://media.istockphoto.com/id/1496720432/photo/you-see-theres-nothing-to-worry-about.jpg?s=612x612&w=0&k=20&c=62B6WRu-KmN9fGhM6zQjDsRn3JP1wExMFc3geAzje8k="
                  alt="Dr. Ahmed Mohamed with a child"
                  className="img-fluid rounded-3 shadow"
                  style={{
                    maxWidth: "280px",
                    border: "8px solid white",
                    borderRadius: "20px",
                    transform: "rotate(2deg)",
                    boxShadow: "0 20px 50px rgba(236,72,153,0.25)",
                  }}
                />
                <div className="my-8 my-lg-10"></div>

                <div
                  className="position-absolute top-100 start-50 translate-middle-x bg-success text-white px-3 py-1 rounded-pill shadow fw-bold d-flex align-items-center gap-2"
                  style={{ marginTop: "-50px", fontSize: "0.75rem" }}
                >
                  <div className="position-relative">
                    <div
                      className="bg-white rounded-circle animate-ping"
                      style={{ width: "10px", height: "10px" }}
                    ></div>
                    <div
                      className="bg-white rounded-circle position-absolute top-0 start-0"
                      style={{ width: "10px", height: "10px" }}
                    ></div>
                  </div>
                  Doctor Available Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-6"
        style={{
          background:
            "linear-gradient(135deg, #fce7f3 0%, #fae8ff 50%, #e0e7ff 100%)",
          minHeight: "70vh",
        }}
      >
        <div className="container">
          <br />
          <br />
          <br />
          <br />

          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-6 fw-bold mb-2">Why Parents Trust Us</h2>
            <p
              className="fs-5 fw-semibold mb-4"
              style={{
                background: "linear-gradient(90deg, #ec4899, #c084fc, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Join 2,000+ Happy Families
            </p>
          </div>

          <div className="row g-3 justify-content-center">
            {[
              {
                icon: "fa-user-md",
                title: "Expert Consultant",
                desc: "Master's from Ain Shams University",
              },
              {
                icon: "fa-baby",
                title: "Child-Friendly Clinic",
                desc: "Toys, colors & happiness everywhere",
              },
              {
                icon: "fa-clock",
                title: "Evening Appointments",
                desc: "5–9 PM daily (except Friday)",
              },
              {
                icon: "fa-whatsapp",
                title: "Instant Booking",
                desc: "One message = Confirmed appointment",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="col-6 col-md-4 col-lg-3"
                data-aos="flip-up"
                data-aos-delay={i * 120}
              >
                <div className="text-center p-3 bg-white rounded-3 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 h-100">
                  <div
                    className="rounded-circle mx-auto mb-2 d-flex align-items-center justify-content-center shadow-sm"
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "linear-gradient(135deg, #fce7f3, #fae8ff)",
                    }}
                  >
                    <i
                      className={`fas ${item.icon} text-2xl text-pink-600`}
                    ></i>
                  </div>
                  <h6 className="fw-bold mb-1">{item.title}</h6>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
