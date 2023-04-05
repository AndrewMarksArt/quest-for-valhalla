import "../css/main.css"
import { useState } from "react";
import submitForm from '../services/submitForm';

export default function Hero() {
    // State for email input
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("/api/save-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          });
    
          if (response.ok) {
            setMessage("Email saved successfully.");
          } else {
            throw new Error("Error saving email.");
          }
        } catch (error) {
          setMessage("Error saving email. Please try again.");
        }
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
                            placeholder="Enter your email address" 
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
        </>
    );
}
