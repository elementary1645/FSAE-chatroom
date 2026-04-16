export default function RulesDbPage() {
  const rules = [
    "Cockpit opening dimensions",
    "Brake system safety requirements",
    "Accumulator placement rules",
    "Aerodynamic device limits",
    "Electrical shutdown compliance",
    "Driver egress timing",
  ];

  return (
    <div className="utility-page">
      <div className="page-header page-header-stack">
        <div className="eyebrow">Reference</div>
        <h1>Rules DB</h1>
        <p className="subsystem-description">
          Quick rule references and compliance checkpoints.
        </p>
      </div>

      <div className="utility-rules-list">
        {rules.map((rule) => (
          <div key={rule} className="utility-rule-card">
            {rule}
          </div>
        ))}
      </div>
    </div>
  );
}