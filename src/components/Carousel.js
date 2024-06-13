import React, { useState, useEffect } from 'react';
import '../css/Carousel.css'; // Make sure to create this CSS file
import logo from '../components/Atrakcje/kort.jpg';
import logo2 from '../components/Atrakcje/kosz.jpg';
import logo3 from '../components/Atrakcje/wspinaczka.jpg';
import logo4 from '../components/Atrakcje/zalew.jpg';
import logo5 from '../components/Atrakcje/zalew2.jpg';


const Carousel = () => {
    const images = [
        logo,
        logo2,
        logo3,
        logo4,
        logo5
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 2 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="carousel">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${index}`}
                    className={index === currentImageIndex ? 'active' : 'inactive'}
                />
            ))}
        </div>
    );
};

export default Carousel;