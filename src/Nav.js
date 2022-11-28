import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Nav() {
  return (
        <NavStyles>
        <ul>
          <Link to="/webdevelopment">Web Development</Link>
          <Link to="/writing">Writing Samples</Link>
          <Link to="/photography">Photography</Link>
        </ul>
      </NavStyles>
  )
}

export default Nav;

const NavStyles = styled.nav`
  margin-bottom: 2rem;
  flex-grow: 1;
  a {
    color: white;
    padding-right: 2rem;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`
