import React from "react";
import { useCart } from "../../context/CartContext";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className={styles.cartContainer}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <table className={styles.cartTable}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.image} alt={item.name} className={styles.cartImage} />
                </td>
                <td>{item.name}</td>
                <td>{item.brand}</td>
                <td>₹{item.price}</td>
                <td>
                  <div className={styles.qtyControls}>
                    <button onClick={() => decreaseQty(item.id)} disabled={item.qty <= 1}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                </td>
                <td>₹{(item.price || 0) * (item.qty || 1)}</td>
                <td>
                  <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {cart.length > 0 && <h3 className={styles.total}>Total: ₹{total}</h3>}
    </div>
  );
};

export default Cart;
