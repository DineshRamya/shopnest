
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>ShopNest<span>.</span></h2>
          <p>
            Discover products you'll love.
            Shop smarter, live better.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Shopping Cart</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>✉ hello@shopnest.com</p>
          <p>☎ +91 98765 43210</p>
          <p>⌖ India</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 ShopNest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
