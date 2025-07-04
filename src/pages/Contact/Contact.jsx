import styles from "./Contact.module.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        
        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you! Reach out for orders, queries, or collaborations.</p>
          
          <div className={styles.infoItem}>
            <FaPhoneAlt /> <span>+91-9876543210</span>
          </div>
          
          <div className={styles.infoItem}>
            <FaEnvelope /> <span>info@shreegraphics.com</span>
          </div>
          
          <div className={styles.infoItem}>
            <FaMapMarkerAlt /> <span>Pune, Maharashtra, India</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className={styles.contactForm}>
          <h2>Send Us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>

      {/* Map Section */}
      <div className={styles.mapContainer}>
        <iframe
          title="Shree Graphics Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0981530590864!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0c5d2b0b3b5%3A0x7d6b70cfb3c08e83!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1688293542603!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
