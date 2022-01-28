import logo from './infinity.svg';
import './App.css';
import Nav from './Nav.js';
import ReactModal from 'react-modal';
import React, { useState } from 'react';
import Resume from './Resume.js';
import { useSpring, animated } from 'react-spring';
import { config } from 'react-spring';

ReactModal.setAppElement('#root');

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  })

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
        <animated.h1 style={props}>hello</animated.h1>
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
