const stats = [
  {
    icon: "✦",
    title: "Multispeciality Clinic",
    detail: "Dental care in one place",
  },
  {
    icon: "＋",
    title: "Specialist Doctors",
    detail: "BDS · MDS (Chennai)",
  },
  {
    icon: "⌖",
    title: "Central Mandi Location",
    detail: "Moti Bazar, near P.N.B.",
  },
];

export default function Stats() {
  return (
    <div className="stats">
      <div className="container stats-grid">
        {stats.map((stat) => (
          <div className="stat" key={stat.title}>
            <div className="stat-icon">{stat.icon}</div>
            <div>
              <strong>{stat.title}</strong>
              <span>{stat.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
