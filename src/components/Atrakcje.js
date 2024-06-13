import React from 'react';
import '../css/Atrakcje.css';
import logo from './logo.png';
import logo2 from './leaf.png';
import logo3 from './domek.png';
import logo4 from './armchair.png';
import Carousel from './Carousel';



const Atrakcje = () => {
   
    const attractions = [
        { name: "Aktywny Wypoczynek", description: "Wypoczynek: kort tenisowy, boisko do siatkówki, koszykówki i piłkiręcznej, ścianka wspinaczkowa – dla miłośników sportu jest tu wiele możliwości!" },
        { name: "Relaks nad wodą", description: "W pobliżu znajduje się Zalew Siemianówka - plaża oddalonajest o zaledwie 400 metrów, wypożyczalnia łódek, skuterów wodnych i rowerków wodnych – poczuj magię wodnych sportów!" },
        { name: "Spływy Kajakowe", description: "Wybierz się na niezapomniany spływ kajakowy pomalowniczych rzekach Podlasia." },
        { name: "Baza zaopatrzenia", description: "Skoro o bliskości natury mowa, to możesz skoczyć jakżabka, czy raczej – do Żabki. W sezonie letnim kupisz w niej najpotrzebniejszerzeczy." },
    ];

    return (
        <div className="tourist-attractions" id="Atrakcje">
            <div className="attractions-text">
                <h2>Atrakcje w pobliżu Siemianówki</h2>
                <p>Już wiesz, co czeka na Ciebie na miejscu w domku. A jakie atrakcje znajdują się w
pobliżu domków letniskowych? Bez względu na to, czy preferujesz spokój i ciszę, czy
jesteś miłośnikiem aktywnego wypoczynku, znajdziesz coś dla siebie.</p>
<p> Co czeka na Ciebie w okolicy: </p>
                <ul>
                    {attractions.map((attraction, index) => (
                        <li key={index}>
                            <strong>{attraction.name}:</strong> {attraction.description}
                        </li>
                    ))}
                </ul>
            </div>
            <Carousel />
        </div>
    );
};

export default Atrakcje;