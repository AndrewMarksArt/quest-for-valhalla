import "../css/info.css"
import { useState } from "react";

export default function InfoSection() {
    const tweet = 'I just signed up for early access! ⚔️🛡️\n\nCome check out this upcoming P2E tactics game 🎮, join the discord and follow @BattleVikingNFT for a chance to win a legendary Golden Quest!🏆\n\nhttps://discord.gg/battle-warriors\n\nhttps://twitter.com/andrewmarksart/status/1636919962827649026/photo/1';
    const hashtags = 'BeTheWarrior,GoldenQuest';

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
            <div className="info-section">
                <h1 className="headline">
                    Help us spread the word!
                </h1>
                <h2 className="subhead">
                    Share your Early Access with your friends on Twitter for a chance to win a Legendary Golden Quest!
                </h2>
                <img src="../img/small_golden_quest.png" className="info-golden-quest"/>

                <a className="twitter-share-button"
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}&hashtags=${hashtags}`} 
                    target="_blank"> Tweet and Win!
                </a>
            </div>
        </div>
        </>
    );
}
