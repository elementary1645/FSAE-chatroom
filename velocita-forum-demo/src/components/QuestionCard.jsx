import { Link } from "react-router-dom";

export default function QuestionCard({ question }) {
  return (
    <article className="question-card">
      <div className="question-metrics">
        <div>
          <strong>{question.votes}</strong>
          <span>Votes</span>
        </div>
        <div>
          <strong>{question.answers}</strong>
          <span>Answers</span>
        </div>
        <div>
          <strong>{question.views}</strong>
          <span>Views</span>
        </div>
      </div>

      <div className="question-main">
        <Link to={`/question/${question.id}`} className="question-title">
          {question.title}
        </Link>
        <p className="question-excerpt">{question.excerpt}</p>

        <div className="tag-row">
          {question.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>

        <div className="question-footer">
          <span>{question.status}</span>
          <span>asked by {question.author}</span>
        </div>
      </div>
    </article>
  );
}