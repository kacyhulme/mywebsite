import { Link } from "react-router-dom";
import styled from "styled-components";

function Nav() {
  return (
        <NavStyles>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </ul>
      </NavStyles>
  )
}

export default Nav;

const NavStyles = styled.nav`
  a {
    padding-right: 1rem;
  }
`
