import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import MainNavbar from "./components/MainNavbar/MainNavbar";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import About from "./pages/About/About";
import Clients from "./pages/Clients/Clients";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Services from "./pages/Services/Services";
import Products from "./components/Products/Products";
import Cart from "./pages/Cart/Cart"
import Wishlist from "./components/Wishlist/Wishlist";

import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};


// Custom layout wrapper
const Layout = ({ children }) => {
  const location = useLocation();

  // Define routes that should show MainNavbar
  const showMainNavbarRoutes = ["/services", "/product"];

  // Check if current path matches any route (use startsWith for dynamic paths)
  const showMainNavbar = showMainNavbarRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      <TopNavbar />
      {showMainNavbar && <MainNavbar />}
      {children}
      <Footer />
    </>
  );
};

const App = () => {
  const addToCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <Router>
        <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />

        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
