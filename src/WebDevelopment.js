import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

function WebDevelopment() {
  return (
    <div>
      <Link to="/">Home</Link>
      <h2>My Web Development Work</h2>
      <Carousel></Carousel>
    </div>
  )
}

export default WebDevelopment;
