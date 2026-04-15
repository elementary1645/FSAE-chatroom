import { NavLink } from "react-router-dom";
import { subsystems } from "../data/forumData";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <div className="sidebar-title">Browse</div>
        {subsystems.map((item) => (
          <NavLink
            key={item.slug}
            to={item.slug === "all-questions" ? "/" : `/subsystem/${item.slug}`}
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
            end={item.slug === "all-questions"}
          >
            <span>{item.name}</span>
            <span>{item.count}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
}