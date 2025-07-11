import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaShoppingCart,
  FaSignInAlt,
  FaUserFriends,
  FaUserPlus,
  FaBoxOpen,
  FaHeart,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Shree_Graphics_Design.png";
import { useCart } from "../../context/CartContext"; // ✅ Make sure this exists
import styles from "./TopNavbar.module.css";

const TopNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { cart,wishlist  } = useCart(); // ✅ Get cart count from context

  const cartCount = cart.length;
  const wishlistCount = wishlist.length;

  // Auto-close menu and scroll to top on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="Logo" className={styles.logoImage} />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${styles.menuList} ${isMenuOpen ? styles.active : ""}`}
        >
          <li className={styles.menuItem}>
            <Link to="/">
              <FaHome /> <span>Home</span>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/about">
              <FaInfoCircle /> <span>About</span>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/services">
              <FaServicestack /> <span>Services</span>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/clients">
              <FaUserFriends /> <span>Clients</span>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/contact">
              <FaEnvelope /> <span>Contact</span>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/products">
              <FaBoxOpen /> <span>Products</span>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/login">
              <FaSignInAlt /> <span>Login</span>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/signup">
              <FaUserPlus /> <span>Sign Up</span>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/cart" className={styles.cartLink}>
              <FaShoppingCart />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className={styles.cartBadge}>{cartCount}</span>
              )}
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/wishlist" className={styles.wishlistLink}>
              <FaHeart /> <span>Wishlist</span>
              {wishlistCount > 0 && (
                <span className={styles.wishlistBadge}>{wishlistCount}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavbar;
