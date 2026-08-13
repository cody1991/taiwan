import { NavLink, Outlet } from "react-router-dom";
import { Snow } from "../components/Snow";
import { trip } from "../data";

const links = [
  { to: "/", label: "总览" },
  { to: "/taiwan", label: "台湾" },
  { to: "/clothes", label: "衣" },
  { to: "/food", label: "食" },
  { to: "/stay", label: "住" },
  { to: "/transit", label: "行" },
  { to: "/flights", label: "航班" },
  { to: "/permit", label: "入台证" },
  { to: "/checklist", label: "清单" },
];

export function Shell() {
  return (
    <div className="shell">
      <Snow />
      <a className="skip" href="#content">
        跳到正文
      </a>
      <aside className="rail">
        <NavLink to="/" className="brand">
          <span className="latin">Winter island</span>
          <strong>{trip.title}</strong>
          <small>{trip.subtitle}</small>
        </NavLink>
        <nav className="nav" aria-label="行程章节">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="stage" id="content">
        <Outlet />
      </main>
    </div>
  );
}
