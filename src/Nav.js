import { Link } from "react-router-dom";
import styled from "styled-components";

function Nav() {
  return (
        <NavStyles>
        <ul>
          <Link to="/about">Web Development</Link>
          <Link to="/about">Writing Samples</Link>
          <Link to="/about">Photography</Link>
        </ul>
      </NavStyles>
  )
}

export default Nav;

const NavStyles = styled.nav`
  margin-bottom: 2rem;
  flex-grow: 1;
  a {
    padding-right: 2rem;
    text-decoration: none;
  }
`
