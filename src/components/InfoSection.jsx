import "../css/info.css"
import { useState } from "react";

export default function InfoSection() {
    return (
        <>
            <div className="info-section">
                <img src="../img/title_alt.png" className="info-logo" />
                <h2 className="subhead">Mint, Steal, and Fight your way to Glory and Honor!</h2>
                <img src="../img/quest_info.png" className="info-quest-cards" />
                <h1 className="headline">Mint & Reveal... or Gamble for Greater Glory!</h1>

                <div className="bullet-points">
                    <div className="column">
                        <ul>
                            <li className="info-bullet">Quests can be minted revealed or unrevealed.</li>
                            <li className="info-bullet">Leaving a Quest unrevealed for longer will increase rarity.</li>
                            <li className="info-bullet">Common Quests have smaller rewards.</li>
                        </ul>
                    </div>
                    <div className="column">
                        <ul>
                            <li className="info-bullet">Unrevealed Quests can be stolen by other players!</li>
                            <li className="info-bullet">Rarer Quests have stronger monsters & greater rewards.</li>
                            <li className="info-bullet">
                                <a href="https://discord.gg/battle-warriors" target="_blank" className="info-bullet-link">
                                    Join our Discord to learn more!
                                </a>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
        </>
    );
}
