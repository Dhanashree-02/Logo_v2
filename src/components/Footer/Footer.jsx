import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHome, FaInfoCircle, FaServicestack, FaEnvelopeOpenText } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/Shree_Graphics_Design.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.footerTop}>
        
        {/* About Section */}
        <div className={styles.footerSection}>
          <img src={logo} alt="Company Logo" className={styles.logoImage} />
          <p>Your one-stop solution for custom printing, apparels, uniforms & more. We deliver quality with creativity.</p>
          
          <div className={styles.socialIcons}>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/"><FaHome /> Home</Link></li>
            <li><Link to="/about"><FaInfoCircle /> About Us</Link></li>
            <li><Link to="/services"><FaServicestack /> Services</Link></li>
            <li><Link to="/contact"><FaEnvelopeOpenText /> Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.footerSection}>
          <h4>Contact Us</h4>
          <p><FaPhone /> +91-9876543210</p>
          <p><FaEnvelope /> info@shreegraphics.com</p>
          <p><FaMapMarkerAlt /> Pune, Maharashtra, India</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Shree Graphics Design. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
