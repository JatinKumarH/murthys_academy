import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from './CartPopover.module.css';

const CartPopover = () => {
    const { cartItems } = useCart();
    
    return (
        <div className={styles.popover}>
            {cartItems.length === 0 ? (
                <div className={styles.emptyPopover}>
                    <p>Your cart is empty.</p>
                    <Link to="/#explore" className={styles.shoppingLink}>Keep Shopping</Link>
                </div>
            ) : (
                <div className={styles.popoverContent}>
                    {cartItems.map(item => (
                        <div key={item.id} className={styles.item}>
                            <img src={item.image} alt={item.title} />
                            <div className={styles.itemDetails}>
                                <span className={styles.itemTitle}>{item.title}</span>
                                <span className={styles.itemPrice}>₹{item.price}/-</span>
                            </div>
                        </div>
                    ))}
                     
                     <Link to="/cart" className={styles.goToCartButton}>Go to Cart</Link>
                </div>
            )}
        </div>
    );
};

export default CartPopover;