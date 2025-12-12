import "./App.css";
import Footer from "./Components/Footer/Footer.jsx";
import AppointmentForm from "./Components/AppointmentForm/AppointmentForm.jsx";
import ContactInfo from "./Components/ContactInfo/ContactInfo.jsx";
import Gallary from "./Components/Gallery/Gallery.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Services from "./Components/Services/Services.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import About from "./Components/About/About.jsx";
import { useState } from "react";
function App() {
  const [appointmentData, setAppointmentData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="gallery">
        <Gallary />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="appointment">
        <AppointmentForm
          appointmentData={appointmentData}
          setAppointmentData={setAppointmentData}
        />
      </section>

      <section id="contact">
        <ContactInfo />
      </section>
      <Footer />
    </div>
  );
}

export default App;
