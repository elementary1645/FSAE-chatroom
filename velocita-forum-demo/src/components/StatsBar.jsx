import { stats } from "../data/forumData";

export default function StatsBar() {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <h3>{stats.questions}</h3>
        <p>Questions</p>
      </div>
      <div className="stat-card">
        <h3>{stats.answers}</h3>
        <p>Answers</p>
      </div>
      <div className="stat-card highlight">
        <h3>{stats.unanswered}</h3>
        <p>Unanswered</p>
      </div>
      <div className="stat-card">
        <h3>{stats.members}</h3>
        <p>Members</p>
      </div>
    </div>
  );
}