import "../css/main.css"
import { useState } from "react";

export default function Hero() {
    // State for email input
    const [email, setEmail] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        console.log("Submitting email:", email);

        const apiKey = import.meta.env.VITE_NOCODE_API;

        try {
            const response = await fetch(
                apiKey, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify([[email, new Date().toLocaleString()]])
                }
            );
            await response.json()
            console.log("Email saved: ", email);
            setEmail(""); // Clear the text input
            
            setShowModal(true); // show the thank you for signing up modal

        } catch (err) {
            console.error("Error saving email:", err);
        };
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const joinDiscord = () => {
        window.open('https://discord.gg/battle-warriors', '_blank');
    };


    return (
        <>
        <div className="main">
            <img src="../img/title.png" className="title"></img>
            <h2 className="subhead">
                Embark on a legendary quest for glory & honor! Let the sagas sing of your triumph against the fearsome foes that threaten the realm!
            </h2>
            <div className="container">
                <img src="../img/stone_gateway.png" className="main-img"></img>
                <div className="content">
                    <form onSubmit={handleSubmit} className="content">
                        <input 
                            type="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Enter your email or Join Discord" 
                            className="input-text"
                        />
                        <button type="submit" className="button-primary">
                                Get Early Access!
                        </button>
                        <button 
                            type="button" 
                            className="button-secondary"
                            onClick={() => window.open('https://discord.gg/battle-warriors', '_blank')}
                        >
                            And Join Discord
                        </button>
                    </form>
                </div>
            </div>
        </div>

        {showModal && (
            <div className="modal">
                <div className="modal-content">
                    <h3>Thank You!</h3>
                    <p>Here's a sneak peek of what's coming:</p>
                    <button className="button-secondary" onClick={joinDiscord}>
                        Join Discord
                    </button>
                    <button className="modal-close" onClick={closeModal}>
                        Close
                    </button>
                </div>
            </div>
        )}

        </>
    );
}
