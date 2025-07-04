import styles from "./Services.module.css";
import { FaTshirt, FaShoppingBag, FaSuitcase, FaWallet, FaUserTie } from "react-icons/fa";

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <h2>Our Services</h2>
        <p className={styles.intro}>
          We provide a wide range of high-quality printing, apparel, and corporate merchandise solutions to meet all your business and personal needs.
        </p>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <FaTshirt className={styles.icon} />
            <h3>Custom T-Shirts</h3>
            <p>Premium quality T-shirts with personalized prints, perfect for events, teams, or branding.</p>
          </div>

          <div className={styles.serviceCard}>
            <FaShoppingBag className={styles.icon} />
            <h3>Apparels</h3>
            <p>A wide range of customized clothing including caps, jackets, sweatshirts, and more.</p>
          </div>

          <div className={styles.serviceCard}>
            <FaSuitcase className={styles.icon} />
            <h3>Travel Accessories</h3>
            <p>Stylish and durable bags, backpacks, and travel essentials for your journeys.</p>
          </div>

          <div className={styles.serviceCard}>
            <FaWallet className={styles.icon} />
            <h3>Leather Products</h3>
            <p>Premium leather wallets, bags, organizers, and accessories to elevate your style.</p>
          </div>

          <div className={styles.serviceCard}>
            <FaUserTie className={styles.icon} />
            <h3>Uniforms</h3>
            <p>Corporate, school, hospitality, and industrial uniforms with custom branding options.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
