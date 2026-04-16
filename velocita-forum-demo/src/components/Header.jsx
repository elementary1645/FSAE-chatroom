import { Search, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { subsystems } from "../data/forumData";

export default function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const topSubsystems = subsystems.filter(
    (item) => item.slug !== "all-questions"
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="topbar">
      <div className="brand">Velocita</div>

      <nav className="topnav">
        <Link to="/">Questions</Link>
        <Link to="/tags">Tags</Link>

        <div className="topnav-dropdown" ref={dropdownRef}>
          <button
            type="button"
            className="topnav-dropdown-button"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span>Subsystems</span>
            <ChevronDown size={14} />
          </button>

          {open && (
            <div className="topnav-dropdown-menu">
              {topSubsystems.map((item) => (
                <Link
                  key={item.slug}
                  to={`/subsystem/${item.slug}`}
                  className="topnav-dropdown-item"
                  onClick={() => setOpen(false)}
                >
                  <span>{item.name}</span>
                  <span>{item.count}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/members">Members</Link>
        <Link to="/rules-db">Rules DB</Link>
      </nav>

      <div className="search-box">
        <Search size={16} />
        <input type="text" placeholder="Search knowledge base..." />
      </div>
    </header>
  );
}