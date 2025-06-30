import styles from "./Hero.module.css";
import bannerImage from "../../assets/Welcome.webp";

const Hero = () => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>We Print What You Want!</h1>
        <p>Custom Designs. Premium Quality. Delivered to Your Door.</p>
        <button className={styles.ctaButton}>Explore Now</button>
      </div>
    </section>
  );
};

export default Hero;
