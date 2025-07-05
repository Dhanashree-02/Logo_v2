import styles from "./Services.module.css";
import { FaTshirt, FaUserTie, FaSuitcase, FaWallet, FaPrint, FaGift, FaTruck, FaStar, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import printingImg from "../../assets/banner-1.jpg";
import apparelImg from "../../assets/banner-2.jpg";
import uniformImg from "../../assets/banner-3.jpg";
import travelImg from "../../assets/Welcome.webp";
import leatherImg from "../../assets/About.jpg";

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        
        <h2>Our Services</h2>
        <p className={styles.subheading}>
          We provide a wide range of high-quality printing, apparel, travel accessories, and corporate merchandise to meet all your business and personal needs.
        </p>

        {/* Image + Icon Based Service Cards */}
        <div className={styles.servicesGrid}>

          <div className={styles.serviceCard}>
            <img src={printingImg} alt="Printing" />
            <div className={styles.cardContent}>
              <FaPrint className={styles.icon} />
              <h4>Printing Solutions</h4>
              <p>Customized printing on T-shirts, uniforms, bags, and more with premium quality.</p>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <img src={apparelImg} alt="Apparel" />
            <div className={styles.cardContent}>
              <FaTshirt className={styles.icon} />
              <h4>Apparel Customization</h4>
              <p>T-shirts, jackets, caps, and sweatshirts with your design for brand promotion.</p>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <img src={uniformImg} alt="Uniforms" />
            <div className={styles.cardContent}>
              <FaUserTie className={styles.icon} />
              <h4>Uniforms</h4>
              <p>Corporate, school, security, and hospitality uniforms tailored to perfection.</p>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <img src={travelImg} alt="Travel" />
            <div className={styles.cardContent}>
              <FaSuitcase className={styles.icon} />
              <h4>Travel Accessories</h4>
              <p>Custom travel bags, backpacks, laptop sleeves, and pouches for your workforce.</p>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <img src={leatherImg} alt="Leather" />
            <div className={styles.cardContent}>
              <FaWallet className={styles.icon} />
              <h4>Leather Products</h4>
              <p>Office bags, wallets, organizers, and passport holders crafted from quality leather.</p>
            </div>
          </div>
        </div>

        {/* Pure Icon-Based Quick Service Cards */}
        <div className={styles.quickServices}>
          <h3>Other Core Services</h3>
          <div className={styles.quickGrid}>

            <div className={styles.quickCard}>
              <FaTshirt className={styles.icon} />
              <h4>Custom T-Shirts</h4>
              <p>Premium quality T-shirts with personalized prints for events, teams, or branding.</p>
            </div>

            <div className={styles.quickCard}>
              <FaShoppingBag className={styles.icon} />
              <h4>Apparels</h4>
              <p>Customized clothing including caps, jackets, sweatshirts, and more.</p>
            </div>

            <div className={styles.quickCard}>
              <FaSuitcase className={styles.icon} />
              <h4>Travel Accessories</h4>
              <p>Stylish, durable bags and travel essentials for your journeys.</p>
            </div>

            <div className={styles.quickCard}>
              <FaWallet className={styles.icon} />
              <h4>Leather Products</h4>
              <p>Premium wallets, organizers, and leather accessories.</p>
            </div>

            <div className={styles.quickCard}>
              <FaUserTie className={styles.icon} />
              <h4>Uniforms</h4>
              <p>Corporate, school, hospitality, and industrial uniforms with branding options.</p>
            </div>
          </div>
        </div>

        {/* Additional Offerings */}
        <div className={styles.additionalSection}>
          <h3>Additional Offerings</h3>
          <div className={styles.additionalGrid}>
            <div className={styles.additionalItem}><FaGift className={styles.icon} /> Corporate Gifting</div>
            <div className={styles.additionalItem}><FaTruck className={styles.icon} /> Doorstep Delivery</div>
            <div className={styles.additionalItem}><FaStar className={styles.icon} /> Quality Guarantee</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className={styles.ctaContainer}>
          <Link to="/contact" className={styles.ctaButton}>Get a Free Quote</Link>
        </div>

      </div>
    </section>
  );
};

export default Services;
