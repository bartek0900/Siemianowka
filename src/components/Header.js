import React from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import '../css/Header.css';
import logo from './logo.png';

const Header = () => (
  <div className="header"> 
  <div className="logo">
    <img src={logo}/>
    <p> Domki Siemianówka </p>
  </div>
  <div className="menu"> 
  <nav>
  <ul>
      <li><a href="#">Strona Główna</a></li>
      <li><a href="#Center2">O Nas</a></li>
      <li><a href="#Atrakcje">Atrakcje</a></li>
      <li><a href="#Domki">Domki</a></li>
      <li><a href="#Galeria">Galeria</a></li>
      <li><a href="#Cennik">Cennik</a></li>
      <li><a href="#Kontakt">Kontakt</a></li> 
    </ul>
</nav>
</div>
</div>
  );
  export default Header;