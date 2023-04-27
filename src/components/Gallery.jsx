import "../css/gallery.css";
import React, { useState } from 'react';
import gallery_data from "../data/gallery_data";

export default function Gallery() {
    
    const midIndex = Math.floor(gallery_data.length /2);
    const [currentImageIndex, setCurrentImageIndex] = useState(midIndex);

    const handleNext = ()=> {
        setCurrentImageIndex((currentImageIndex + 1) % gallery_data.length);
    };

    const handlePrevious = ()=> {
        setCurrentImageIndex((currentImageIndex -1 +gallery_data.length) % gallery_data.length);
    };

    return (
        <>
        <div className="carousel">
            <img src="../img/quest_gallery_title.png" className="carousel-title-img" />
            <div className="carousel-images">
                {gallery_data.map((item, index) => (
                <img
                    key={item.id}
                    src={item.img}
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
                {gallery_data.map((_, index) => (
                <span key={index} className={`carousel-dot ${currentImageIndex === index ? 'active' : ''}`} />
                ))}
            </div>

            <div className="carousel-description">
                <img src={"../img/carousel-description-bg.png"} alt="description-background" className="description-background" />
                <p className="description-title">{gallery_data[currentImageIndex].title}</p>
                <p className="description-text">{gallery_data[currentImageIndex].description}</p>
            </div>
        </div>
        </>
    );
}