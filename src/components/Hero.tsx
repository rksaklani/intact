import Image from "next/image";
import BookVisitButton from "./BookVisitButton";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow">A better experience in dental care</div>
          <h1>
            Make room for a <em>brighter</em> smile.
          </h1>
          <p className="hero-copy">
            Discover 32 Intact Smile Designers — a multispeciality dental clinic
            in Moti Bazar, Mandi, led by dental professionals with specialist
            qualifications and teaching experience.
          </p>
          <div className="hero-actions">
            <BookVisitButton>Book a Visit ↗</BookVisitButton>
            <a className="btn light" href="#doctors">
              Meet the doctors
            </a>
          </div>
          <div className="hero-meta">
            <span>283/6, Moti Bazar, Mandi</span>
            <span className="meta-line" />
            <span>Himachal Pradesh · 175001</span>
          </div>
        </div>
        <div className="visual">
          <Image
            className="visual-main"
            src="/images/clinic-1.png"
            alt="Dental journal publications displayed at 32 Intact clinic"
            width={900}
            height={420}
            priority
          />
          <div className="visual-card">
            <Image
              src="/images/clinic-2.png"
              alt="32 Intact clinic information and doctor details"
              width={400}
              height={130}
            />
            <div className="visual-caption">32 INTACT · SMILE DESIGNERS</div>
          </div>
          <div className="floating-label">Specialist-led dental care</div>
        </div>
      </div>
    </section>
  );
}
