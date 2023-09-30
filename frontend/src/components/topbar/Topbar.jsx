import "./topbar.css"

export default function Topbar() {
    return (
        <div className="top">
            <header className="header">
                <a href="#" className="logo">
                <ion-icon name="rocket-sharp"></ion-icon>
                CodeVerse
                </a>
                <div className="nav-button">
                    <a href="#" className="about-contact">
                        Problems
                    </a>
                    <a href="#" className="about-contact">
                        Contribute
                    </a>
                    <a href="#" className="about-contact">
                        About
                    </a>
                    <a href="#" className="about-contact">
                        Contact Us
                    </a>
                    <button className="btn" id="signupBtn">
                        Sign out
                    </button>
                </div>
            </header>
        </div>
    )
}