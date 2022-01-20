import { Link } from "react-router-dom";
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleInput = (e) => {
    setFormData(startingValues=> ({
      ...startingValues,
      [e.target.name]: e.target.value    
    }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data",formData)
  }

  return (
    <div>
      <Link to="/">Home</Link>
      <h2>Contact</h2>
      <form>
        <label>
          Name:
          <input name="name" type="text" value={formData.name} onChange={ handleInput }/>
        </label>
        <label>
          Email:
          <input name="email" type="email" value={formData.email} onChange={ handleInput }/>
        </label>
        <button type="submit" onClick={handleSubmit}>Send</button>
      </form>
    </div>
  )
}

export default Contact;
