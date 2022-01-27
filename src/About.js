import { Link } from "react-router-dom";
import Headshot from './headshot.jpg';
import styled from 'styled-components';

function About() {
  return (
    <div>
      <Link to="/">Home</Link>
      <h2>About</h2>
      <HeadshotStyles src={Headshot} className="" alt="headshot" />
    </div>
  )
}

const HeadshotStyles = styled.img`
  width: auto;
  width 10rem;
`

export default About;
