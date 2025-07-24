import { useState } from "react";
import {
  FaCheckCircle,
  FaGift,
  FaTruck
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import styles from "./Home.module.css";

const Home = () => {
  const [setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <>
          {/* Hero Section */}

          <Hero />

    <div className={styles.container}>

      {/* Welcome Message */}
      <h1 className={styles.heading}>Welcome to Shree Graphics Design</h1>
      <p className={styles.description}>
        Your one-stop solution for Embroidery, T-Shirts, Apparels, Uniforms, Leather Products, and more!
      </p>

      {/* Product Showcase */}
    <Products />  

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
      <WhyChooseUs />

      {/* Call to Action */}
      <div className={styles.ctaSection}>
        <h3>Have a Project in Mind?</h3>
        <p>Contact us today and let's bring your vision to life with our creative solutions.</p>
        <Link to="/contact">
          <button className={styles.ctaButton}>Get in Touch</button>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Home;
