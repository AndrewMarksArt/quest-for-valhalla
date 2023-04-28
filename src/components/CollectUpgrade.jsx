import "../css/collect.css";

export default function CollectUpgrade() {
    return (
        <div className="collect-container">
            <img src="../img/collect_fight_upgrade.png" className="collect-title" />
            <h2 className="collect-subhead">
                Quests can be collected & upgraded into rarer high level quests which will give players much better rewards!
            </h2>
            <img src="../img/level_up_goblins.png" className="collect-level-up" />
            <img src="../img/level_up_mobile.png" className="collect-level-up-mobile" />
            <div className="collect-bullets">
                <h2 className="collect-bullet">Join us on <a href="https://www.discord.gg/battle-warriors" target={"_blank"} className="collect-link">Discord</a> to learn more about all the different Quests, how to collect, upgrade, & all about rarities.</h2>
                <h2 className="collect-bullet">Sign up for <a href="#" className="collect-link">early access</a> to exclussive updates & win prizes.</h2>
            </div>
        </div>
    );
}