import { Link, useParams } from "react-router-dom";
import { questions } from "../data/forumData";
import ImageGallery from "../components/ImageGallery";

export default function QuestionPage() {
  const { questionId } = useParams();
  const question = questions.find((q) => q.id === Number(questionId));

  if (!question) {
    return <div className="empty-state">Question not found.</div>;
  }

  return (
    <div className="thread-page">
      <div className="breadcrumb-row">
        <Link to="/">All Questions</Link>
        <span>/</span>
        <span>{question.title}</span>
      </div>

      <div className="thread-card">
        <div className="thread-meta">
          <div><strong>{question.votes}</strong> votes</div>
          <div><strong>{question.answers}</strong> answers</div>
          <div><strong>{question.views}</strong> views</div>
          <div><strong>{question.author}</strong></div>
        </div>

        <div className="thread-content">
          <h1>{question.title}</h1>
          <p>{question.content}</p>

          <div className="tag-row">
            {question.tags.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>

          <ImageGallery images={question.images} />

          <div className="mock-answer-box">
            <h3>Sample Answers Section</h3>
            <div className="mock-answer">
              <strong>Team Lead Reply</strong>
              <p>
                This is a frontend demo answer block. Later, you can connect this to a backend
                with Node.js + Express + MongoDB or PostgreSQL.
              </p>
            </div>
            <div className="mock-answer">
              <strong>Subsystem Expert Reply</strong>
              <p>
                You can also add comments, voting, image uploads, and answer submission in the
                next phase once the API is ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}