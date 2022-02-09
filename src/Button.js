import styled from "styled-components";

const Button = ({text, onClick}) => {
  return (
    <ButtonStyles>
      <button onClick={onClick}>{text}</button>
    </ButtonStyles>
  )
}

export default Button;


const ButtonStyles = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  button {
    border: 2px solid white;
    color: white;
    width: 180px;
    height: 80px;
    outline: none;
    cursor: pointer;
    background: none;
    transition: .5s;
    font-size: 24px;
    border-radius: 5px;
    font-family: "Fabulist";
    &:hover{
      border: none;
      color: black;
      font-size: 28px;
      transform:scale(1.1);
      background-color: white;
      transition: all 0.3s ease-in-out;
    }
  }
}`;
