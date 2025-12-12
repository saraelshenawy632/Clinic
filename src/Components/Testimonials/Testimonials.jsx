import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      mirror: false,
      easing: "ease-out-cubic",
      offset: 80,
    });
  }, []);

  const reviews = [
    {
      name: "Sarah Mohamed",
      child: "Youssef – 4 years",
      stars: 5,
      text: "Dr. Ahmed is amazing! My son used to cry at every doctor visit, but here he actually looks forward to it. The clinic is super clean and child-friendly.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Omar Khaled",
      child: "Twins Mariam & Ali – 2 years",
      stars: 5,
      text: "Best pediatrician in Cairo! He diagnosed my twins' allergy on the first visit when others couldn't. Very patient and explains everything clearly.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Layla Ahmed",
      child: "Zain – 6 months",
      stars: 5,
      text: "I love how Dr. Ahmed follows growth charts so carefully and gives practical advice about feeding and sleep. The WhatsApp booking is a lifesaver!",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Mostafa Hassan",
      child: "Lina – 7 years",
      stars: 5,
      text: "Professional, kind, and never rushes the visit. My daughter had asthma and now she's much better thanks to his treatment plan. Highly recommend!",
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    },
    {
      name: "Nour Tarek",
      child: "Adam – 3 years",
      stars: 5,
      text: "The clinic feels like home! The toys, the colors, the warm welcome — everything is made for kids. Dr. Ahmed is very caring and knowledgeable.",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      name: "Ahmed Samir",
      child: "Farida – 1 year",
      stars: 5,
      text: "We came for vaccination and stayed for the trust. Dr. Ahmed takes time with every child, answers all questions, and never makes you feel rushed.",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ];

  return (
    <>
      <section
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

        <div className="position-absolute inset-0 pointer-events-none opacity-10">
          <i
            className="fas fa-heart text-pink-300 position-absolute text-9xl animate-pulse"
            style={{ top: "15%", left: "10%" }}
          ></i>
          <i
            className="fas fa-star text-purple-300 position-absolute text-8xl"
            style={{ top: "35%", right: "15%" }}
          ></i>
          <i
            className="fas fa-smile-beam text-yellow-300 position-absolute text-9xl animate-pulse"
            style={{ bottom: "20%", left: "12%" }}
          ></i>
        </div>

        <div className="container position-relative">
          <div className="text-center mb-9" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Happy Parents Reviews</h2>
            <br />

            <p
              className="fs-3 fw-semibold mb-3"
              style={{
                background: "linear-gradient(90deg, #ec4899, #c084fc, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              What Our Families Say About Us
            </p>
            <p className="text-muted fs-5">
              More than{" "}
              <strong className="text-pink-600">1,500+ happy families</strong>{" "}
              trust Dr. Ahmed with their children
            </p>
          </div>

          <div className="row g-4 g-lg-5 justify-content-center">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="col-md-6 col-lg-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="h-100 p-5 bg-white rounded-4 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-pink-100">
                  <div className="d-flex align-items-center mb-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="rounded-circle border border-3 border-white shadow"
                      width="70"
                      height="70"
                    />
                    <div className="ms-3">
                      <h5 className="mb-1 fw-bold">{review.name}</h5>
                      <p className="text-muted small mb-0">{review.child}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    {[...Array(review.stars)].map((_, i) => (
                      <i
                        key={i}
                        className="fas fa-star text-warning me-1"
                        style={{ filter: "drop-shadow(0 0 4px gold)" }}
                      ></i>
                    ))}
                    <span className="text-success small ms-2 fw-bold">
                      Verified Parent
                    </span>
                  </div>

                  <p className="text-muted fst-italic lh-lg mb-4">
                    "{review.text}"
                  </p>

                  <div className="text-end">
                    <small className="text-success fw-bold">
                      <i className="fab fa-whatsapp me-1"></i>
                      Real Review via WhatsApp
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <br />
          <div
            className="text-center mt-10"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <p className="text-muted mb-4 fs-5">Be the next happy family</p>
            <a
              href="https://wa.me/201234567890?text=Hello%20Dr.%20Ahmed%2C%20I%20saw%20the%20amazing%20reviews%20and%20want%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="btn rounded-pill px-4 py-2 shadow fw-bold text-white d-inline-flex align-items-center gap-2"
              style={{
                background:
                  "linear-gradient(135deg, #ec4899, #d946ef, #a855f7)",
                fontSize: "1rem",
                minWidth: "200px",
              }}
            >
              <i className="fab fa-whatsapp fa-lg fa-beat"></i>
              Book Appointment Now
            </a>

            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </section>
    </>
  );
}
