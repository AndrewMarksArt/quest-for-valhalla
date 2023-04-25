import "../css/gallery.css";
import React, { useState } from 'react';

export default function Gallery({images, descriptions}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = ()=> {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const handlePrevious = ()=> {
        setCurrentImageIndex((currentImageIndex -1 +images.length) % images.length);
    };

    return (
        <>
        <div className="carousel">
            <div className="carousel-images">
                <button className="carousel-arrow left-arrow" onClick={handlePrevious}>&lt;</button>
                <img src={images[currentImageIndex]} className="carousel-main-image" />
                <button className="carousel-arrow right-arrow" onClick={handleNext}>&gt;</button>
            </div>

            <div className="carousel-dots">
                {images.map((_, index) => (
                <span key={index} className={`carousel-dot ${currentImageIndex === index ? 'active' : ''}`} />
                ))}
            </div>

            <div className="carousel-description">
                <img src={"../img/carousel-description-bg.png"} alt="description-background" className="description-background" />
                <p className="description-text">{descriptions[currentImageIndex]}</p>
            </div>
        </div>
        </>
    );
}