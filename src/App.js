import './App.css';
import Nav from './Nav.js';
import ReactModal from 'react-modal';
import React, { useState } from 'react';
import Resume from './Resume.js';
import AnimateText from './AnimateText.js';
import AnimateSVG from './AnimateSVG.js';
import styled from 'styled-components';
import Button from './Button.js';

ReactModal.setAppElement('#root');

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const animatedtext = "hello...";
  const innerText = "Click to See Resume";

  function handleOpenModal() {
    setIsOpen(true);
  }
  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav></Nav>
        <AnimateText text={animatedtext}></AnimateText>
        <Name>
          <div>i am kacy hulme</div>
        </Name>
        <div>
          front end web developer
        </div>
       <AnimateSVG></AnimateSVG>
        <Button onClick={handleOpenModal} text={innerText}></Button>
        <div>
          find the code for this website on my github account <a href="https://github.com/kacyhulme/mywebsite">here</a>
        </div>
      </header>
      <ReactModal isOpen={modalIsOpen} shouldCloseOnOverlayClick={true}>
      <button onClick={handleCloseModal}>close modal</button>
      <Resume></Resume>
      </ReactModal>
    </div>
  );
}

export default App;

const Name = styled.h1`
  font-family: "Misto";
  display: flex;
  justify-content: flex-start;
`
