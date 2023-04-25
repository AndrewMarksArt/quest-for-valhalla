import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import InfoSection from "./components/InfoSection";
import Gallery from "./components/Gallery";

export default function App() {
    const images = [
        '../img/gallery/ghost-gallery-card.png',
        '../img/gallery/fire-element-gallery-card.png',
        '../img/gallery/tiger-cub-gallery-card.png',
    ];

    const descriptions = [
        'here are the ghost quests.',
        'here are the elemental quests.',
        'here are the tiger quests.',
    ];

    return (
        <>
            <Navbar />
            <Hero />
            <InfoSection />
            <Gallery images={images} descriptions={descriptions}/>
        </>
    );
}