import { useEffect, useRef, useState } from "react";
import {
  FaChevronDown,
  FaShoppingBag,
  FaSuitcase,
  FaTshirt,
  FaUserTie,
  FaWallet,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import styles from "./MainNavbar.module.css";

const MainNavbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setActiveMenu(null);
  };

  const handleDropdownToggle = (key) => {
    setActiveMenu((prev) => (prev === key ? null : key));
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setActiveMenu(null);
  };

  useEffect(() => {
    const closeDropdown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", closeDropdown);
    return () => document.removeEventListener("mousedown", closeDropdown);
  }, []);

  useEffect(() => {
    // Close menu on route change
    setIsMenuOpen(false);
    setActiveMenu(null);
  }, [location.pathname]);

  const navItems = [
    {
      icon: <FaTshirt />,
      title: "Tshirts",
      key: "tshirt",
      links: [
        { name: "Round Neck", to: "/products/category/round_neck" },
        { name: "V-Neck", to: "/products/category/v_neck" },
        { name: "Pool T-Shirt", to: "/products/category/pool_tshirt" },
        { name: "Cut and Sew", to: "/products/category/cut_sew" },
        { name: "Basic Pool", to: "/products/category/basic_pool" },
      ],
    },
    {
      icon: <FaShoppingBag />,
      title: "Apparels",
      key: "apparels",
      links: [
        { name: "Cap", to: "/products/category/cap" },
        { name: "Jackets", to: "/products/category/jackets" },
        { name: "Sweatshirt", to: "/products/category/sweatshirt" },
        { name: "Denim Shirt", to: "/products/category/denimShirt" },
        { name: "Windcheaters", to: "/products/category/windcheaters" },
      ],
    },
    {
      icon: <FaSuitcase />,
      title: "Travel",
      key: "travel",
      links: [
        { name: "Hand Bag", to: "/products/category/handbag" },
        { name: "Strolley Bags", to: "/products/category/strolleybag" },
        { name: "Travel Bags", to: "/products/category/travelbag" },
        { name: "Back Packs", to: "/products/category/backpacks" },
        { name: "Laptop Bags", to: "/products/category/laptopbag" },
      ],
    },
    {
      icon: <FaWallet />,
      title: "Leather",
      key: "leather",
      links: [
        { name: "Office Bags", to: "/products/category/leatherofficebag" },
        { name: "Wallets", to: "/products/category/leatherwallets" },
      ],
    },
    {
      icon: <FaUserTie />,
      title: "Uniforms",
      key: "uniforms",
      links: [
        { name: "School Uniforms", to: "/products/category/school" },
        { name: "Corporate", to: "/products/category/corporate" },
      ],
    },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>

        <ul
          className={`${styles.menuList} ${
            isMenuOpen ? styles.active : ""
          }`}
          ref={dropdownRef}
        >
          {navItems.map((item) => (
            <li
              key={item.key}
              className={`${styles.menuItem} ${
                activeMenu === item.key ? styles.showDropdown : ""
              }`}
            >
              <span onClick={() => handleDropdownToggle(item.key)}>
                {item.icon} {item.title}
                <FaChevronDown className={styles.dropdownIcon} />
              </span>

              <ul
                className={`${styles.dropdown} ${
                  activeMenu === item.key ? styles.visible : ""
                }`}
              >
                {item.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} onClick={handleLinkClick}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MainNavbar;
