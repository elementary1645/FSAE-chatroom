import { Search } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="topbar">
      <div className="brand">Velocita</div>

      <nav className="topnav">
        <NavLink to="/">Questions</NavLink>
        <NavLink to="/tags">Tags</NavLink>
        <NavLink to="/subsystem/chassis">Subsystems</NavLink>
        <NavLink to="/members">Members</NavLink>
        <NavLink to="/rules">Rules DB</NavLink>
      </nav>

      <div className="search-box">
        <Search size={16} />
        <input type="text" placeholder="Search knowledge base..." />
      </div>
    </header>
  );
}