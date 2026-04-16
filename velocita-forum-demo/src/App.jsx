import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import SubsystemPage from "./pages/SubsystemPage.jsx";
import QuestionPage from "./pages/QuestionPage.jsx";
import TagsPage from "./pages/TagsPage.jsx";
import MembersPage from "./pages/MembersPage.jsx";
import RulesDbPage from "./pages/RulesDbPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="subsystem/:subsystemSlug" element={<SubsystemPage />} />
        <Route path="question/:questionId" element={<QuestionPage />} />
        <Route path="tags" element={<TagsPage />} />
        <Route path="members" element={<MembersPage />} />
        <Route path="rules-db" element={<RulesDbPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}