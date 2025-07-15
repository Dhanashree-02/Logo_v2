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
import { NavLink } from "react-router-dom";
import logo from "../../assets/Shree_Graphics_Design.png";
import { useCart } from "../../context/CartContext";
import styles from "./TopNavbar.module.css";

const TopNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart, wishlist } = useCart();

  const cartCount = cart.length;
  const wishlistCount = wishlist.length;

  // Close menu on route change or resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Optional: Add shadow when scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
            <img src={logo} alt="Logo" className={styles.logoImage} />
          </NavLink>
        </div>

        <div
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>

        <ul
          className={`${styles.menuList} ${
            isMenuOpen ? styles.active : ""
          }`}
        >
          {[
            { to: "/", label: "Home", icon: <FaHome /> },
            { to: "/about", label: "About", icon: <FaInfoCircle /> },
            { to: "/services", label: "Services", icon: <FaServicestack /> },
            { to: "/clients", label: "Clients", icon: <FaUserFriends /> },
            { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
            { to: "/products", label: "Products", icon: <FaBoxOpen /> },
            { to: "/login", label: "Login", icon: <FaSignInAlt /> },
            { to: "/signup", label: "Sign Up", icon: <FaUserPlus /> },
          ].map((item) => (
            <li className={styles.menuItem} key={item.to}>
              <NavLink
                exact="true"
                to={item.to}
                className={({ isActive }) =>
                  `${styles.menuLink} ${isActive ? styles.activeLink : ""}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}

          <li className={styles.menuItem}>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `${styles.menuLink} ${isActive ? styles.activeLink : ""}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <FaShoppingCart />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className={styles.cartBadge}>{cartCount}</span>
              )}
            </NavLink>
          </li>

          <li className={styles.menuItem}>
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                `${styles.menuLink} ${isActive ? styles.activeLink : ""}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <FaHeart />
              <span>Wishlist</span>
              {wishlistCount > 0 && (
                <span className={styles.wishlistBadge}>
                  {wishlistCount}
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavbar;
