import BookVisitButton from "./BookVisitButton";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact-grid">
        <div>
          <div className="kicker" style={{ color: "#c7e8a2" }}>
            Visit 32 Intact
          </div>
          <h2>
            Let&apos;s talk about
            <br />
            your next visit.
          </h2>
          <p className="contact-copy">
            For appointment enquiries and clinic information, contact the team
            using the details below — or request a visit online.
          </p>
          <div className="contact-actions">
            <BookVisitButton>Book a Visit ↗</BookVisitButton>
            <a className="btn light" href="tel:+919418092355">
              Call the clinic ↗
            </a>
            <a
              className="btn light"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/search/?api=1&query=32+Intact+Multispeciality+Dental+Clinic+283%2F6+Moti+Bazar+Mandi+Himachal+Pradesh"
            >
              Get directions ↗
            </a>
          </div>
        </div>
        <div className="contact-details">
          <div className="contact-item">
            <small>Call us</small>
            <a href="tel:+919418092355">94180 92355</a>
            <br />
            <a href="tel:+919418492355">94184 92355</a>
          </div>
          <div className="contact-item">
            <small>Email</small>
            <a href="mailto:lizagurmeet2002@gmail.com">
              lizagurmeet2002@gmail.com
            </a>
          </div>
          <div className="contact-item full">
            <small>Find us</small>
            <p>283/6, Moti Bazar, Near P.N.B., Mandi (H.P.) – 175001</p>
          </div>
        </div>
      </div>
    </section>
  );
}
