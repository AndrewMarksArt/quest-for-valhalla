import "../css/collect.css";

export default function CollectUpgrade() {
    return (
        <div className="collect-container">
            <img src="../img/collect_fight_upgrade.png" className="collect-title" />
            <h2 className="collect-subhead">
                Quests can be collected & upgraded into rarer high level quests which will give players much better rewards!
            </h2>
            <img src="../img/level_up_goblins.png" className="collect-level-up" />
            <div className="collect-bullets">
                <h2 className="collect-bullet">join us on Discord to learn more about all the different Quests, how to collect, upgrade, & rarities.</h2>
                <h2 className="collect-bullet">you can see our game docs here.</h2>
            </div>
        </div>
    );
}