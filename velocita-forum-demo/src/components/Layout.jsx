import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";

export default function Layout({ children }) {
  return (
    <div style={{ minHeight: "100vh", background: "black", color: "white" }}>
      <Header />
      <div style={{ display: "grid", gridTemplateColumns: "280px 1fr" }}>
        <Sidebar />
        <main style={{ padding: "40px" }}>
          {children}
        </main>
      </div>
    </div>
  );
}