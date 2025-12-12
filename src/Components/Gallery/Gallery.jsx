import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';

export default function Gallery() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      easing: 'ease-out-cubic',
      offset: 60,
    });
  }, []);

  const galleryImages = [
    { src: '/images/1jpg.jpg?w=800', title: 'Welcome Area with Toys' },
    { src: '/images/2.jpg?w=800', title: 'Colorful Waiting Room' },
    { src: '/images/3.jpg?w=800', title: 'Examination Room' },
    { src: '/images/4.jpg?w=800', title: 'Happy Child with Doctor' },
    { src: '/images/5.jpg?w=800', title: 'Play Corner Full of Fun' },
    { src:'/images/6.jpg?w=800', title: 'Bright Consultation Room' },
    { src:'/images/7.jpg?w=800', title: 'Friendly Doctor with Patient' },
    { src: '/images/8.jpg?w=800', title: 'Warm Check-up Moment' },
    { src: '/images/baby1.jpg?w=800', title: 'Smiling Child During Visit' },
    { src: '/images/doctor.jpg?w=800', title: 'Modern & Clean Clinic' },
    { src:'/images/doctor1jpg.jpg?w=800', title: 'Comfortable Recovery Area' },
    { src: '/images/9.jpg?w=800', title: 'Cheerful Clinic Atmosphere' },
  ];

  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const lightboxSlides = galleryImages.map(img => ({ src: img.src }));

  return (
    <>
      <section
        id="gallery"
        className="py-9 py-lg-11 position-relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #fce7f3 0%, #fae8ff 50%, #e0e7ff 100%)',
        }}
      >
        <br/><br/><br/><br/><br/><br/>

        <div className="position-absolute inset-0 pointer-events-none opacity-10">
          <i className="fas fa-heart text-pink-300 position-absolute text-9xl animate-pulse" style={{ top: '12%', left: '8%' }}></i>
          <i className="fas fa-camera text-purple-300 position-absolute text-8xl" style={{ top: '30%', right: '10%' }}></i>
          <i className="fas fa-smile-beam text-yellow-300 position-absolute text-9xl animate-pulse" style={{ bottom: '18%', left: '12%' }}></i>
        </div>

        <div className="container position-relative">

          <div className="text-center mb-8" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-3">Clinic Gallery</h2>
            <br/><br/>
            <p
              className="fs-3 fw-semibold mb-4"
              style={{
                background: 'linear-gradient(90deg, #ec4899, #c084fc, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              A Warm & Child-Friendly Space
            </p>
            <p className="text-muted col-lg-8 mx-auto fs-5">
              Take a look inside our colorful clinic – designed with love for your little ones
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {galleryImages.map((image, i) => (
              <div
                key={i}
                className="col-6 col-md-4 col-lg-3"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div
                  className="position-relative overflow-hidden rounded-3 shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  onClick={() => {
                    setIndex(i);
                    setOpen(true);
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-100"
                    style={{
                      height: '250px',      
                      objectFit: 'cover',   
                      borderRadius: '16px',
                      transition: 'transform 0.6s ease'
                    }}
                    loading="lazy"
                  />
                  <div className="position-absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <p className="text-white fw-semibold text-lg drop-shadow-lg">{image.title}</p>
                  </div>
                  <div className="position-absolute top-50 start-50 translate-middle opacity-0 hover:opacity-100 transition-opacity duration-400">
                    <i className="fas fa-search-plus text-white text-4xl drop-shadow-2xl"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={index}
            slides={lightboxSlides}
            plugins={[Thumbnails]}
            thumbnails={{
              width: 90,
              height: 70,
              border: 0,
              borderRadius: 8,
              gap: 16
            }}
            styles={{ container: { backgroundColor: 'rgba(0,0,0,0.92)' } }}
          />

          <br/>
          <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="600">
            <p className="text-muted mb-4 fs-5">Love what you see?</p>
            <a
              href="#appointment"
              className="btn rounded-pill px-4 py-2 shadow fw-bold text-white d-inline-flex align-items-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #ec4899, #d946ef, #a855f7)',
                fontSize: '1rem',
                minWidth: '200px',
              }}
            >
              <i className="fas fa-calendar-check fa-beat"></i>
              Book Appointment
              <i className="fas fa-arrow-right ms-1"></i>
            </a>
          </div>
          <br/><br/><br/>
        </div>
      </section>
    </>
  );
}
