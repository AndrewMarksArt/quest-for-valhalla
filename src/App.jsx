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
        '../img/gallery/skeleton-gallery-card.png',
        '../img/gallery/dragon-gallery-card.png',
        '../img/gallery/goblin-gallery-card.png',
        '../img/gallery/manticore-gallery-card.png',
        '../img/gallery/faerie-gallery-card.png',
        '../img/gallery/kobold-gallery-card.png',
    ];

    const descriptions = [
        'here are the ghost quests.',
        'here are the elemental quests.',
        'here are the tiger quests.',
        'here are the ghost quests.',
        'here are the elemental quests.here are the elemental quests.here are the elemental quests.here are the elemental quests.here are the elemental quests.here are the elemental quests.here are the elemental quests.here are the elemental quests.here are the elemental quests.here are the elemental quests.here are the elemental quests.here are the elemental quests.here are the elemental quests.here are the elemental quests.here are the elemental quests.here are the elemental quests.here are the elemental quests.here are the elemental quests.here are the elemental quests.here are the elemental quests.here are the elemental quests.here are the elemental quests.here are the elemental quests.here are the elemental quests.here are the elemental quests.here are the elemental quests.here are the elemental quests.here are the elemental quests.here are the elemental quests.here are the elemental quests.',
        'here are the tiger quests.',
        'here are the ghost quests.',
        'here are the elemental quests.',
        'here are the tiger quests.',
    ];

    const titles = [
        'Ghosts & Spirits',
        'Elementals',
        'Tigers',
        'Ghosts & Spirits',
        'Elementals',
        'Tigers',
        'Ghosts & Spirits',
        'Elementals',
        'Tigers',
    ];

    return (
        <>
            <Navbar />
            <Hero />
            <InfoSection />
            <Gallery images={images} titles={titles} descriptions={descriptions}/>
        </>
    );
}