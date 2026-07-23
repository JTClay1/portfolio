import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav aria-label="Primary navigation">
        <NavLink to="/">Josh Clay</NavLink>

        <div>
          <NavLink to="/">Home</NavLink>
          <a href="/#projects">Projects</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;