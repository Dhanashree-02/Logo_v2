import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./MainNavbar.module.css";
import { FaChevronDown, FaTshirt, FaShoppingBag, FaSuitcase, FaWallet, FaUserTie } from "react-icons/fa";

const ProductNavbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveMenu(null);
  };

  const handleDropdownToggle = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setActiveMenu(null);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        setActiveMenu(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>

        <ul className={`${styles.menuList} ${isMenuOpen ? styles.active : ""}`}>
          {/** Tshirt Dropdown */}
          <li className={`${styles.menuItem} ${activeMenu === "tshirt" ? styles.showDropdown : ""}`}>
            <span onClick={() => handleDropdownToggle("tshirt")}> <FaTshirt /> Tshirts <FaChevronDown className={styles.dropdownIcon} /></span>
            {activeMenu === "tshirt" && (
              <ul className={styles.dropdown}>
                <li><Link to="/round_neck" onClick={handleLinkClick}>Round Neck</Link></li>
                <li><Link to="/v_neck" onClick={handleLinkClick}>V-Neck</Link></li>
                <li><Link to="/pool_tshirt" onClick={handleLinkClick}>Pool T-Shirt</Link></li>
                <li><Link to="/cutSew" onClick={handleLinkClick}>Cut and Sew</Link></li>
                <li><Link to="/basicpool" onClick={handleLinkClick}>Basic Pool</Link></li>
              </ul>
            )}
          </li>

          {/** Apparels */}
          <li className={`${styles.menuItem} ${activeMenu === "apparels" ? styles.showDropdown : ""}`}>
            <span onClick={() => handleDropdownToggle("apparels")}> <FaShoppingBag /> Apparels <FaChevronDown className={styles.dropdownIcon} /></span>
            {activeMenu === "apparels" && (
              <ul className={styles.dropdown}>
                <li><Link to="/cap" onClick={handleLinkClick}>Cap</Link></li>
                <li><Link to="/jackets" onClick={handleLinkClick}>Jackets</Link></li>
                <li><Link to="/sweatshirt" onClick={handleLinkClick}>Sweatshirt</Link></li>
                <li><Link to="/denimShirt" onClick={handleLinkClick}>Denim Shirt</Link></li>
                <li><Link to="/windcheaters" onClick={handleLinkClick}>Windcheaters</Link></li>
              </ul>
            )}
          </li>

          {/** Travel */}
          <li className={`${styles.menuItem} ${activeMenu === "travel" ? styles.showDropdown : ""}`}>
            <span onClick={() => handleDropdownToggle("travel")}> <FaSuitcase /> Travel <FaChevronDown className={styles.dropdownIcon} /></span>
            {activeMenu === "travel" && (
              <ul className={styles.dropdown}>
                <li><Link to="/handbag" onClick={handleLinkClick}>Hand Bag</Link></li>
                <li><Link to="/strolleybag" onClick={handleLinkClick}>Strolley Bags</Link></li>
                <li><Link to="/travelbag" onClick={handleLinkClick}>Travel Bags</Link></li>
                <li><Link to="/backpacks" onClick={handleLinkClick}>Back Packs</Link></li>
                <li><Link to="/laptopbag" onClick={handleLinkClick}>Laptop Bags</Link></li>
              </ul>
            )}
          </li>

          {/** Leather */}
          <li className={`${styles.menuItem} ${activeMenu === "leather" ? styles.showDropdown : ""}`}>
            <span onClick={() => handleDropdownToggle("leather")}> <FaWallet /> Leather <FaChevronDown className={styles.dropdownIcon} /></span>
            {activeMenu === "leather" && (
              <ul className={styles.dropdown}>
                <li><Link to="/leatherofficebag" onClick={handleLinkClick}>Office Bags</Link></li>
                <li><Link to="/leatherwallets" onClick={handleLinkClick}>Wallets</Link></li>
              </ul>
            )}
          </li>

          {/** Uniforms */}
          <li className={`${styles.menuItem} ${activeMenu === "uniforms" ? styles.showDropdown : ""}`}>
            <span onClick={() => handleDropdownToggle("uniforms")}> <FaUserTie /> Uniforms <FaChevronDown className={styles.dropdownIcon} /></span>
            {activeMenu === "uniforms" && (
              <ul className={styles.dropdown}>
                <li><Link to="/school" onClick={handleLinkClick}>School Uniforms</Link></li>
                <li><Link to="/corporate" onClick={handleLinkClick}>Corporate</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ProductNavbar;