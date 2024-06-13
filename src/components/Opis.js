import React from "react";
import '../css/Opis.css';
import logo from './logo.png';
const Opis = () => (
  <div className="OpisBody" > 
  <div className="OpisBodyGlowna">

    <div className="OpisBodyTytul">
    <strong class="STRONG-0">
  Siemianówka
</strong>
    </div>
    <div className="OpisBodyLogo">
    <img src={logo} alt="Logo" className="IMG1" />
    </div>
    <div className="OpisBodyTekst">
    <span>
    Zapraszamy do skorzystania z naszej oferty wynajmu domków letniskowych na
Podlasiu! Gwarantujemy niezapomniane wrażenia i wspaniały wypoczynek dla całej
rodziny.
Nie zwlekaj - zarezerwuj już dziś swój domek i ciesz się urokami Podlasia!
</span>   
 </div>
    </div>
    </div>
  );
  export default Opis;