import React from "react";
import video from './vid.mp4';
import '../css/Center.css';
import DelayedComponent from "./DelayedComponent";

const Center = () => (
  
    <div id="sekcja1">

<DelayedComponent/>

    <video autoPlay loop muted className="responsive"
  style={{
    position: "relative",
    height: "1300px",
    objectFit: "cover",
    zIndex: "-1"
  }}>
  <source src={video} type="video/mp4" />
    </video>
  </div>

  );
  export default Center;