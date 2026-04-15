import { useMemo, useState } from "react";
import { questions } from "../data/forumData";
import StatsBar from "../components/StatsBar";
import QuestionCard from "../components/QuestionCard";

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      const text = `${q.title} ${q.excerpt} ${q.tags.join(" ")}`.toLowerCase();
      return text.includes(search.toLowerCase());
    });
  }, [search]);

  return (
    <div>
      <div className="page-header">
        <div>
          <div className="eyebrow">All</div>
          <h1>Questions</h1>
        </div>
        <input
          className="page-search"
          placeholder="Filter questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <StatsBar />

      <div className="question-list">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
}