import { Link } from "react-router-dom";
import products from "../../data/products";
import Hero from "../../components/Hero/Hero";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Hero/>
      <h1 className={styles.heading}>Welcome to Shree Graphics Design</h1>
      <p className={styles.description}>
        Your one-stop solution for Embroidery, T-shirts, Apparels, and more!
      </p>

      <div className={styles.productGrid}>
        {products.map((product) => (
          <div className={styles.productCard} key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <Link to={`/product/${product.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
