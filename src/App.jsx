import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import InfoSection from "./components/InfoSection";
import Gallery from "./components/Gallery";
import Divider from "./components/Divider";
import CollectUpgrade from "./components/CollectUpgrade";

export default function App() {
    
    return (
        <>
            <Navbar />
            <Hero />
            <InfoSection />
            <Divider />
            <CollectUpgrade />
            <Divider />
            <Gallery />
            <Divider />
        </>
    );
}