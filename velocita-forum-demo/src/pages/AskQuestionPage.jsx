import { useState } from "react";

export default function AskQuestionPage() {
  const [title, setTitle] = useState("");
  const [subsystem, setSubsystem] = useState("suspension");
  const [body, setBody] = useState("");

  return (
    <div>
      <div className="page-header page-header-stack">
        <div className="eyebrow">New</div>
        <h1>Ask Question</h1>
        <p className="subsystem-description">
          Frontend demo form only. No backend submission yet.
        </p>
      </div>

      <div className="form-card">
        <label className="form-label">Question Title</label>
        <input
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your question title"
        />

        <label className="form-label">Subsystem</label>
        <select
          className="form-input"
          value={subsystem}
          onChange={(e) => setSubsystem(e.target.value)}
        >
          <option value="chassis">Chassis</option>
          <option value="suspension">Suspension</option>
          <option value="powertrain">Powertrain</option>
          <option value="aerodynamics">Aerodynamics</option>
          <option value="electronics">Electronics</option>
          <option value="brakes">Brakes</option>
          <option value="cost-bom">Cost / BOM</option>
          <option value="rules-regs">Rules & Regs</option>
        </select>

        <label className="form-label">Question Details</label>
        <textarea
          className="form-input form-textarea"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Describe the issue, setup, data, and what you’ve already tried"
        />

        <button className="ask-btn" type="button">
          Submit Question
        </button>
      </div>
    </div>
  );
}