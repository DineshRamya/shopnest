
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Banner from "./components/Banner";

const ComingSoon = ({ title }) => (
  <div className="coming-soon">
    <span>SHOPNEST</span>
    <h1>{title}</h1>
    <p>This page will be implemented in the next milestone.</p>
  </div>
);

function App() {
  return (
    <>
      <Navbar />
       <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<ComingSoon title="All Products" />}
        />
        <Route
          path="/products/:id"
          element={<ComingSoon title="Product Details" />}
        />
        <Route
          path="/cart"
          element={<ComingSoon title="Shopping Cart" />}
        />
        <Route
          path="/contact"
          element={<ComingSoon title="Contact Us" />}
        />
        <Route
          path="*"
          element={<ComingSoon title="Page Not Found" />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
