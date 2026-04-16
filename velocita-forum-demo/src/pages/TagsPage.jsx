export default function TagsPage() {
  const tags = [
    "Suspension",
    "Kinematics",
    "Electronics",
    "CAN Bus",
    "Powertrain",
    "Brakes",
    "Aerodynamics",
    "Rules",
    "Compliance",
    "Cost",
    "BOM",
  ];

  return (
    <div className="utility-page">
      <div className="page-header page-header-stack">
        <div className="eyebrow">Browse</div>
        <h1>Tags</h1>
        <p className="subsystem-description">
          Explore discussions grouped by topic tags.
        </p>
      </div>

      <div className="utility-tag-grid">
        {tags.map((tag) => (
          <div key={tag} className="utility-tag-card">
            <span className="utility-tag-pill">{tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}