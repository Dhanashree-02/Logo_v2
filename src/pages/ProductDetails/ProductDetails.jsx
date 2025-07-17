import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../../data/products";
import styles from "./ProductDetails.module.css";
import { FaArrowLeft, FaCartPlus, FaStar } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(product?.image || "");
  const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  if (!product) {
    return <h2 className={styles.notFound}>Product not found</h2>;
  }

  return (
    <div className={styles.productDetails}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        <FaArrowLeft /> Go Back
      </button>

      <div className={styles.container}>
        {/* Image Section */}
        <div className={styles.imageSection}>
          <div
            className={styles.imageWrapper}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              setIsHovering(false);
              setBackgroundPosition("0% 0%");
            }}
          >
            <img src={selectedImage} alt={product.name} />
            {isHovering && (
              <div
                className={styles.zoomPreview}
                style={{
                  backgroundImage: `url(${selectedImage})`,
                  backgroundPosition: backgroundPosition,
                }}
              />
            )}
          </div>

          {/* Thumbnail Images */}
          <div className={styles.thumbnails}>
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumbnail-${i}`}
                onClick={() => setSelectedImage(img)}
                className={selectedImage === img ? styles.activeThumb : ""}
              />
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className={styles.info}>
          <p className={styles.category}>Category: {product.category}</p>
          <h2 className={styles.name}>{product.name}</h2>
          <p className={styles.brand}>Brand: {product.brand}</p>
          <p className={styles.price}>Price: ₹{product.price}</p>
          <p className={styles.rating}>
            <FaStar color="#f5c518" /> {product.rating} ({product.reviews} reviews)
          </p>
          <p className={styles.description}>{product.description}</p>

          <div className={styles.options}>
            <div>
              <strong>Available Colors:</strong>
              <ul className={styles.list}>
                {product.colors.map((color, i) => (
                  <li key={i}>{color}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Available Sizes:</strong>
              <ul className={styles.list}>
                {product.sizes.map((size, i) => (
                  <li key={i}>{size}</li>
                ))}
              </ul>
            </div>
          </div>

          <button className={styles.cartBtn} onClick={() => addToCart(product)}>
            <FaCartPlus /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
