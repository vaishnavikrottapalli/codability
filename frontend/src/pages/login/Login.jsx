import "./login.css";

export default function Login() {
  return (
    <div class="wrapper">
      <header class="header">
        <a href="#" class="logo">
          <ion-icon name="rocket-sharp"></ion-icon>
          CodeVerse
        </a>
        <div class="nav-button">
          <a href="#" class="about-prob">
            About Us
          </a>
          <a href="#" class="about-prob">
            Problems
          </a>
          <button class="btn" id="signupBtn">
            Sign Up
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
                    <h2>Login</h2>
                    <form action="#">
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
                        <button type="submit" class="btn">Login</button>
                        <div class="register-link">
                            <p>New user? <a href="/Signup.jsx" onclick="register()">Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
      </section>
    </div>
  );
}
