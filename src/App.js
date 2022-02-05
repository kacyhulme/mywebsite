import './App.css';
import Nav from './Nav.js';
import ReactModal from 'react-modal';
import React, { useState } from 'react';
import Resume from './Resume.js';
import AnimateText from './AnimateText.js';
import AnimateSVG from './AnimateSVG.js';
import SimpleSVG from './SimpleSVG';
import styled from 'styled-components';

ReactModal.setAppElement('#root');

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
 
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
        <Name>
        <AnimateText></AnimateText>
          <div>i am kacy hulme</div>
        </Name>
       <AnimateSVG></AnimateSVG>
       <SimpleSVG></SimpleSVG>
        <button onClick={handleOpenModal}>Click to See Resume</button>
        <p>
          front end web developer
        </p>
        <small>
          find the code for this website on my github account <a href="https://github.com/kacyhulme/mywebsite">here</a>
        </small>
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
