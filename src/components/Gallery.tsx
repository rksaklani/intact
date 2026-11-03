import Image from "next/image";

export default function Gallery() {
  return (
    <section className="content" id="gallery">
      <div className="container">
        <div className="section-top">
          <div>
            <div className="kicker">A glimpse inside</div>
            <h2>
              Knowledge. Practice.
              <br />
              Professional care.
            </h2>
          </div>
          <p className="section-intro">
            A small preview using the clinic reference photos provided for this
            website concept.
          </p>
        </div>
        <div className="gallery-row">
          <div className="gallery-large">
            <Image
              src="/images/clinic-1.png"
              alt="Dental journal publications displayed at the clinic"
              width={900}
              height={350}
            />
          </div>
          <div className="gallery-small">
            <Image
              src="/images/clinic-2.png"
              alt="Clinic contact card"
              width={500}
              height={220}
            />
            <p>
              Clinic details and doctor credentials, as shared in the reference
              material.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
