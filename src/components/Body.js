import React from "react";
import '../css/Body.css';
import leaf from './leaf.png';
import armchair from './armchair.png';
import exercise from './exercise.png';
import vacations from './vacations.png';
import backgroundImage from './tlo1.png'; // Adjust this path

const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', // Change this line
    height: '800px',
    width: '100%',
    position: 'relative', // Add this line
  };

const Body = () => (
    <div>
  <div id="Center2">
    <div className="left-side">
      <h1>Wynajem domków letniskowych na Podlasiu </h1>
      <p>Marzysz o ucieczce z miasta, o ciszy i spokoju? Pragniesz spędzić czas z rodziną lub przyjaciółmi w otoczeniu malowniczych krajobrazów?
Nie musisz wyjeżdżać do tropikalnej dżungli, by poczuć dzikość przyrody - wynajmij domek letniskowy na Podlasiu! Tu możesz odpocząć i odetchnąć świeżym powietrzem z dala od wielkomiejskiego zgiełku. Wyskocz na weekend lub dłużej i naładuj się pozytywną energią prosto z natury.
</p>
    </div>
    <div className="right-side">
      <div className="icon-row">
        <div className="icon-column">
          <img src={leaf} alt="Icon 1" />
          <p>Bliskość Natury</p>
          <img src={armchair} alt="Icon 2" />
          <p>Regionalny Wystrój</p>
        </div>
        <div className="icon-column">
          <img src={vacations} alt="Icon 4" />
          <p>Wakacje</p>
          <img src={exercise} alt="Icon 5"/>
          <p>Aktywność Fizyczna</p>
        </div>
      </div>
    </div>
  </div>
  </div>
);

export default Body;