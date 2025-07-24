import React from 'react';
import {
    FaStar,
    FaTruck,
    FaUserFriends,
    FaWallet
} from "react-icons/fa";
import styles from "./WhyChooseUs.module.css";
  

function WhyChooseUs() {
  return (
    <div>
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
    </div>
  )
}

export default WhyChooseUs
