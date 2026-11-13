
import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const Navbar = () => {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-icon">
            <ShoppingBag size={25} />
          </span>
          <span>Shop<span>Nest</span></span>
        </Link>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/products" onClick={closeMenu}>Products</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </nav>

        <div className="nav-actions">
          <Link to="/products" className="search-icon" aria-label="Search products">
            <Search size={21} />
          </Link>

          <Link to="/cart" className="cart-icon" aria-label={`Shopping cart, ${cartCount} items`}>
            <ShoppingBag size={22} />
            <span className="cart-count">{cartCount}</span>
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
