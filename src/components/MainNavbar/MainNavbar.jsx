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
    if (!isMenuOpen) setActiveMenu(null); // close dropdowns on toggle
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
        { name: "Round Neck", to: "/round_neck" },
        { name: "V-Neck", to: "/v_neck" },
        { name: "Pool T-Shirt", to: "/pool_tshirt" },
        { name: "Cut and Sew", to: "/cutSew" },
        { name: "Basic Pool", to: "/basicpool" },
      ],
    },
    {
      icon: <FaShoppingBag />,
      title: "Apparels",
      key: "apparels",
      links: [
        { name: "Cap", to: "/cap" },
        { name: "Jackets", to: "/jackets" },
        { name: "Sweatshirt", to: "/sweatshirt" },
        { name: "Denim Shirt", to: "/denimShirt" },
        { name: "Windcheaters", to: "/windcheaters" },
      ],
    },
    {
      icon: <FaSuitcase />,
      title: "Travel",
      key: "travel",
      links: [
        { name: "Hand Bag", to: "/handbag" },
        { name: "Strolley Bags", to: "/strolleybag" },
        { name: "Travel Bags", to: "/travelbag" },
        { name: "Back Packs", to: "/backpacks" },
        { name: "Laptop Bags", to: "/laptopbag" },
      ],
    },
    {
      icon: <FaWallet />,
      title: "Leather",
      key: "leather",
      links: [
        { name: "Office Bags", to: "/leatherofficebag" },
        { name: "Wallets", to: "/leatherwallets" },
      ],
    },
    {
      icon: <FaUserTie />,
      title: "Uniforms",
      key: "uniforms",
      links: [
        { name: "School Uniforms", to: "/school" },
        { name: "Corporate", to: "/corporate" },
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
                {item.icon} {item.title}{" "}
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
