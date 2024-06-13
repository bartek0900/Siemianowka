import React, { useState } from 'react';
import '../css/Gallery.css'; // Make sure to adjust the path to your CSS file
import logo from '../components/Atrakcje/kort.jpg';
import logo2 from '../components/Atrakcje/kosz.jpg';
import logo3 from '../components/Atrakcje/wspinaczka.jpg';
import logo4 from '../components/Atrakcje/zalew.jpg';
import logo5 from '../components/Atrakcje/zalew2.jpg';

const Gallery = () => {
    const images = [
        logo, logo2, logo3, logo4, logo5,
        logo, logo2, logo3, logo4, logo5,
        logo, logo2, logo3, logo4, logo5,
        logo, logo2, logo3, logo4, logo5,
    ];
    
    const [fullscreenIndex, setFullscreenIndex] = useState(null);

    const openFullscreen = (index) => {
        setFullscreenIndex(index);
    };

    const closeFullscreen = () => {
        setFullscreenIndex(null);
    };

    const nextSlide = () => {
        if (fullscreenIndex !== null) {
            setFullscreenIndex((prevIndex) => (prevIndex + 1) % images.length);
        }
    };

    const prevSlide = () => {
        if (fullscreenIndex !== null) {
            setFullscreenIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        }
    };

    return (
        <div className="gallery" id="Galeria">
            <h1 className="gallery-title">Galeria</h1>
            <p>Każdy domek jest wyjątkowy i oferuje komfortowe udogodnienia, które sprawią, że Twój pobyt będzie niezapomniany.</p>
            <p>Zapraszamy do przeglądania naszej galerii i odkrywania uroków naszych domków letniskowych</p>
            <div className="images-container">
                {images.map((image, index) => (
                    <div key={index} className="image-container">
                        <img
                            src={image}
                            alt={`Slide ${index}`}
                            className="image"
                            onClick={() => openFullscreen(index)}
                        />
                        {fullscreenIndex === index && (
                            <div className="fullscreen">
                                <span className="close" onClick={closeFullscreen}>&times;</span>
                                <img src={image} alt={`Fullscreen ${index}`} className="fullscreen-image" />
                                <button className="prev" onClick={prevSlide}>&#10094;</button>
                                <button className="next" onClick={nextSlide}>&#10095;</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
