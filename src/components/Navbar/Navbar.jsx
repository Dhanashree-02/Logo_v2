import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Shree_Graphics_Design.png";
import styles from "./Navbar.module.css";
import { FaChevronDown, FaShoppingCart, FaHome, FaInfoCircle, FaServicestack, FaUserFriends, FaEnvelope } from "react-icons/fa";
import { FaTshirt, FaShoppingBag, FaSuitcase, FaWallet, FaUserTie } from "react-icons/fa";


const Navbar = () => {
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

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>

        {/* Logo */}
        <div className={styles.logo}>
          <Link to="/" onClick={handleLinkClick}>
            <img src={logo} alt="Shree Graphics Design" className={styles.logoImage} />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>

        {/* Menu List */}
        <ul className={`${styles.menuList} ${isMenuOpen ? styles.active : ""}`}>

        <li className={styles.menuItem}>
  <Link to="/" onClick={handleLinkClick}><FaHome /> Home </Link>
</li>

<li className={styles.menuItem}>
  <Link to="/about" onClick={handleLinkClick}><FaInfoCircle /> About</Link>
</li>

<li className={styles.menuItem}>
  <Link to="/services" onClick={handleLinkClick}><FaServicestack /> Services</Link>
</li>

<li className={styles.menuItem}>
  <Link to="/clients" onClick={handleLinkClick}><FaUserFriends /> Clients</Link>
</li>

<li className={styles.menuItem}>
  <Link to="/contact" onClick={handleLinkClick}><FaEnvelope /> Contact</Link>
</li>

<li className={styles.menuItem}>
  <Link to="/cart" onClick={handleLinkClick}><FaShoppingCart /> Cart</Link>
</li>

        {/* Tshirt Dropdown */}
<li className={`${styles.menuItem} ${activeMenu === "tshirt" ? styles.showDropdown : ""}`}>
  <span onClick={() => handleDropdownToggle("tshirt")}>
    <FaTshirt /> Tshirt <FaChevronDown className={styles.dropdownIcon} />
  </span>
  {activeMenu === "tshirt" && (
    <ul className={styles.dropdown}>
      <li><Link to="/round_neck" onClick={handleLinkClick}>Round Neck</Link></li>
      <li><Link to="/v_neck" onClick={handleLinkClick}>V-Neck</Link></li>
      <li><Link to="/pool_tshirt" onClick={handleLinkClick}>Pool T-Shirt</Link></li>
      <li><Link to="/cutSew" onClick={handleLinkClick}>Cut and Sew T-Shirt</Link></li>
      <li><Link to="/basicpool" onClick={handleLinkClick}>Basic Pool T-Shirt</Link></li>
    </ul>
  )}
</li>

{/* Apparels Dropdown */}
<li className={`${styles.menuItem} ${activeMenu === "apparels" ? styles.showDropdown : ""}`}>
  <span onClick={() => handleDropdownToggle("apparels")}>
    <FaShoppingBag /> Apparels <FaChevronDown className={styles.dropdownIcon} />
  </span>
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

{/* Travel Dropdown */}
<li className={`${styles.menuItem} ${activeMenu === "travel" ? styles.showDropdown : ""}`}>
  <span onClick={() => handleDropdownToggle("travel")}>
    <FaSuitcase /> Travel <FaChevronDown className={styles.dropdownIcon} />
  </span>
  {activeMenu === "travel" && (
    <ul className={styles.dropdown}>
      <li><Link to="/handbag" onClick={handleLinkClick}>Hand Bag</Link></li>
      <li><Link to="/strolleybag" onClick={handleLinkClick}>Strolley Bags</Link></li>
      <li><Link to="/travelbag" onClick={handleLinkClick}>Travel Bags</Link></li>
      <li><Link to="/backpacks" onClick={handleLinkClick}>Back Packs</Link></li>
      <li><Link to="/laptopbag" onClick={handleLinkClick}>Laptop Bags</Link></li>
      <li><Link to="/trekkingbag" onClick={handleLinkClick}>Trekking Bag</Link></li>
      <li><Link to="/passport" onClick={handleLinkClick}>Passport Holder</Link></li>
      <li><Link to="/ipad" onClick={handleLinkClick}>I Pad Pouch</Link></li>
      <li><Link to="/laptophandbag" onClick={handleLinkClick}>Laptop Hand Bag</Link></li>
      <li><Link to="/laptopPouch" onClick={handleLinkClick}>Laptop Pouch</Link></li>
    </ul>
  )}
</li>

{/* Leather Dropdown */}
<li className={`${styles.menuItem} ${activeMenu === "leather" ? styles.showDropdown : ""}`}>
  <span onClick={() => handleDropdownToggle("leather")}>
    <FaWallet /> Leather <FaChevronDown className={styles.dropdownIcon} />
  </span>
  {activeMenu === "leather" && (
    <ul className={styles.dropdown}>
      <li><Link to="/leatherofficebag" onClick={handleLinkClick}>Leather Office Bags</Link></li>
      <li><Link to="/leatherpassport" onClick={handleLinkClick}>Leather Passport Holder</Link></li>
      <li><Link to="/leatherwallets" onClick={handleLinkClick}>Leather Wallets</Link></li>
      <li><Link to="/leatherorganizer" onClick={handleLinkClick}>Leather Organizers</Link></li>
    </ul>
  )}
</li>

{/* Uniforms Dropdown */}
<li className={`${styles.menuItem} ${activeMenu === "uniforms" ? styles.showDropdown : ""}`}>
  <span onClick={() => handleDropdownToggle("uniforms")}>
    <FaUserTie /> Uniforms <FaChevronDown className={styles.dropdownIcon} />
  </span>
  {activeMenu === "uniforms" && (
    <ul className={styles.dropdown}>
      <li><Link to="/school" onClick={handleLinkClick}>School Uniforms</Link></li>
      <li><Link to="/corporate" onClick={handleLinkClick}>Corporate Uniforms</Link></li>
      <li><Link to="/security" onClick={handleLinkClick}>Security Uniforms</Link></li>
      <li><Link to="/hotel" onClick={handleLinkClick}>Hotel & Restaurant Uniforms</Link></li>
      <li><Link to="/medical" onClick={handleLinkClick}>Medical & Hospital Uniforms</Link></li>
      <li><Link to="/bank" onClick={handleLinkClick}>Bank Uniforms</Link></li>
      <li><Link to="/housekeeping" onClick={handleLinkClick}>House Keeping Staff Uniforms</Link></li>
      <li><Link to="/delivery" onClick={handleLinkClick}>Delivery Staff Uniforms</Link></li>
      <li><Link to="/sports" onClick={handleLinkClick}>Sports Uniforms</Link></li>
    </ul>
  )}
</li>

       


        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
  