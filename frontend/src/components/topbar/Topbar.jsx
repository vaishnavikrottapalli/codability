import "./topbar.css"

export default function Topbar() {
    return (
        <div class="top">
            <header class="header">
                <a href="#" class="logo">
                <ion-icon name="rocket-sharp"></ion-icon>
                CodeVerse
                </a>
                <div class="nav-button">
                    <a href="#" class="about-contact">
                        Problems
                    </a>
                    <a href="#" class="about-contact">
                        Contribute
                    </a>
                    <a href="#" class="about-contact">
                        About
                    </a>
                    <a href="#" class="about-contact">
                        Contact Us
                    </a>
                    <button class="btn" id="signupBtn">
                        Sign out
                    </button>
                </div>
            </header>
        </div>
    )
}