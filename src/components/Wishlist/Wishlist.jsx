import React from "react";
import { useCart } from "../../context/CartContext";
import products from "../../data/products";
import styles from "./Wishlist.module.css";

const Wishlist = () => {
  const { wishlist, addToCart, removeFromWishlist } = useCart();

  const wishlistItems = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className={styles.wishlistContainer}>
      <h2>My Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div className={styles.grid}>
          {wishlistItems.map((item) => (
            <div className={styles.card} key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <div className={styles.buttons}>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
                <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
