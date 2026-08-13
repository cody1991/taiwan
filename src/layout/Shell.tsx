import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { trip } from "../data";

const links = [
  { to: "/", label: "总览" },
  { to: "/taiwan", label: "台湾" },
  { to: "/flights", label: "航班" },
  { to: "/permit", label: "入台证" },
  { to: "/options", label: "走法" },
  { to: "/checklist", label: "清单" },
];

export function Shell() {
  const [open, setOpen] = useState(false);

  return (
    <div className="shell">
      <a className="skip" href="#content">
        跳到正文
      </a>
      <aside className="rail">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="latin">Winter island</span>
          <strong>{trip.title}</strong>
          <small>{trip.subtitle}</small>
        </NavLink>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "收起" : "目录"}
        </button>
        <nav className={open ? "nav is-open" : "nav"} aria-label="行程章节">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
            >
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
