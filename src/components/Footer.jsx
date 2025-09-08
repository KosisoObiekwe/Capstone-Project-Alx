import React from "react";
import "./Footer.css"; // reuse your existing CSS

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <h2>CuCo</h2>
                <p>
                    We provide immersive VR workspaces that enhance <br />
                    remote collaboration, boost productivity, and <br />
                    connect teams seamlessly from anywhere.
                </p>

                {/* SUBSCRIBE SECTION */}
                <div className="subscribe-section">
                    <h3>Subscribe Now!</h3>
                    <div className="subscribe-form">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="subscribe-input"
                        />
                        <button className="subscribe-btn">Subscribe</button>
                    </div>
                    <p className="subscribe-note">
                        By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                    </p>
                </div>

                <p className="powered-by">Powered by ExchangeRate-API</p>
            </div>
        </footer>
    );
}
