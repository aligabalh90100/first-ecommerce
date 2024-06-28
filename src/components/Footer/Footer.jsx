import "./Footer.css";
import footerLogo from "../Assests/logo_big.png";
import instgramIcon from "../Assests/instagram_icon.png";
import pintICom from "../Assests/pintester_icon.png";
import wppIcon from "../Assests/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footerLogo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instgramIcon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintICom} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={wppIcon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
