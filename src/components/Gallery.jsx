import "../css/gallery.css";
import React, { useState } from 'react';

export default function Gallery({images, titles, descriptions}) {
    const midIndex = Math.floor(images.length /2);
    const [currentImageIndex, setCurrentImageIndex] = useState(midIndex);

    const handleNext = ()=> {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const handlePrevious = ()=> {
        setCurrentImageIndex((currentImageIndex -1 +images.length) % images.length);
    };

    return (
        <>
        <div className="carousel">
            <img src="../img/quest_gallery_title.png" className="carousel-title-img" />
            <div className="carousel-images">
                {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    className={`carousel-image ${index === currentImageIndex ? 'main-image' : 'side-image'}`}
                    style={{
                    opacity: index === currentImageIndex ? 1 : 0.4,
                    zIndex: index === currentImageIndex ? 2 : 1,
                    transform: `translateX(calc(${((index - currentImageIndex) * 100)}%))`,
                    }}
                />
                ))}

                <button className="carousel-arrow left-arrow" onClick={handlePrevious}>
                    <img src="../img/left_arrow.png" className="left-img"/>
                </button>
                <button className="carousel-arrow right-arrow" onClick={handleNext}>
                    <img src="../img/right_arrow.png" className="right-img"/>
                </button>
            </div>

            <div className="carousel-dots">
                {images.map((_, index) => (
                <span key={index} className={`carousel-dot ${currentImageIndex === index ? 'active' : ''}`} />
                ))}
            </div>

            <div className="carousel-description">
                <img src={"../img/carousel-description-bg.png"} alt="description-background" className="description-background" />
                <p className="description-title">{titles[currentImageIndex]}</p>
                <p className="description-text">{descriptions[currentImageIndex]}</p>
            </div>
        </div>
        </>
    );
}