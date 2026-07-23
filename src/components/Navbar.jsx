import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="topbar">
      <nav className="topbar__inner container" aria-label="Primary navigation">
        <Link className="topbar__brand" to="/">
          <span className="topbar__brand-icon" aria-hidden="true">
            JC
          </span>
          Josh Clay
        </Link>

        <div className="topbar__links">
          <a href="/#home">Home</a>
          <a href="/#projects">Projects</a>
          <a href="/#about">About</a>
          <a
            href="https://github.com/JTClay1"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <div className="topbar__status">
          <span aria-hidden="true" />
          Available
        </div>
      </nav>
    </header>
  );
}

export default Navbar;