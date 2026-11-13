
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, RefreshCw } from "lucide-react";

import { getProducts } from "../services/api";
import ProductGrid from "../components/ProductGrid";
import CategoryFilter from "../components/CategoryFilter";
import Loader from "../components/Loader";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getProducts();

      setProducts(data);
      setCategories([
        ...new Set(data.map((product) => product.category))
      ]);
    } catch (err) {
      console.error("Product fetching failed:", err);

      setError(
        "Unable to load products. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  const featuredProducts = filteredProducts.slice(0, 8);

  return (
    <main>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-label">
            THE ART OF EVERYDAY SHOPPING
          </span>

          <h1>
            Find Your Style.
            <br />
            <span>Love Your Life.</span>
          </h1>

          <p>
            Discover thoughtfully selected products
            that bring beauty, comfort and joy to your
            everyday life.
          </p>

          <Link to="/products" className="hero-button">
            Explore Collection
            <ArrowRight size={18} />
          </Link>

          <div className="hero-trust">
            <span>✦ Curated Products</span>
            <span>✦ Quality Finds</span>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="D:\shopnest\pexels-h-512756904-38171767.jpg"
            alt="ShopNest shopping collection"
          />
          <div className="hero-image-caption">
            <span>NEW COLLECTION</span>
            <strong>Everyday Essentials</strong>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section">
        <div className="benefit-item">
          <span>✦</span>
          <div>
            <h4>Curated Collection</h4>
            <p>Products selected for you</p>
          </div>
        </div>

        <div className="benefit-item">
          <span>◇</span>
          <div>
            <h4>Quality First</h4>
            <p>Shop with confidence</p>
          </div>
        </div>

        <div className="benefit-item">
          <span>♡</span>
          <div>
            <h4>Made for You</h4>
            <p>Find your perfect match</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="featured-section">

        <div className="section-heading">
          <div>
            <span className="section-label">
              OUR COLLECTION
            </span>
            <h2>Explore Our Products</h2>
            <p>Find something special for every moment.</p>
          </div>

          <Link to="/products" className="view-all">
            View All <ArrowRight size={17} />
          </Link>
        </div>

        {loading ? (
          <Loader />
        ) : error ? (
          <div className="error-message">
            <p>{error}</p>
            <button onClick={fetchProducts}>
              <RefreshCw size={16} /> Try Again
            </button>
          </div>
        ) : (
          <>
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />

            <ProductGrid products={featuredProducts} />
          </>
        )}

      </section>

    </main>
  );
};

export default Home;
