import { Link } from "react-router-dom";
import styled from 'styled-components';
import WritingSampleOne from './WritingSampleOne.js';
import WritingSampleTwo from './WritingSampleTwo.js';
import WritingSampleThree from './WritingSampleThree.js';

function Writing() {
  return (
    <div>
      <Link to="/">Home</Link>
      <h2>Writing Samples</h2>
      <WritingSampleOne />
      <WritingSampleTwo />
      <WritingSampleThree />
    </div>
  )
}

export default Writing;
