import React from "react";
import '../css/Opis2.css';
import domek from './domek.png';
const Opis2 = () => (
  <div className="Opis2" id="Domki"> 
  <div className="upper">
    <div class="photo-description">
        <h3>O nas</h3>
        <h4>Serdecznie witamy</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
        <p>to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    </div>
    <div class="photo-img1">
        <img src={domek} alt="jd" />
        </div>
    </div>



  

    <div className="lower">
    <div class="photo-description">
        <h3>O nas</h3>
        <h4>Serdecznie witamy</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
        <p>to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    </div>
    <div className="photo">
    <img src={domek} alt="jd" />
    </div>
    </div>
    </div>
  );
  export default Opis2;