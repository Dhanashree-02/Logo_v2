import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
  const { category } = useParams(); // e.g., 'round_neck', 'pool_tshirt'
  const {
    addToCart,
    wishlist,
    addToWishlist,
    removeFromWishlist,
  } = useCart();

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMainCategory, setSelectedMainCategory] = useState("All");
  const productsPerPage = 8;

  // Filter products using categoryKey instead of category
  const filteredProducts = productsData.filter((product) => {
    const matchesCategory = category ? product.categoryKey === category : true;

    const matchesMainCategory =
      selectedMainCategory === "All" ||
      product.category === selectedMainCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesMainCategory && matchesSearch;
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

  useEffect(() => {
    setCurrentPage(1); // Reset to page 1 when category changes
  }, [category]);

  return (
    <div className={styles.productsContainer}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Our Products</h2>
        <div className={styles.filters}>
          <select
            value={selectedMainCategory}
            onChange={(e) => setSelectedMainCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
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

      <div className={styles.productGrid}>
        {paginatedProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          paginatedProducts.map((product) => (
            <div className={styles.card} key={product.id}>
              <img src={product.image} alt={product.name} />
              <div
                className={styles.wishlistIcon}
                onClick={() =>
                  wishlist.includes(product.id)
                    ? removeFromWishlist(product.id)
                    : addToWishlist(product.id)
                }
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
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} color={i < 4 ? "#ffcc00" : "#ccc"} />
                ))}
              </div>
              <div className={styles.productButtons}>
                <Link to={`/product/${product.id}`}>
                  <button className={styles.viewBtn}>View Details</button>
                </Link>
                <button
                  onClick={() => addToCart(product)}
                  className={styles.cartBtn}
                >
                  <FaCartPlus /> Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaChevronLeft />
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={
                currentPage === index + 1 ? styles.activePage : ""
              }
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
