import { useMemo } from "react";
import { useParams } from "react-router-dom";
import {
  questions,
  subsystems,
  subsystemDescriptions,
} from "../data/forumData";
import QuestionCard from "../components/QuestionCard";

export default function SubsystemPage() {
  const { subsystemSlug } = useParams();

  const subsystem = subsystems.find((s) => s.slug === subsystemSlug);

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => q.subsystem === subsystemSlug);
  }, [subsystemSlug]);

  if (!subsystem) {
    return <div className="empty-state">Subsystem not found.</div>;
  }

  const totalVotes = filteredQuestions.reduce((sum, q) => sum + q.votes, 0);
  const totalViews = filteredQuestions.reduce((sum, q) => sum + q.views, 0);

  return (
    <div>
      <div className="page-header page-header-stack">
        <div className="eyebrow">Subsystem</div>
        <h1>{subsystem.name}</h1>
        <p className="subsystem-description">
          {subsystemDescriptions[subsystemSlug]}
        </p>
      </div>

      <div className="subsystem-stats">
        <div className="subsystem-stat-box">
          <h3>{filteredQuestions.length}</h3>
          <p>Questions</p>
        </div>
        <div className="subsystem-stat-box">
          <h3>{totalVotes}</h3>
          <p>Total Votes</p>
        </div>
        <div className="subsystem-stat-box">
          <h3>{totalViews}</h3>
          <p>Total Views</p>
        </div>
      </div>

      <div className="question-list">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))
        ) : (
          <div className="empty-state">
            No posts available in this subsystem yet.
          </div>
        )}
      </div>
    </div>
  );
}