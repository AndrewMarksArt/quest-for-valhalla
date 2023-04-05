import "../css/main.css"

export default function Navbar () {
    return (
        <>
        <header className="navbar">
            <div className="site-title">
                <img src="../img/logo.png" className="logo"></img>
            </div>

            <nav className="navbar-links">
                <a href="https://www.twitter.com/battlevikingnft" target="_blank" className="navbar-link">Twitter</a>
                <a href="https://discord.gg/battle-warriors" target="_blank" className="navbar-link">Discord</a>
            </nav>
        </header>
        </>
    );
}