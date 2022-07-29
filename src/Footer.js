import styled from "styled-components";
import Button from "./Button.js";

const Footer = ({innerText, handleOpenModal}) => {
  return (
  <StyledFooter>
    <Button onClick={handleOpenModal} text={innerText}></Button>
    <div>
      find the code for this website on my github account <a href="https://github.com/kacyhulme/mywebsite">here</a>
    </div>
  </StyledFooter>
  )
}

export default Footer;

const StyledFooter = styled.div`
  margin-bottom: 3rem;
`;
