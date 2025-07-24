import {
  FaGift,
  FaPrint,
  FaShoppingBag,
  FaStar,
  FaSuitcase,
  FaTruck,
  FaTshirt,
  FaUserTie,
  FaWallet,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import leatherImg from "../../assets/About.jpg";
import printingImg from "../../assets/banner-1.jpg";
import apparelImg from "../../assets/banner-2.jpg";
import uniformImg from "../../assets/banner-3.jpg";
import travelImg from "../../assets/Welcome.webp";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <h2>Our Services</h2>
        <p className={styles.subheading}>
          We specialize in high-quality embroidery logo designs and offer a wide range of custom printing, apparel, travel accessories, and corporate merchandise for all your business and personal branding needs.
        </p>

       {/* Image + Icon Based Service Cards */}
       <div className={styles.servicesGrid}>
  <div className={styles.serviceCard}>
    <img src={printingImg} alt="Printing" />
    <div className={styles.cardContent}>
      <FaPrint className={styles.icon} />
      <h4>Printing & Embroidery Solutions</h4>
      <p>
        Customized printing and embroidery on T-shirts, uniforms, bags, and more with premium quality and precision.
      </p>
      <Link to="/services/printing" className={styles.cardButton}>View Details</Link>
    </div>
  </div>

  <div className={styles.serviceCard}>
    <img src={apparelImg} alt="Apparel" />
    <div className={styles.cardContent}>
      <FaTshirt className={styles.icon} />
      <h4>Apparel Customization & Embroidery</h4>
      <p>
        T-shirts, jackets, caps, and sweatshirts embroidered or printed with your design for brand promotion and visibility.
      </p>
      <Link to="/services/apparel" className={styles.cardButton}>View Details</Link>
    </div>
  </div>

  <div className={styles.serviceCard}>
    <img src={uniformImg} alt="Uniforms" />
    <div className={styles.cardContent}>
      <FaUserTie className={styles.icon} />
      <h4>Uniforms with Embroidery Branding</h4>
      <p>
        Corporate, school, security, and hospitality uniforms with embroidery and customization options for a polished look.
      </p>
      <Link to="/services/uniforms" className={styles.cardButton}>View Details</Link>
    </div>
  </div>

  <div className={styles.serviceCard}>
    <img src={travelImg} alt="Travel" />
    <div className={styles.cardContent}>
      <FaSuitcase className={styles.icon} />
      <h4>Embroidered Travel Accessories</h4>
      <p>
        Custom embroidered travel bags, backpacks, laptop sleeves, and pouches — ideal for professionals and businesses.
      </p>
      <Link to="/services/travel" className={styles.cardButton}>View Details</Link>
    </div>
  </div>

  <div className={styles.serviceCard}>
    <img src={leatherImg} alt="Leather" />
    <div className={styles.cardContent}>
      <FaWallet className={styles.icon} />
      <h4>Leather Products with Embroidery</h4>
      <p>
        Branded office bags, wallets, organizers, and passport holders — customized with your logo or name in embroidery.
      </p>
      <Link to="/services/leather" className={styles.cardButton}>View Details</Link>
    </div>
  </div>
</div>



        {/* Icon-Based Quick Service Cards */}
        <div className={styles.quickServices}>
          <h3>Other Core Services</h3>
          <div className={styles.quickGrid}>
            <div className={styles.quickCard}>
              <FaTshirt className={styles.icon} />
              <h4>Custom T-Shirts</h4>
              <p>Premium quality T-shirts with custom embroidery or printed logos for branding.</p>
            </div>
            <div className={styles.quickCard}>
              <FaShoppingBag className={styles.icon} />
              <h4>Apparels</h4>
              <p>Caps, jackets, sweatshirts — all with embroidery and print customization options.</p>
            </div>
            <div className={styles.quickCard}>
              <FaSuitcase className={styles.icon} />
              <h4>Travel Accessories</h4>
              <p>Stylish, durable embroidered travel essentials for business or leisure.</p>
            </div>
            <div className={styles.quickCard}>
              <FaWallet className={styles.icon} />
              <h4>Leather Products</h4>
              <p>Embossed or embroidered premium leather wallets and accessories.</p>
            </div>
            <div className={styles.quickCard}>
              <FaUserTie className={styles.icon} />
              <h4>Uniforms</h4>
              <p>Customized uniforms for all industries with detailed embroidery branding.</p>
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
