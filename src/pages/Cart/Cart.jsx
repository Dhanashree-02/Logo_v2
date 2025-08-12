import React from "react";
import { useCart } from "../../context/CartContext";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handlePayment = () => {
    const options = {
      key: "rzp_test_k2bHiqXdzgqjRI", // Razorpay Test Key
      amount: total * 100,
      currency: "INR",
      name: "Shree Graphics Designs",
      description: "Order Payment",
      handler: function (response) {
        clearCart(); // ✅ from context, clears localStorage + state
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      theme: { color: "#F37254" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className={styles.cartContainer}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <table className={styles.cartTable}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Qty</th>
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
                  <td>₹{item.price * item.qty}</td>
                  <td>
                    <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className={styles.total}>Total: ₹{total}</h3>

          <button className={styles.paymentBtn} onClick={handlePayment}>
            Proceed to Payment
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;