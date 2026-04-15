import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="topbar">
      <div className="brand">Velocita</div>
      <nav className="topnav">
        <a href="#">Questions</a>
        <a href="#">Tags</a>
        <a href="#">Subsystems</a>
        <a href="#">Members</a>
        <a href="#">Rules DB</a>
      </nav>
      <div className="search-box">
        <Search size={16} />
        <input type="text" placeholder="Search knowledge base..." />
      </div>
    </header>
  );
}