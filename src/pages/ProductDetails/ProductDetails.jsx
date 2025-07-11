import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../../data/products";
import styles from "./ProductDetails.module.css";
import { FaArrowLeft, FaCartPlus } from "react-icons/fa";

function ProductDetails({ addToCart = () => {} }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  if (!product) return <h2 className={styles.notFound}>Product not found</h2>;

  return (
    <div className={styles.productDetails}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        <FaArrowLeft /> Go Back
      </button>

      <div className={styles.mainContainer}>
        <div
          className={styles.imageContainer}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => {
            setIsHovering(false);
            setBackgroundPosition("0% 0%");
          }}
        >
          <img src={product.image} alt={product.name} />
        </div>

        {isHovering && (
          <div
            className={styles.zoomPreview}
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundPosition: backgroundPosition,
            }}
          />
        )}
      </div>

      <div className={styles.info}>
        <p className={styles.category}>{product.category}</p>
        <h2 className={styles.name}>{product.name}</h2>
        <p className={styles.price}>₹{product.price}</p>
        <p className={styles.description}>{product.description}</p>

        <button
          className={styles.cartBtn}
          onClick={() => addToCart(product)}
        >
          <FaCartPlus /> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
