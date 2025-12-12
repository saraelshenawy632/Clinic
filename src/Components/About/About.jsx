import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: true,
      mirror: false,
      easing: "ease-out-cubic",
      offset: 80,
    });
  }, []);

  const credentials = [
    {
      icon: "fa-graduation-cap",
      title: "Master's in Pediatrics",
      desc: "Ain Shams University – Excellence in Child Health",
      color: "text-purple-600",
    },
    {
      icon: "fa-users",
      title: "Egyptian Pediatric Association",
      desc: "Active Member & Contributor",
      color: "text-blue-600",
    },
    {
      icon: "fa-calendar-check",
      title: "12+ Years Experience",
      desc: "Caring for thousands of happy children & families",
      color: "text-green-600",
    },
    {
      icon: "fa-syringe",
      title: "Vaccination Specialist",
      desc: "Growth monitoring & immunization expert",
      color: "text-indigo-600",
    },
    {
      icon: "fa-lungs",
      title: "Neonatal & Respiratory Expert",
      desc: "Advanced care for newborns & breathing conditions",
      color: "text-pink-600",
    },
  ];

  return (
    <>
      <section
        className="about-section"
        style={{
          background:
            "linear-gradient(135deg, #fce7f3 0%, #fae8ff 50%, #e0e7ff 100%)",
          minHeight: "100vh",
        }}
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="position-absolute inset-0 pointer-events-none opacity-12">
          <i
            className="fas fa-heart text-pink-300 position-absolute text-8xl md:text-9xl animate-pulse"
            style={{ top: "8%", left: "5%" }}
          ></i>
          <i
            className="fas fa-star text-purple-300 position-absolute text-7xl md:text-8xl"
            style={{ top: "25%", right: "8%" }}
          ></i>
          <i
            className="fas fa-baby text-yellow-300 position-absolute text-8xl md:text-9xl animate-pulse"
            style={{ bottom: "15%", left: "10%" }}
          ></i>
        </div>

        <div className="container position-relative px-4 px-md-5">
          <div className="text-center mb-10 mb-lg-12" data-aos="fade-up">
            <h2 className="display-6 display-md-5 display-lg-4 fw-bold mb-4 lh-tight">
              Meet Dr. Ahmed Mohamed
            </h2>
            <br />

            <p
              className="fs-4 fs-md-3 fw-bold mb-4 d-block"
              style={{
                background: "linear-gradient(90deg, #ec4899, #c084fc, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Your Trusted Pediatrician
            </p>
            <p className="text-muted col-lg-9 mx-auto fs-6 fs-md-5">
              With over 12 years of dedicated care, Dr. Ahmed combines medical
              expertise with genuine love for children
            </p>
          </div>

          <div className="row align-items-center g-5 g-lg-6 justify-content-center">
            <div
              className="col-lg-5 text-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="position-relative d-inline-block">
                <div
                  className="position-absolute inset-0 rounded-4 blur-3xl opacity-50 animate-pulse"
                  style={{
                    background:
                      "radial-gradient(circle, #ec4899, transparent 70%)",
                  }}
                />

                <img
                  src="https://www.shutterstock.com/image-photo/portrait-smiling-male-doctor-uniform-260nw-2281024889.jpg"
                  alt="Dr. Ahmed Mohamed"
                  className="img-fluid rounded-4 shadow-2xl border border-10 md:border-12 border-white position-relative z-10"
                  style={{
                    maxWidth: "360px",
                    width: "100%",
                    transform: "rotate(-4deg)",
                    boxShadow: "0 30px 80px rgba(236,72,153,0.35)",
                  }}
                />

                <img
                  src="https://media.istockphoto.com/id/1496720417/photo/high-five-for-being-such-a-brave-little-boy.jpg?s=612x612&w=0&k=20&c=jrhbbPCEEN5Z3nSmTdu6fBC84v0kFuuJ8L4l2reghn4="
                  alt="Dr. Ahmed with child"
                  className="img-fluid rounded-4 shadow-2xl border border-8 md:border-10 border-white position-absolute z-20 d-none d-md-block"
                  style={{
                    width: "180px",
                    bottom: "-70px",
                    right: "-40px",
                    transform: "rotate(12deg)",
                    boxShadow: "0 20px 60px rgba(236,72,153,0.3)",
                  }}
                />

                <div
                  className="position-absolute top-100 start-50 translate-middle-x bg-success text-white px-4 px-md-5 py-3 rounded-pill shadow-2xl fw-bold d-flex align-items-center gap-2 text-sm md:text-base"
                  style={{ marginTop: "-25px" }}
                >
                  <div className="position-relative">
                    <div
                      className="bg-white rounded-circle animate-ping"
                      style={{ width: "14px", height: "14px" }}
                    ></div>
                    <div
                      className="bg-white rounded-circle position-absolute top-0 start-0"
                      style={{ width: "14px", height: "14px" }}
                    ></div>
                  </div>
                  Available Now
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="row g-4 g-md-5">
                {credentials.map((item, i) => (
                  <div
                    key={i}
                    className="col-12 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay={i * 120 + 300}
                  >
                    <div className="d-flex align-items-center gap-4 p-4 p-md-5 bg-white/95 backdrop-blur-sm rounded-3 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-100 border border-pink-100">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 shadow-lg"
                        style={{
                          width: "68px",
                          height: "68px",
                          background:
                            "linear-gradient(135deg, #fce7f3, #fae8ff)",
                        }}
                      >
                        <i
                          className={`fas ${item.icon} text-3xl ${item.color}`}
                        ></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-1 text-gray-800">
                          {item.title}
                        </h5>
                        <p className="text-muted small lh-lg mb-0">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <br />
              <br />

              <div
                className="text-center mt-6"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <a
                  href="#appointment"
                  className="btn rounded-pill px-5 py-3 shadow fw-bold text-white d-inline-flex align-items-center gap-3 hover:scale-105 transition-all duration-200"
                  style={{
                    background:
                      "linear-gradient(135deg, #ec4899, #d946ef, #a855f7)",
                    fontSize: "1rem",
                    minWidth: "220px",
                  }}
                >
                  <i className="fas fa-calendar-check fa-beat"></i>
                  Book Appointment with Dr. Ahmed
                  <i className="fas fa-arrow-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
      </section>
    </>
  );
}
