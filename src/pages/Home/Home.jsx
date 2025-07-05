import { Link } from "react-router-dom";
import products from "../../data/products";
import Hero from "../../components/Hero/Hero";
import styles from "./Home.module.css";
import { FaCheckCircle, FaStar, FaTruck, FaGift, FaWallet, FaUserFriends } from "react-icons/fa";

const Home = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <Hero />

      {/* Welcome Message */}
      <h1 className={styles.heading}>Welcome to Shree Graphics Design</h1>
      <p className={styles.description}>
        Your one-stop solution for Embroidery, T-Shirts, Apparels, Uniforms, Leather Products, and more!
      </p>

      {/* Product Showcase */}
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div className={styles.productCard} key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <Link to={`/product/${product.id}`}>
              <button className={styles.button}>View Details</button>
            </Link>
          </div>
        ))}
      </div>

      {/* Featured Services */}
      <section className={styles.servicesSection}>
        <h2>Our Key Services</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceItem}>
            <FaCheckCircle className={styles.icon} />
            <h4>Custom Printing</h4>
            <p>High-quality printing on T-shirts, bags, uniforms, and more.</p>
          </div>
          <div className={styles.serviceItem}>
            <FaGift className={styles.icon} />
            <h4>Corporate Gifting</h4>
            <p>Unique promotional gifts to leave a lasting impression.</p>
          </div>
          <div className={styles.serviceItem}>
            <FaTruck className={styles.icon} />
            <h4>Fast Delivery</h4>
            <p>Reliable and quick delivery right to your doorstep.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.whySection}>
        <h2>Why Choose Us</h2>
        <p>
          We deliver premium products with competitive pricing and unmatched customer satisfaction to help your brand stand out.
        </p>

        <ul className={styles.whyList}>
          <li className={styles.whyItem}>
            <FaStar className={styles.icon} />
            <h4>Premium Quality</h4>
            <p>We never compromise on the quality of materials or printing.</p>
          </li>

          <li className={styles.whyItem}>
            <FaTruck className={styles.icon} />
            <h4>On-Time Delivery</h4>
            <p>We ensure your products are delivered promptly, every time.</p>
          </li>

          <li className={styles.whyItem}>
            <FaWallet className={styles.icon} />
            <h4>Competitive Pricing</h4>
            <p>Affordable solutions without sacrificing product excellence.</p>
          </li>

          <li className={styles.whyItem}>
            <FaUserFriends className={styles.icon} />
            <h4>Customer Focused</h4>
            <p>Your satisfaction is at the core of everything we do.</p>
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <div className={styles.ctaSection}>
        <h3>Have a Project in Mind?</h3>
        <p>Contact us today and let's bring your vision to life with our creative solutions.</p>
        <Link to="/contact">
          <button className={styles.ctaButton}>Get in Touch</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
