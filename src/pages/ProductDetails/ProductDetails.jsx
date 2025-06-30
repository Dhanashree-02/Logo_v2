import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import styles from "./ProductDetails.module.css";

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className={styles.productDetails}>
      <div className={styles.mainContainer}>
        
        {/* Normal Image */}
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

        {/* Zoomed Preview - show only on hover */}
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

      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
