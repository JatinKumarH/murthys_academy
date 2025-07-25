import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from './CartPage.module.css';
import { FaScroll, FaTrash } from 'react-icons/fa';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

  return (
    <div className={styles.cartPage}>
      <h1 className={styles.title} data-aos="fade-down">Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        // FIX: Added fade-up animation to the empty cart section
        <div className={styles.emptyCart} data-aos="fade-up" data-aos-delay="200">
          <FaScroll className={styles.emptyCartIcon} />
          <h2>Your scroll is empty</h2>
          <p>Looks like you haven't chosen any wisdom to unroll yet.</p>
          <Link to="/#explore" className={styles.shoppingButton}>Keep Exploring</Link>
        </div>
      ) : (
        <div className={styles.cartLayout}>
          {/* FIX: Added fade-right animation to the items list */}
          <div className={styles.cartItemsList} data-aos="fade-right">
            <h2 className={styles.sectionTitle}>{cartItems.length} Course(s) in Cart</h2>
            {cartItems.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.title} className={styles.itemImage} />
                <div className={styles.itemDetails}>
                  <span className={styles.itemTitle}>{item.title}</span>
                  <span className={styles.itemInstructor}>By {item.instructorName}</span>
                </div>
                <div className={styles.itemActions}>
                  <button onClick={() => removeFromCart(item.id)} className={styles.removeButton}>
                    <FaTrash />
                  </button>
                  <span className={styles.itemPrice}>₹{item.price}/-</span>
                </div>
              </div>
            ))}
          </div>

          {/* FIX: Added fade-left animation to the summary section */}
          <div className={styles.cartSummary} data-aos="fade-left" data-aos-delay="200">
            <h2 className={styles.sectionTitle}>Summary</h2>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.totalRow}`}>
              <span>Total</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <button className={styles.checkoutButton}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;