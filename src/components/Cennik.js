import React from 'react';
import '../css/Cennik.css'; 

const Cennik = () => {
    const summerHouses = [
        { name: 'Przy wynajęciu na dwie noce przykładowo piątek', price: 'Koszt 400 zł za noc' },
        { name: 'Przy wynajęciu trzy, cztery noclegi', price: 'Koszt 350 zł za noc' },
        { name: 'Weekendy majowe 1-5.05.2024,  30.05-2.06.2024', price: 'Koszt 400 zł doba' },
        { name: 'W okresie wakacyjnym od 24.06.2024 do 01.09.2024', price: 'Koszt od 400 zł doba' },
    ];

    return (
        <div className="price-list" id="Cennik">
              <h1 className="gallery-title">Cennik</h1>
            <p className="cennik2">Cena w ogłoszeniu dotyczy wynajęcia jednego domku za dobę powyżej czterech dni poza sezonem letnim i długimi weekendami. </p>
            <p className="cennik2">Wynajmujemy na minimum dwie doby.</p>
            <ul>
                {summerHouses.map((house, index) => (
                    <li key={index}>
                        <strong>{house.name}</strong>: {house.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cennik;