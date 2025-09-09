import "./LandingPage.css";
import { Link } from "react-router-dom";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import Footer from "../components/Footer";

export default function LandingPage() {
    return (
        <div className="landing-container">
            {/* NAVBAR */}
            <nav className="navbar">
                <h1 className="logo">CuCo</h1>
                <Link to="/converter" className="nav-button">Try Now</Link>
            </nav>

            {/* HERO */}
            <div className="hero">
                <div className="hero-text">
                    <h2>
                        Convert your <br />
                        money fast <br />
                        and accurately
                    </h2>
                    <p>
                        Discover a faster way to handle international money with our online
                        currency converter. Access live rates
                        and make accurate conversions
                        to simplify your transactions with ease.
                    </p>
                    <Link to="/converter" className="convert-btn">
                        Convert Now
                    </Link>
                </div>

                <div className="hero-image">
                    <img src={image1} alt="Phone mockup" />
                </div>
            </div>

            {/* GREEN SEPARATOR */}
            <div className="green-separator"></div>

            {/* SECOND SECTION */}
            <div className="second-section">
                <div className="section-image">
                    <img src={image2} alt="Currency illustration" />
                </div>

                <div className="section-text">
                    <h2>
                        Your trusted <br />
                        currency partner <br />
                        worldwide
                    </h2>
                    <p>
                        Discover smarter ways to manage international money.
                        Track and convert currencies in real-time with accuracy.
                        Enjoy seamless transactions across the globe, anytime.
                    </p>
                    <Link to="/converter" className="convert-btn">
                        Convert Now
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
}
