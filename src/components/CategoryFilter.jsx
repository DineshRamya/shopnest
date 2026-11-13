
const CategoryFilter = ({
  categories,
  selectedCategory,
  onCategoryChange
}) => {
  return (
    <div className="category-filter">

      <button
        className={`category-btn ${
          selectedCategory === "all" ? "selected" : ""
        }`}
        onClick={() => onCategoryChange("all")}
      >
        All Products
      </button>

      {categories.map((category) => (
        <button
          key={category}
          className={`category-btn ${
            selectedCategory === category ? "selected" : ""
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}

    </div>
  );
};

export default CategoryFilter;
