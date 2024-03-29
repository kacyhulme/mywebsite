import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contact from './Contact';
import WebDevelopment from './WebDevelopment';
import Resume from './Resume';
import Writing from './Writing';
import WritingSampleOne from './WritingSampleOne';
import WritingSampleTwo from './WritingSampleTwo';
import WritingSampleThree from './WritingSampleThree';
import Photography from './Photography';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="contact" element={<Contact />} />
          <Route path="webdevelopment" element={<WebDevelopment />} />
          <Route path="resume" element={<Resume />} />
          <Route path="writing" element={<Writing />} />
          <Route path="writingsampleone" element={<WritingSampleOne />} />
          <Route path="writingsampletwo" element={<WritingSampleTwo />} />
          <Route path="writingsamplethree" element={<WritingSampleThree />} />
          <Route path="photography" element={<Photography />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
