import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import SubsystemPage from "./pages/SubsystemPage.jsx";
import QuestionPage from "./pages/QuestionPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="subsystem/:subsystemSlug" element={<SubsystemPage />} />
        <Route path="question/:questionId" element={<QuestionPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}