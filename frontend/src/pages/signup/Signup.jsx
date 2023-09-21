import "./signup.css";

export default function Signup() {
  return (
    <div class="wrapper">
      <header class="header">
        <a href="#" class="logo">
          <ion-icon name="rocket-sharp"></ion-icon>
          CodeVerse
        </a>
        <div class="nav-button">
          <a href="#" class="about-contact">
            About
          </a>
          <a href="#" class="about-contact">
            Contact Us
          </a>
          <button class="btn" id="signupBtn">
            Log In
          </button>
        </div>
      </header>
      <section class="home">
            <div class="content">
                <h2>A Coder's Universe</h2>
                <p> Welcome to the zone where coding prowess meets challenges head-on! </p>
                    
                <h3>Are you up for the challenge?</h3>
            </div>
        <div class="form-box">
                <div class="wrapper-login" id="login">
                    <h2>Sign Up</h2>
                    <form action="#">
                        <div class="input-box">
                            <span class="icon"><ion-icon name="person-sharp"></ion-icon></span> 
                            <input required/>
                            <label>User Name</label>
                        </div>
                        <div class="input-box">
                            <span class="icon"><ion-icon 
                                name="mail"></ion-icon></span> 
                            <input type="email" required/>
                            <label>Email ID</label>
                        </div>
                        <div class="input-box">
                            <span class="icon"><ion-icon 
                                name="lock-closed"></ion-icon></span> 
                            <input type="password" required/>
                            <label>Password</label>
                        </div>
                        <button type="submit" class="btn">Sign Up</button>
                        <div class="register-link">
                            <p>Already a user? <a href="#">Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
      </section>
    </div>
  );
}
