import { useEffect, useState } from "react";
import { navItems } from "../../data/socialLinks";
import "./Navbar.css";
import ResumeButton from "../ResumeButton/ResumeButton";

const ids = {
  Home: "home",
  About: "about",
  Skills: "skills",
  Projects: "projects",
  Journey: "journey",
  Contact: "contact",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false),
    [open, setOpen] = useState(false),
    [active, setActive] = useState("home");

  useEffect(() => {
    const on = () => {
      setScrolled(scrollY > 20);
      const cur = Object.values(ids)
        .filter(
          (i) => document.getElementById(i)?.getBoundingClientRect().top < 140,
        )
        .pop();
      cur && setActive(cur);
    };
    on();
    addEventListener("scroll", on, { passive: true });
    return () => removeEventListener("scroll", on);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-in">
        <a
          href="#home"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            go("home");
          }}
        >
          Aadi<span>.</span>
        </a>

        <nav className={`links ${open ? "open" : ""}`} aria-label="Primary">
          {navItems.map((n) => (
            <a
              key={n}
              href={`#${ids[n]}`}
              className={active === ids[n] ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                go(ids[n]);
              }}
            >
              {n}
            </a>
          ))}

          {/* Mobile menu ke andar Resume (purana Let's Talk hata diya) */}
          <div className="nav-resume-m">
            <ResumeButton variant="filled" size="md">Resume</ResumeButton>
          </div>
        </nav>

        {/* Desktop par Resume button */}
        <div className="nav-resume-d">
          <ResumeButton variant="filled" size="sm">Resume</ResumeButton>
        </div>

        <button
          className="burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
