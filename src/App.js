import logo from './infinity.svg';
import './App.css';
import Nav from './Nav.js';
import ReactModal from 'react-modal';
import React, { useState, useEffect } from 'react';
import Resume from './Resume.js';

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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Kacy Hulme
        </p>
        <button onClick={handleOpenModal}>Click to See Resume</button>
        <p>
          Front End Web Developer
        </p>
      </header>
      <ReactModal isOpen={modalIsOpen} shouldCloseOnOverlayClick={true}>
      <button onClick={handleCloseModal}>Close Modal</button>
      <Resume></Resume>
      </ReactModal>
    </div>
  );
}

export default App;
