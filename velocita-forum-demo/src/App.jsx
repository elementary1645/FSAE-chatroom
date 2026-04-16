import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";

import HomePage from "./pages/HomePage.jsx";
import SubsystemPage from "./pages/SubsystemPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

import TagsPage from "./pages/TagsPage.jsx";
import MembersPage from "./pages/MembersPage.jsx";
import RulesPage from "./pages/RulesPage.jsx";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subsystem/:subsystemSlug" element={<SubsystemPage />} />

        {/* NEW ROUTES */}
        <Route path="/tags" element={<TagsPage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/rules" element={<RulesPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}