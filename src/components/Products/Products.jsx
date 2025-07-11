import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCartPlus,
  FaHeart,
  FaRegHeart,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import productsData from "../../data/products";
import styles from "./Products.module.css";
import { useCart } from "../../context/CartContext";

const Products = () => {
  const {
    addToCart,
    wishlist,
    addToWishlist,
    removeFromWishlist,
  } = useCart();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Filtered products
  const filteredProducts = productsData.filter((product) => {
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className={styles.productsContainer}>
      {/* Header and filters */}
      <div className={styles.header}>
        <h2 className={styles.heading}>Our Products</h2>
        <div className={styles.filters}>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Tshirts">Tshirts</option>
            <option value="Apparels">Apparels</option>
            <option value="Travel">Travel</option>
            <option value="Leather">Leather</option>
            <option value="Uniforms">Uniforms</option>
          </select>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Products */}
      <div className={styles.productGrid}>
        {paginatedProducts.map((product) => (
          <div className={styles.card} key={product.id}>
            <img src={product.image} alt={product.name} />
            <div
              className={styles.wishlistIcon}
              onClick={() =>
                wishlist.includes(product.id)
                  ? removeFromWishlist(product.id)
                  : addToWishlist(product.id)
              }
              title="Toggle Wishlist"
            >
              {wishlist.includes(product.id) ? (
                <FaHeart color="red" />
              ) : (
                <FaRegHeart />
              )}
            </div>
            <h4>{product.category}</h4>
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>

            {/* Static stars */}
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color={i < 4 ? "#ffcc00" : "#ccc"} />
              ))}
            </div>

            <div className={styles.productButtons}>
              <Link to={`/product/${product.id}`} className={styles.link}>
                <button type="button" className={styles.viewBtn}>
                  View Details
                </button>
              </Link>
              <button
                type="button"
                onClick={() => addToCart(product)}
                className={styles.cartBtn}
              >
                <FaCartPlus /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={styles.pageBtn}
          >
            <FaChevronLeft />
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`${styles.pageBtn} ${
                currentPage === index + 1 ? styles.activePage : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={styles.pageBtn}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
