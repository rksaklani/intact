const doctors = [
  {
    label: "Dental surgeon · Endodontist",
    name: "Dr. Gurmeet Singh Sachdeva",
    degree: "BDS, MDS (Chennai)",
    role: "Professor, Himachal Dental College, Sundernagar",
    gold: true,
  },
  {
    label: "Dental surgeon · Oral & maxillofacial pathologist",
    name: "Dr. Liza Sachdeva",
    degree: "BDS, MDS (Chennai)",
    role: "Professor, Himachal Dental College, Sundernagar",
    gold: false,
  },
];

export default function Doctors() {
  return (
    <section className="content doctors" id="doctors">
      <div className="container">
        <div className="section-top">
          <div>
            <div className="kicker">Meet your dental team</div>
            <h2>
              Expertise you can
              <br />
              feel confident in.
            </h2>
          </div>
          <p className="section-intro">
            Meet the doctors featured in the clinic&apos;s official contact card.
          </p>
        </div>
        <div className="doctor-grid">
          {doctors.map((doctor) => (
            <article className="doctor-card" key={doctor.name}>
              <div className="doctor-label">{doctor.label}</div>
              <h3>{doctor.name}</h3>
              <div className="degree">{doctor.degree}</div>
              <p className="doctor-role">{doctor.role}</p>
              {doctor.gold ? <span className="gold">GOLD MEDALIST</span> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
