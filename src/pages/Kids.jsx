import { useState } from "react";
import ProductCard from "../components/ProductCard";
import "../css/Kids.css";

function Kids() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  const products = [
    // Boys
    {
      id: 1,
      category: "boys",
      title: "SweatShirt",
      description: "Cozy boys sweatshirt.",
      price: 499,
      image: "https://i.pinimg.com/1200x/12/cf/8e/12cf8e97b667f6a3c896be64d087e62a.jpg",
    },
    {
      id: 2,
      category: "boys",
      title: "Jeans",
      description: "Durable boys jeans.",
      price: 399,
      image: "https://i.pinimg.com/736x/a2/c5/60/a2c5606eda43b714aacb23dfc2a9588c.jpg",
    },
    {
      id: 3,
      category: "boys",
      title: "Hoodie",
      description: "Warm boys hoodie.",
      price: 449,
      image: "https://i.pinimg.com/736x/8c/34/da/8c34da610e9a135dde87a1aec3f3cf09.jpg",
    },
    // Girls
    {
      id: 4,
      category: "girls",
      title: "Tops",
      description: "Cute girls tops.",
      price: 699,
      image: "https://i.pinimg.com/736x/e4/54/fa/e454fa2b69dd0d113d7361609787549c.jpg",
    },
    {
      id: 5,
      category: "girls",
      title: "Skirt",
      description: "Stylish girls skirt.",
      price: 799,
      image: "https://i.pinimg.com/1200x/91/6a/32/916a32700c3b9ef8265acc25d37d8641.jpg",
    },
    {
      id: 6,
      category: "girls",
      title: "Dress",
      description: "Pretty girls dress.",
      price: 899,
      image: "https://i.pinimg.com/736x/45/a7/f1/45a7f16ecd861397cb83478496dc4d0b.jpg",
    },
    // Babies
    {
      id: 7,
      category: "babies",
      title: "NightWear",
      description: "Soft baby nightwear.",
      price: 599,
      image: "https://i.pinimg.com/736x/cd/5c/f6/cd5cf641aa06b49d2d87de0e66345677.jpg",
    },
    {
      id: 8,
      category: "babies",
      title: "Jeans",
      description: "Adorable baby jeans.",
      price: 499,
      image: "https://i.pinimg.com/1200x/8b/8d/c7/8b8dc7ec6bd4d3f69609df3eea88a35c.jpg",
    },
    {
      id: 9,
      category: "babies",
      title: "T-Shirts",
      description: "Comfortable baby tees.",
      price: 549,
      image: "https://i.pinimg.com/1200x/c5/8d/ae/c58daeb5ad01654f01a97273c2c32416.jpg",
    },
    // Unisex
    {
      id: 10,
      category: "unisex",
      title: "T-Shirts",
      description: "Fun unisex tees.",
      price: 999,
      image: "https://i.pinimg.com/1200x/a8/81/de/a881de0adf367da0323ce5bada52e7c4.jpg",
    },
    {
      id: 11,
      category: "unisex",
      title: "Trousers",
      description: "Comfortable unisex trousers.",
      price: 1199,
      image: "https://i.pinimg.com/736x/e3/88/45/e38845da63883fc7ab1325171df2e0ad.jpg",
    },
    {
      id: 12,
      category: "unisex",
      title: "Jump Suit",
      description: "Playful kids jumpsuit.",
      price: 1299,
      image: "https://i.pinimg.com/736x/94/c1/43/94c1430d548967afec057c30238e6bcc.jpg",
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
          Kids&apos;<br />
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
                className={`filter-btn ${selectedCategory === "boys" ? "active" : ""}`}
                onClick={() => setSelectedCategory("boys")}
              >
                Boys
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedCategory === "girls" ? "active" : ""}`}
                onClick={() => setSelectedCategory("girls")}
              >
                Girls
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedCategory === "babies" ? "active" : ""}`}
                onClick={() => setSelectedCategory("babies")}
              >
                Babies
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedCategory === "unisex" ? "active" : ""}`}
                onClick={() => setSelectedCategory("unisex")}
              >
                Unisex
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

export default Kids;
