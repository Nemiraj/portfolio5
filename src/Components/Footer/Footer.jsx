import React, { useState } from "react";
import './Footer.css';
import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubscribe = () => {
        if (email) {
            alert("Thank you for subscribing!");
            setEmail("");
        } else {
            alert("Please enter a valid email address.");
        }
    };

    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="Logo" className="footer-logo" />
                    <p>I am a software engineer from Karnataka, India.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="User Icon" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className="footer-subscribe" onClick={handleSubscribe}>Subscribe</button>
                    </div>
                    {message && <p className="footer-message">{message}</p>}
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left"></p>
                <div className="footer-bottom-right">
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
