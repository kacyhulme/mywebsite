import { Link } from "react-router-dom";

function Nav() {
  return (
        <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/about">About</Link>
        </ul>
      </nav>
  )
}

export default Nav;
