import { useState } from "react";
import ProductCard from "../components/ProductCard";
import "../css/Women.css";

function Women() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  const products = [
    // Dresses
    {
      id: 1,
      category: "dresses",
      title: "Summer Dress",
      description: "Lightweight floral summer dress.",
      price: 1499,
      image: "https://i.pinimg.com/1200x/e4/ef/5e/e4ef5ed72344835114695abcb6b63b32.jpg",
    },
    {
      id: 2,
      category: "dresses",
      title: "Party Dress",
      description: "Elegant evening party dress.",
      price: 1999,
      image: "https://i.pinimg.com/736x/f7/98/30/f798309a3110efea3f821265408b3346.jpg",
    },
    {
      id: 3,
      category: "dresses",
      title: "Denim Dress",
      description: "Trendy casual denim dress.",
      price: 1799,
      image: "https://i.pinimg.com/736x/bf/c7/3d/bfc73d8aa2aefb7f785c0adfc53b00d3.jpg",
    },
    // Tops & T-Shirts
    {
      id: 4,
      category: "tops",
      title: "Stylish Top",
      description: "Modern casual top.",
      price: 799,
      image: "https://i.pinimg.com/1200x/ec/c0/bc/ecc0bcf861a919d690b0ef7600dc12bb.jpg",
    },
    {
      id: 5,
      category: "tops",
      title: "Casual T-Shirt",
      description: "Comfortable cotton t-shirt.",
      price: 699,
      image: "https://i.pinimg.com/736x/86/b1/ed/86b1edfce0f9cd650c79580ed3de78ad.jpg",
    },
    {
      id: 6,
      category: "tops",
      title: "Printed Top",
      description: "Stylish printed everyday top.",
      price: 899,
      image: "https://i.pinimg.com/736x/2d/60/75/2d6075fca914f5ed7fdbd5ea838d8ef2.jpg",
    },
    // Ethnic Wear
    {
      id: 7,
      category: "ethnic",
      title: "Saree",
      description: "Elegant traditional saree.",
      price: 2999,
      image: "https://i.pinimg.com/736x/43/e2/2f/43e22f76e1ec770d613487e0ff69357e.jpg",
    },
    {
      id: 8,
      category: "ethnic",
      title: "Designer Kurti",
      description: "Stylish festive kurti.",
      price: 1499,
      image: "https://i.pinimg.com/736x/e2/17/06/e21706e18c1f0bdf655aae38af3e8f63.jpg",
    },
    {
      id: 9,
      category: "ethnic",
      title: "Lehenga",
      description: "Beautiful wedding lehenga.",
      price: 4999,
      image: "https://i.pinimg.com/736x/99/1f/3b/991f3bc839741d277cafae28fbca200e.jpg",
    },
    // Jackets
    {
      id: 10,
      category: "jackets",
      title: "Denim Jacket",
      description: "Trendy denim jacket.",
      price: 1899,
      image: "https://i.pinimg.com/1200x/d8/e7/6b/d8e76b31488282379bf8ad04ed913196.jpg",
    },
    {
      id: 11,
      category: "jackets",
      title: "Leather Jacket",
      description: "Stylish leather jacket.",
      price: 3499,
      image: "https://i.pinimg.com/736x/d9/b1/9c/d9b19c18aa7e0f1d29ceb1157c59cf41.jpg",
    },
    {
      id: 12,
      category: "jackets",
      title: "Winter Coat",
      description: "Warm winter coat.",
      price: 2599,
      image: "https://i.pinimg.com/736x/8f/34/8a/8f348ac20792ccee50aed555bf72d7d6.jpg",
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
          Women&apos;s<br />
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
                className={`filter-btn ${selectedCategory === "dresses" ? "active" : ""}`}
                onClick={() => setSelectedCategory("dresses")}
              >
                Dresses
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedCategory === "tops" ? "active" : ""}`}
                onClick={() => setSelectedCategory("tops")}
              >
                Tops & T-Shirts
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedCategory === "ethnic" ? "active" : ""}`}
                onClick={() => setSelectedCategory("ethnic")}
              >
                Ethnic Wear
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedCategory === "jackets" ? "active" : ""}`}
                onClick={() => setSelectedCategory("jackets")}
              >
                Jackets
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

export default Women;
