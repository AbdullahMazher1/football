import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaWhatsapp, FaTwitch } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
        {/* Investors Section */}
      <div className="investors-container">
        <div className="investors-logos">
          <img alt="logo" src="/investors.png" className="investors-im"/>
        </div>
      </div>
       {/* Red Separator Line */}
       <div className="footer-divider"></div>
      <div className="footer-container">
        <div className="footer-section">
          <h3>PARIS SAINT-GERMAIN</h3>
          <ul>
            <li>First team</li>
            <li>Women</li>
            <li>Handball</li>
            <li>PSG TV</li>
            <li>Club</li>
            <li>Sponsors</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>SERVICES</h3>
          <ul>
            <li>My account</li>
            <li>Tickets</li>
            <li>Shop</li>
            <li>MyParis</li>
            <li>Stadium Tour</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>LANGUAGES</h3>
          <ul>
            <li>Français</li>
            <li>English</li>
            <li>Português</li>
            <li>Español</li>
            <li>العربية</li>
            <li>Bahasa Indonesia</li>
            <li>中文</li>
            <li>日本語</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>HELP</h3>
          <ul>
            <li>Legal notice</li>
            <li>Privacy policy</li>
            <li>Terms and conditions</li>
            <li>Cookies preferences</li>
            <li>Help center</li>
          </ul>
        </div>

        <div className="footer-section join-us">
          <h3>JOIN US</h3>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaTiktok />
            <FaWhatsapp />
            <FaTwitch />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Paris Saint-Germain</p>
      </div>
    </footer>
  );
}

export default Footer;
