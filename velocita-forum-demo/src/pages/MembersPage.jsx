export default function MembersPage() {
  const members = [
    { name: "Arjun K.", role: "Suspension Lead" },
    { name: "Priya M.", role: "Electronics Lead" },
    { name: "Rohit S.", role: "Aerodynamics Lead" },
    { name: "Nikhil R.", role: "Brakes Engineer" },
    { name: "Megha D.", role: "Chassis Engineer" },
    { name: "Vivek L.", role: "Powertrain Engineer" },
  ];

  return (
    <div className="utility-page">
      <div className="page-header page-header-stack">
        <div className="eyebrow">Community</div>
        <h1>Members</h1>
        <p className="subsystem-description">
          Team members and contributors across the forum.
        </p>
      </div>

      <div className="member-grid">
        {members.map((member) => (
          <div key={member.name} className="member-card">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}