export default function About() {
  return (
    <section className="content" id="about">
      <div className="container">
        <div className="section-top">
          <div>
            <div className="kicker">Welcome to 32 Intact</div>
            <h2>
              Care shaped around
              <br />
              your smile.
            </h2>
          </div>
          <p className="section-intro">
            A clinic identity built around specialist knowledge, clinical
            experience and a commitment to dental care for the Mandi community.
          </p>
        </div>
        <div className="about-grid">
          <div className="about-panel">
            <div className="kicker">Our clinic</div>
            <p>
              32 Intact Smile Designers is a multispeciality dental clinic
              located at 283/6, Moti Bazar, Mandi, Himachal Pradesh. The
              clinic&apos;s displayed credentials include ISO 9001:2008
              certification.
            </p>
            <div className="feature-list">
              <div className="feature">
                <span className="tick">✓</span>
                <span>Multispeciality dental clinic</span>
              </div>
              <div className="feature">
                <span className="tick">✓</span>
                <span>
                  Specialist qualifications in endodontics and oral &amp;
                  maxillofacial pathology
                </span>
              </div>
              <div className="feature">
                <span className="tick">✓</span>
                <span>Convenient Moti Bazar location</span>
              </div>
            </div>
          </div>
          <div className="credentials">
            <div className="credential">
              <span className="credential-num">01</span>
              <div>
                <h3>Endodontics</h3>
                <p>Specialist expertise listed for Dr. Gurmeet Singh Sachdeva.</p>
              </div>
            </div>
            <div className="credential">
              <span className="credential-num">02</span>
              <div>
                <h3>Oral &amp; Maxillofacial Pathology</h3>
                <p>Specialist expertise listed for Dr. Liza Sachdeva.</p>
              </div>
            </div>
            <div className="credential">
              <span className="credential-num">03</span>
              <div>
                <h3>Academic experience</h3>
                <p>
                  Both doctors are listed as professors at Himachal Dental
                  College, Sundernagar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
