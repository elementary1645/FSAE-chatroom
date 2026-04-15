import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";

export default function Layout() {
  return (
    <div style={{ minHeight: "100vh", background: "#050505", color: "white" }}>
      <Header />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "280px 1fr",
          minHeight: "calc(100vh - 73px)",
        }}
      >
        <Sidebar />
        <main style={{ padding: "28px" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}