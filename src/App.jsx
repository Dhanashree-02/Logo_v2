import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import ClientDetails from "./pages/Clients/ClientDetails";

// Components
import Footer from "./components/Footer/Footer";
import MainNavbar from "./components/MainNavbar/MainNavbar";
import Products from "./components/Products/Products";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import Wishlist from "./components/Wishlist/Wishlist";

// Pages
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import Clients from "./pages/Clients/Clients";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Services from "./pages/Services/Services";
import ServiceDetail from "./pages/Services/ServiceDetail"

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Layout wrapper to conditionally show MainNavbar
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
    "/product"
  ];

  const showMainNavbar = showMainNavbarRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      <TopNavbar />
      <MainNavbar/>
      {/* {showMainNavbar && <MainNavbar />} */}
      {children}
      <Footer />
    </>
  );
};

// App Component
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />

          <Route path="/clients" element={<Clients />} />
          <Route path="/client/:id" element={<ClientDetails />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Products */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/category/:category" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          
          {/* Cart / Wishlist */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />

        </Routes>
      </Layout>
    </Router>
  );
};

export default App;