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
  const { category } = useParams();
  const {
    addToCart,
    wishlist,
    addToWishlist,
    removeFromWishlist,
  } = useCart();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMainCategory, setSelectedMainCategory] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [sortOption, setSortOption] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const mainCategories = [...new Set(productsData.map((p) => p.category))];
  const subcategories = [...new Set(productsData.map((p) => p.categoryKey))];
  const colors = [...new Set(productsData.flatMap((p) => p.colors || []))];

  // Filter
  let filteredProducts = productsData.filter((product) => {
    const matchesCategory = category ? product.categoryKey === category : true;
    const matchesMainCategory =
      selectedMainCategory === "All" || product.category === selectedMainCategory;
    const matchesSubcategory =
      selectedSubcategory === "All" || product.categoryKey === selectedSubcategory;
    const matchesColor =
      selectedColor === "All" || (product.colors && product.colors.includes(selectedColor));
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStock = inStockOnly ? product.inStock : true;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

    return (
      matchesCategory &&
      matchesMainCategory &&
      matchesSubcategory &&
      matchesColor &&
      matchesSearch &&
      matchesStock &&
      matchesPrice
    );
  });

  // Sort
  if (sortOption === "priceLow") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "priceHigh") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === "newest") {
    filteredProducts.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
  } else if (sortOption === "popular") {
    filteredProducts.sort((a, b) => b.popularity - a.popularity);
  }

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [
    category,
    selectedMainCategory,
    selectedSubcategory,
    selectedColor,
    searchTerm,
    inStockOnly,
    sortOption,
    priceRange,
  ]);

  return (
    <div className={styles.productsContainer}>
      {/* Sidebar Filters */}
      <div className={styles.sidebar}>
        <h3>Filter Products</h3>

        <select value={selectedMainCategory} onChange={(e) => setSelectedMainCategory(e.target.value)}>
          <option value="All">All Categories</option>
          {mainCategories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select value={selectedSubcategory} onChange={(e) => setSelectedSubcategory(e.target.value)}>
          <option value="All">All Subcategories</option>
          {subcategories.map((sub) => (
            <option key={sub} value={sub}>{sub.replace(/_/g, " ")}</option>
          ))}
        </select>

        <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
          <option value="All">All Colors</option>
          {colors.map((color) => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <label>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
          />
          In Stock Only
        </label>

        <div>
          <label>Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</label>
          <input
            type="range"
            min={0}
            max={5000}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
          />
        </div>

        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="">Sort By</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
          <option value="newest">Newest First</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>

      {/* Main Products Content */}
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Our Products</h2>
        </div>

        <div className={styles.productGrid}>
          {paginatedProducts.length === 0 ? (
            <p className={styles.noResult}>No products found.</p>
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
                  {wishlist.includes(product.id) ? <FaHeart color="red" /> : <FaRegHeart />}
                </div>
                <h4 className={styles.category}>{product.category}</h4>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.price}>₹{product.price}</p>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color={i < Math.floor(product.rating) ? "#ffcc00" : "#ccc"} />
                  ))}
                </div>
                <div className={styles.productButtons}>
                  <Link to={`/product/${product.id}`}>
                    <button className={styles.viewBtn}>View Details</button>
                  </Link>
                  <button onClick={() => addToCart(product)} className={styles.cartBtn}>
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
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              <FaChevronLeft />
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? styles.activePage : ""}
              >
                {index + 1}
              </button>
            ))}
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
