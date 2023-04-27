import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import InfoSection from "./components/InfoSection";
import Gallery from "./components/Gallery";

export default function App() {
    
    return (
        <>
            <Navbar />
            <Hero />
            <InfoSection />
            <Gallery />
        </>
    );
}