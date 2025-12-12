import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      mirror: false,
      easing: "ease-out-cubic",
      offset: 80,
    });
  }, []);

  const services = [
    {
      title: "General Pediatric Check-up",
      desc: "Comprehensive health exams to keep your child healthy and growing strong.",
      icon: "fa-stethoscope",
      color: "text-blue-600",
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop",
    },
    {
      title: "Vaccinations & Immunization",
      desc: "Gentle and safe vaccines to protect your child from preventable diseases.",
      icon: "fa-syringe",
      color: "text-green-600",
      img: "/images/Vaccinations.jpg",
    },
    {
      title: "Growth & Nutrition Monitoring",
      desc: "Tracking development with personalized feeding and growth advice.",
      icon: "fa-chart-line",
      color: "text-purple-600",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop",
    },
    {
      title: "Respiratory Diseases Treatment",
      desc: "Expert care for asthma, bronchitis, and all breathing concerns.",
      icon: "fa-lungs",
      color: "text-indigo-600",
      img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop",
    },
    {
      title: "Diarrhea & Vomiting Management",
      desc: "Fast recovery with safe rehydration and treatment for tummy troubles.",
      icon: "fa-tint",
      color: "text-teal-600",
      img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop",
    },
    {
      title: "Newborn Examination",
      desc: "Complete newborn check-ups and early screening with love.",
      icon: "fa-baby",
      color: "text-pink-600",
      img: "/images/Newborn Examination.jpg",
    },
  ];

  return (
    <>
      <section
        id="services"
        className="py-9 py-lg-11 position-relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #fce7f3 0%, #fae8ff 50%, #e0e7ff 100%)",
        }}
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="position-absolute inset-0 pointer-events-none opacity-10">
          <i
            className="fas fa-heart text-pink-300 position-absolute text-9xl animate-pulse"
            style={{ top: "12%", left: "10%" }}
          ></i>
          <i
            className="fas fa-star text-purple-300 position-absolute text-8xl"
            style={{ top: "30%", right: "12%" }}
          ></i>
          <i
            className="fas fa-baby text-yellow-300 position-absolute text-9xl animate-pulse"
            style={{ bottom: "18%", left: "15%" }}
          ></i>
        </div>

        <div className="container position-relative">
          <div className="text-center mb-8" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-3">Our Services</h2>
            <p
              className="fs-3 fw-semibold mb-4"
              style={{
                background: "linear-gradient(90deg, #ec4899, #c084fc, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Comprehensive Care for Your Child
            </p>
            <p className="text-muted col-lg-8 mx-auto fs-5">
              From routine check-ups to specialized care, we’re here every step
              of the way
            </p>
          </div>

          <div className="row g-4 g-lg-5 justify-content-center">
            {services.map((service, i) => (
              <div
                key={i}
                className="col-md-6 col-lg-4"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="h-100 p-5 bg-white rounded-3 shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-3 text-center">
                  <div className="mb-4">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-100 rounded-3 object-cover shadow"
                      style={{ height: "180px" }}
                      loading="lazy"
                    />
                  </div>

                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4 shadow"
                    style={{
                      width: "70px",
                      height: "70px",
                      background: "linear-gradient(135deg, #fce7f3, #fae8ff)",
                    }}
                  >
                    <i
                      className={`fas ${service.icon} text-3xl ${service.color}`}
                    ></i>
                  </div>

                  <h5 className="fw-bold mb-2 fs-5">{service.title}</h5>
                  <p className="text-muted small lh-lg mb-0">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <br />
          <br />
          <div
            className="text-center mt-10"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <p className="text-muted mb-4 fs-5">
              Ready to give your child the best care?
            </p>
            <a
              href="#appointment"
              className="btn rounded-pill px-4 py-2 shadow fw-bold text-white d-inline-flex align-items-center gap-2"
              style={{
                background:
                  "linear-gradient(135deg, #ec4899, #d946ef, #a855f7)",
                fontSize: "1rem",
              }}
            >
              <i className="fab fa-whatsapp fa-sm fa-beat"></i>
              Book Appointment Now
            </a>
          </div>
          <br />
          <br />
          <br />
        </div>
      </section>
    </>
  );
}
