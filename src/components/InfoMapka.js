import React from "react";
import '../css/InfoMapka.css';
import logo from './logo.png';


const InfoMapka = () => (

            <div className="contact-container" id="Kontakt">
            <div className="contact-item">
                <h3>Skontaktuj się</h3>
                <p>+48 606 595 424</p>
                <p>TU BY SIE PRZYDAL MAIL</p>
            </div>
            <div className="contact-item2">
            <img src={logo}/>
            </div>
            <div className="contact-item">
                <h3>Znajdź nas</h3>
                <p>17-220 Narewka</p>
                <p>Nowa Łuka ul. Stary Dwór 2C</p>

            </div>
        </div>

/* <div className="map"> 
<iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d2940.506038463716!2d23.7764818!3d52.930166!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1spl!2spl!4v1715017094143!5m2!1spl!2spl"></iframe> 
</div> */

  );
  export default InfoMapka;