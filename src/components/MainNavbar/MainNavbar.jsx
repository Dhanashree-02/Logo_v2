import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronDown,
  FaTshirt,
  FaShoppingBag,
  FaSuitcase,
  FaWallet,
  FaUserTie,
} from "react-icons/fa";
import styles from "./MainNavbar.module.css";

const MainNavbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) setActiveMenu(null); // Close dropdowns when menu opens
  };

  const handleDropdownToggle = (menu) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
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

  const navItems = [
    {
      icon: <FaTshirt />,
      title: "Tshirts",
      key: "tshirt",
      links: [
        { name: "Round Neck", to: "/products/category/round_neck" },
        { name: "V-Neck", to: "/products/category/v_neck" },
        { name: "Pool T-Shirt", to: "/products/category/pool_tshirt" },
        { name: "Cut and Sew", to: "/products/category/cutSew" },
        { name: "Basic Pool", to: "/products/category/basicpool" },
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
        {/* Hamburger for mobile */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>

        {/* Menu */}
        <ul className={`${styles.menuList} ${isMenuOpen ? styles.active : ""}`}>
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
              {activeMenu === item.key && (
                <ul className={styles.dropdown}>
                  {item.links.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to} onClick={handleLinkClick}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MainNavbar;
