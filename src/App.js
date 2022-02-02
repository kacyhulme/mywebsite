import './App.css';
import Nav from './Nav.js';
import ReactModal from 'react-modal';
import React, { useState } from 'react';
import Resume from './Resume.js';
import AnimateText from './AnimateText.js';
import AnimateSVG from './AnimateSVG.js';
import SimpleSVG from './SimpleSVG';

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
        <AnimateText></AnimateText>
        <p>
          Kacy Hulme
        </p>
       <AnimateSVG></AnimateSVG>
       <SimpleSVG></SimpleSVG>
        <button onClick={handleOpenModal}>Click to See Resume</button>
        <p>
          Front End Web Developer
        </p>
        <small>
          Find the code for this website on my GitHub account <a href="https://github.com/kacyhulme/mywebsite">here</a>
        </small>
      </header>
      <ReactModal isOpen={modalIsOpen} shouldCloseOnOverlayClick={true}>
      <button onClick={handleCloseModal}>Close Modal</button>
      <Resume></Resume>
      </ReactModal>
    </div>
  );
}

export default App;
