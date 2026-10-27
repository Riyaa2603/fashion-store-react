import { useState } from "react";
import ProductCard from "../components/ProductCard";
import "../css/Men.css";

function Men() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  const products = [
    // Shirts
    {
      id: 1,
      category: "shirts",
      title: "Formal Shirt",
      description: "Classic formal shirt.",
      price: 1299,
      image: "https://i.pinimg.com/736x/e3/f2/de/e3f2de56a2ed26b15b8609ba385dd1ae.jpg",
    },
    {
      id: 2,
      category: "shirts",
      title: "Casual Shirt",
      description: "Relaxed everyday shirt.",
      price: 999,
      image: "https://i.pinimg.com/736x/23/e5/04/23e504c0340715dedd9ee503a55246f7.jpg",
    },
    {
      id: 3,
      category: "shirts",
      title: "Printed Shirt",
      description: "Trendy printed shirt.",
      price: 1199,
      image: "https://i.pinimg.com/736x/68/af/94/68af942e317fe30c3a385eed5e4525fd.jpg",
    },
    // T-Shirts
    {
      id: 4,
      category: "tshirts",
      title: "Plain Tee",
      description: "Comfortable cotton tee.",
      price: 599,
      image: "https://i.pinimg.com/736x/33/2e/4e/332e4efac03e109718245d7b2faff9c2.jpg",
    },
    {
      id: 5,
      category: "tshirts",
      title: "Polo Tee",
      description: "Smart casual polo.",
      price: 899,
      image: "https://i.pinimg.com/736x/ba/1a/8b/ba1a8bee3d423985780ad7e14f69c1ec.jpg",
    },
    {
      id: 6,
      category: "tshirts",
      title: "Graphic Tee",
      description: "Bold graphic print tee.",
      price: 699,
      image: "https://images.unsplash.com/photo-1503341733017-1901578f9f1e",
    },
    // Jackets
    {
      id: 7,
      category: "jackets",
      title: "Denim Jacket",
      description: "Classic denim jacket.",
      price: 1999,
      image: "https://i.pinimg.com/1200x/fc/2c/f3/fc2cf3bdbbd92c04401903adc960f931.jpg",
    },
    {
      id: 8,
      category: "jackets",
      title: "Leather Jacket",
      description: "Stylish leather jacket.",
      price: 3999,
      image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    },
    {
      id: 9,
      category: "jackets",
      title: "Winter Jacket",
      description: "Warm winter jacket.",
      price: 2499,
      image: "https://i.pinimg.com/736x/55/ac/c3/55acc358ce2d841c716d51ce6b7d16dc.jpg",
    },
    // Jeans
    {
      id: 10,
      category: "jeans",
      title: "Baggy Jeans",
      description: "Relaxed baggy fit jeans.",
      price: 1799,
      image: "https://i.pinimg.com/1200x/e7/a6/fb/e7a6fbdc8ba9928c5115474b6791705a.jpg",
    },
    {
      id: 11,
      category: "jeans",
      title: "Regular Fit",
      description: "Everyday regular fit jeans.",
      price: 1599,
      image: "https://i.pinimg.com/1200x/90/b1/70/90b170358d4db38efa94be88df4c3971.jpg",
    },
    {
      id: 12,
      category: "jeans",
      title: "Straight Fit",
      description: "Clean straight fit jeans.",
      price: 1899,
      image: "https://i.pinimg.com/1200x/57/5f/2b/575f2bcb35212d408c923e069634c601.jpg",
    },
  ];

  // Filter products according to state
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <div className="page-layout">
      {/* Sidebar Filter */}
      <aside className="sidebar">
        <div className="sidebar-title">
          Men&apos;s<br />
          <span>Collection</span>
        </div>

        <div className="filter-group">
          <div
            className="filter-header"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            Category <span>{isFilterOpen ? "▲" : "▼"}</span>
          </div>

          {isFilterOpen && (
            <div className="filter-options">
              <button
                type="button"
                className={`filter-btn ${selectedCategory === "all" ? "active" : ""}`}
                onClick={() => setSelectedCategory("all")}
              >
                All Products
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedCategory === "shirts" ? "active" : ""}`}
                onClick={() => setSelectedCategory("shirts")}
              >
                Shirts
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedCategory === "tshirts" ? "active" : ""}`}
                onClick={() => setSelectedCategory("tshirts")}
              >
                T-Shirts
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedCategory === "jackets" ? "active" : ""}`}
                onClick={() => setSelectedCategory("jackets")}
              >
                Jackets
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedCategory === "jeans" ? "active" : ""}`}
                onClick={() => setSelectedCategory("jeans")}
              >
                Jeans
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <div className="content-topbar">
          <span className="product-count">
            {filteredProducts.length} Products Found
          </span>
          <span className="current-filter-tag">
            Category: {selectedCategory.toUpperCase()}
          </span>
        </div>

        {/* Product Grid using CSS Grid & List Rendering */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Men;
