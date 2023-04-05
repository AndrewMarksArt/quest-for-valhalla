import React, { useState } from "react";
import useLockOrientation from "./useLockOrientation";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
    // Lock the screen orientation to portrait mode
    useLockOrientation('portrait');

    return (
        <>
        <Navbar />
        <Hero />
        </>
    );
}