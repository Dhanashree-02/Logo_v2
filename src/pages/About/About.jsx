import styles from "./About.module.css";
import aboutImage from "../../assets/About.jpg";
import { FaStar, FaClock, FaRupeeSign, FaLightbulb, FaUserTie, FaShippingFast, FaThumbsUp } from "react-icons/fa";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

const About = () => {
  return (
    <div className={styles.aboutPage}>

      {/* Image & Text Side by Side Section */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>

          {/* Image Section */}
          <div className={styles.imageContainer}>
            <img src={aboutImage} alt="About Shree Graphics Design" />
          </div>

          {/* Content Section */}
          <div className={styles.contentContainer}>
            <h2>About Shree Graphics Design</h2>
            <p>
              We are your one-stop destination for premium custom printing, corporate gifting, uniforms, and branding solutions. With years of experience and a passion for creativity, we deliver products that perfectly represent your brand.
            </p>
            <p>
              Whether you need customized T-shirts, uniforms, travel accessories, leather goods, or innovative branding products, we’ve got you covered with quality and on-time delivery.
            </p>
            <button className={styles.ctaButton}>Explore Our Products</button>
          </div>

        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className={styles.missionSection}>
        <h2>Our Mission</h2>
        <p>To empower brands and individuals with high-quality, innovative, and affordable branding and printing solutions.</p>

        <h2>Our Vision</h2>
        <p>To be recognized as a leading name in custom printing and branding, known for our creativity, reliability, and quality.</p>

        <h2>Our Values</h2>
        <ul>
          <li>Customer Satisfaction First</li>
          <li>Innovation & Creativity</li>
          <li>Commitment to Quality</li>
          <li>Integrity & Transparency</li>
        </ul>
      </section>

      {/* Why Choose Us */}
    <WhyChooseUs/>

      {/* Our Process */}
      <section className={styles.processSection}>
        <h2>Our Process</h2>
        <div className={styles.processSteps}>
          <div className={styles.step}>
            <FaUserTie className={styles.icon} />
            <h4>Understanding Your Needs</h4>
          </div>
          <div className={styles.step}>
            <FaLightbulb className={styles.icon} />
            <h4>Design & Development</h4>
          </div>
          <div className={styles.step}>
            <FaThumbsUp className={styles.icon} />
            <h4>Quality Check</h4>
          </div>
          <div className={styles.step}>
            <FaShippingFast className={styles.icon} />
            <h4>Delivery & Support</h4>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
