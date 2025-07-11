import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Components
import TopNavbar from "./components/TopNavbar/TopNavbar";
import MainNavbar from "./components/MainNavbar/MainNavbar";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Wishlist from "./components/Wishlist/Wishlist";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Clients from "./pages/Clients/Clients";
import Contact from "./pages/Contact/Contact";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Layout component
const Layout = ({ children }) => {
  const location = useLocation();

  // Define routes that should show MainNavbar
  const showMainNavbarRoutes = [
    "/services",
    "/products",
    "/round_neck",
    "/v_neck",
    "/pool_tshirt",
    "/cutSew",
    "/basicpool",
    "/cap",
    "/jackets",
    "/sweatshirt",
    "/denimShirt",
    "/windcheaters",
    "/handbag",
    "/strolleybag",
    "/travelbag",
    "/backpacks",
    "/laptopbag",
    "/leatherofficebag",
    "/leatherwallets",
    "/school",
    "/corporate",
    "/product" // includes dynamic /product/:id
  ];

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
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
