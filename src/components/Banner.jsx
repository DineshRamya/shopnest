
import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <section className="hero-banner">
      <div className="banner-content">
        <p className="banner-tag">NEW COLLECTION 2026</p>

        <h1>
          Discover Your Style
          <br />
          With ShopNest
        </h1>

        <p>
          Find everything you love, all in one place.
          Shop the latest trends at amazing prices.
        </p>

        <button onClick={() => window.location.href = "/products"}>
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default Banner;
