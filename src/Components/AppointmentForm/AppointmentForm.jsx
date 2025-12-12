import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AppointmentForm() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      mirror: false,
      easing: "ease-out-cubic",
      offset: 100,
    });
  }, []);

  const [form, setForm] = useState({
    parentName: "",
    phone: "",
    childName: "",
    date: "",
    time: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const msg = `Hello Dr. Ahmed

I'd like to book an appointment:

Parent Name: ${form.parentName}
Phone/WhatsApp: ${form.phone}
Child Name: ${form.childName}
Preferred Date: ${form.date}
Preferred Time: ${form.time}

Notes: ${form.notes || "No additional notes"}

Thank you! We can't wait to see you`;

    setTimeout(() => {
      window.open(
        `https://wa.me/201234567890?text=${encodeURIComponent(msg)}`,
        "_blank"
      );
    }, 1000);
  };

  return (
    <>
      <section
        id="appointment"
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

        <div className="position-absolute inset-0 pointer-events-none opacity-10">
          <i
            className="fas fa-heart text-pink-300 position-absolute text-9xl animate-pulse"
            style={{ top: "12%", left: "10%" }}
          ></i>
          <i
            className="fas fa-baby text-purple-300 position-absolute text-8xl"
            style={{ top: "30%", right: "12%" }}
          ></i>
          <i
            className="fas fa-calendar-check text-yellow-300 position-absolute text-9xl animate-pulse"
            style={{ bottom: "18%", left: "15%" }}
          ></i>
        </div>

        <div className="container position-relative">
          <div className="text-center mb-8" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-3">Book an Appointment</h2>
            <br />
            <br />

            <p
              className="fs-3 fw-semibold mb-4"
              style={{
                background: "linear-gradient(90deg, #ec4899, #c084fc, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Fast, Easy & Caring
            </p>
            <p className="text-muted col-lg-8 mx-auto">
              Fill the form and we'll confirm your visit via WhatsApp in minutes
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-7 col-xl-6">
              <div
                className="bg-white rounded-4 shadow-xl p-5 p-lg-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {submitted ? (
                  <div className="text-center py-8">
                    <i className="fas fa-check-circle text-success fa-5x mb-4 animate__animated animate__bounceIn"></i>
                    <h3 className="fw-bold text-success mb-3">Request Sent!</h3>
                    <p className="text-muted fs-5">
                      Thank you! We're opening WhatsApp to complete your
                      booking...
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="parentName"
                          value={form.parentName}
                          onChange={handleChange}
                          className="form-control form-control-lg rounded-pill px-4 py-3 border-pink-200 focus:border-pink-500"
                          placeholder="Parent's Name"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="form-control form-control-lg rounded-pill px-4 py-3 border-success focus:border-success"
                          placeholder="WhatsApp Number"
                          required
                        />
                      </div>

                      <div className="col-12">
                        <input
                          type="text"
                          name="childName"
                          value={form.childName}
                          onChange={handleChange}
                          className="form-control form-control-lg rounded-pill px-4 py-3 border-purple-200 focus:border-purple-500"
                          placeholder="Child's Name & Age (e.g. Sara - 4 years)"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <input
                          type="date"
                          name="date"
                          value={form.date}
                          onChange={handleChange}
                          min={new Date().toISOString().split("T")[0]}
                          className="form-control form-control-lg rounded-pill px-4 py-3 border-pink-200 focus:border-pink-500"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <select
                          name="time"
                          value={form.time}
                          onChange={handleChange}
                          className="form-select form-select-lg rounded-pill px-4 py-3 border-purple-200 focus:border-purple-500"
                          required
                        >
                          <option value="">Select Time</option>
                          {[
                            "5:00 PM",
                            "5:30 PM",
                            "6:00 PM",
                            "6:30 PM",
                            "7:00 PM",
                            "7:30 PM",
                            "8:00 PM",
                            "8:30 PM",
                          ].map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-12">
                        <textarea
                          name="notes"
                          value={form.notes}
                          onChange={handleChange}
                          className="form-control rounded-3 p-4 border-pink-100 focus:border-pink-400"
                          rows="3"
                          placeholder="Any symptoms or special requests? (Optional)"
                        ></textarea>
                      </div>

                      <div className="col-12 text-center mt-4">
                        <button
                          type="submit"
                          className="btn rounded-pill px-4 py-2 fw-bold text-white shadow hover:shadow-lg hover:scale-105 transition-all d-inline-flex align-items-center gap-2"
                          style={{
                            background:
                              "linear-gradient(135deg, #ec4899, #d946ef, #a855f7)",
                            fontSize: "1rem",
                            minWidth: "200px",
                          }}
                        >
                          <i className="fab fa-whatsapp fa-lg fa-beat"></i>
                          Send Booking Request
                          <i className="fas fa-arrow-right ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>

              <br />
              <br />
              <br />
              <div
                className="text-center mt-7"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <p className="text-muted">
                  <i className="fas fa-bolt text-yellow-500 me-2"></i>
                  <strong>We reply within 10-15 minutes</strong> during clinic
                  hours
                </p>
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
