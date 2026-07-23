import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Primary navigation">
        <Link className="navbar__brand" to="/">
          JC<span>.</span>
        </Link>

        <div className="navbar__links">
          <NavLink
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
            to="/"
          >
            Home
          </NavLink>

          <a className="navbar__link" href="/#projects">
            Projects
          </a>

          <a
            className="navbar__link navbar__github"
            href="https://github.com/JTClay1"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;