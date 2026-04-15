import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { questions, subsystems } from "../data/forumData";
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

  return (
    <div>
      <div className="page-header page-header-stack">
        <div className="eyebrow">Subsystem</div>
        <h1>{subsystem.name}</h1>
        <p className="subsystem-description">
          Showing all questions related to {subsystem.name}.
        </p>
      </div>

      <div className="question-list">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))
        ) : (
          <div className="empty-state">No posts available in this subsystem yet.</div>
        )}
      </div>
    </div>
  );
}