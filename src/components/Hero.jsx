import "../css/main.css"
import { useState } from "react";

export default function Hero() {
    const [email, setEmail] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [sending, setSending] = useState(false);
    const [joinClicked, setJoinClicked] = useState(false);

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
            setJoinClicked(true);
            setSending(true);
            const response = await fetch(
                apiKey, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify([[email, new Date().toLocaleString()]])
                }
            );

            if (response.ok) {
                setShowModal(true);
                setSending(false);
                setEmail("");
                setJoinClicked(false);
            } else {
                setSending(false);
                setShowErrorModal(true);
            }
            
        } catch (err) {
            console.error("Error saving email:", err);
            setSending(false);
            setShowErrorModal(true);
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
            <img src="../img/title_alt.png" className="title"></img>
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
                            placeholder="Enter email or Join Discord" 
                            className="input-text"
                        />
                        <button type="submit" className={`${joinClicked ? "join-clicked" : "button-primary"}`}>
                            {joinClicked ? "Thanks, Please Wait" : "Get Early Access!"}
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
            <div className="bottom-container">
                <h2 className="explore-text">Explore Below Before Embarking on Your Adventure!</h2>
                <img src="../img/arrow_down.png" className="arrow-down"></img>
            </div>
        </div>

        {showModal && (
            <div className="modal">
                <div className="modal-content">
                    <h3 className="modal-title">Thank You!</h3>
                    <p className="modal-msg">
                        We'll send an email to confirm your early access soon! Come 
                        Join our Discord for a chance to win a Legendary 'Golden Quest'!
                    </p>
                    <div>
                        <img className="modal-image" src="../img/goldenQuest.png" />
                    </div>
                    <button className="button-secondary" onClick={joinDiscord}>
                        Join Discord
                    </button>
                    <div>
                        <button className="modal-close" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        )}

        {showErrorModal && (
            <div className="modal">
                <div className="modal-content">
                <h3 className="modal-title">Sorry, something went wrong.</h3>
                <p className="modal-msg">Join us in Discord and we can help get your early access confirmed!</p>
                <button className="button-secondary" onClick={joinDiscord}>
                        Join Discord
                    </button>
                    <div>
                        <button className="modal-close" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
            )}

        </>
    );
}
