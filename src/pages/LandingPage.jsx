import "./LandingPage.css";
import { Link } from "react-router-dom";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function LandingPage() {

    // Scroll-triggered fade-up
    useEffect(() => {
        const elements = document.querySelectorAll(".fade-up, .img-fade");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        elements.forEach(el => observer.observe(el));

        return () => {
            elements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="landing-container">
            {/* NAVBAR */}
            <nav className="navbar fade-up delay-1">
                <h1 className="logo">CuCo</h1>
                <Link to="/converter" className="nav-button fade-up delay-2">Try Now</Link>
            </nav>

            {/* HERO */}
            <div className="hero">
                <div className="hero-text fade-up delay-2">
                    <h2>
                        Convert your <br />
                        money fast <br />
                        and accurately
                    </h2>
                    <p className="fade-up delay-3">
                        Discover a faster way to handle international money with our online
                        currency converter. Access live rates
                        and make accurate conversions
                        to simplify your transactions with ease.
                    </p>
                    <Link to="/converter" className="convert-btn fade-up delay-4">
                        Convert Now
                    </Link>
                </div>

                <div className="hero-image img-fade delay-3">
                    <img src={image1} alt="Phone mockup" />
                </div>
            </div>

            {/* GREEN SEPARATOR */}
            <div className="green-separator fade-up delay-4"></div>

            {/* SECOND SECTION */}
            <div className="second-section fade-up delay-5">
                <div className="section-image img-fade delay-5">
                    <img src={image2} alt="Currency illustration" />
                </div>

                <div className="section-text fade-up delay-6">
                    <h2>
                        Your trusted <br />
                        currency partner <br />
                        worldwide
                    </h2>
                    <p className="fade-up delay-7">
                        Discover smarter ways to manage international money.
                        Track and convert currencies in real-time with accuracy.
                        Enjoy seamless transactions across the globe, anytime.
                    </p>
                    <Link to="/converter" className="convert-btn fade-up delay-8">
                        Convert Now
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
}
