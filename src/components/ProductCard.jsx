
import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">

      <Link
        to={`/products/${product.id}`}
        className="product-image-container"
      >
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
          loading="lazy"
        />
        <span className="product-badge">Popular</span>
      </Link>

      <div className="product-info">

        <p className="product-category">
          {product.category}
        </p>

        <Link
          to={`/products/${product.id}`}
          className="product-title"
        >
          {product.title}
        </Link>

        <div className="product-rating">
          <Star size={15} fill="currentColor" />
          <span>{product.rating?.rate || "4.5"}</span>
          <span className="rating-count">
            ({product.rating?.count || 0})
          </span>
        </div>

        <div className="product-bottom">
          <span className="product-price">
            ₹{(product.price * 83).toLocaleString("en-IN", {
              maximumFractionDigits: 0
            })}
          </span>

          <button
            className="add-cart-btn"
            onClick={() => addToCart({
              ...product,
              price: Math.round(product.price * 83)
            })}
            aria-label={`Add ${product.title} to cart`}
          >
            <ShoppingCart size={17} />
            Add
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
