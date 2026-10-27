import { useState } from "react";
import ProductCard from "../components/ProductCard";
import "../css/Accessories.css";

function Accessories() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  const products = [
    // Watches
    {
      id: 1,
      category: "watches",
      title: "Smart Watch",
      description: "Elegant modern smartwatch.",
      price: 3999,
      image: "https://i.pinimg.com/1200x/8a/1e/a3/8a1ea39af8346be00241bce8072f1dc6.jpg",
    },
    {
      id: 2,
      category: "watches",
      title: "Classic Watch",
      description: "Formal timeless watch.",
      price: 2499,
      image: "https://i.pinimg.com/1200x/c9/69/01/c969011463b024c283f2b28be0cae926.jpg",
    },
    {
      id: 3,
      category: "watches",
      title: "Luxury Watch",
      description: "Premium designer watch.",
      price: 3499,
      image: "https://i.pinimg.com/1200x/5e/9e/50/5e9e50bdb7205d251477973b361fb236.jpg",
    },
    // Bags
    {
      id: 4,
      category: "bags",
      title: "Luxury Handbag",
      description: "Premium fashion handbag.",
      price: 1799,
      image: "https://i.pinimg.com/736x/85/f0/b4/85f0b496df7c9cd36b41883381421711.jpg",
    },
    {
      id: 5,
      category: "bags",
      title: "Travel Backpack",
      description: "Trendy travel backpack.",
      price: 1499,
      image: "https://i.pinimg.com/1200x/9b/65/72/9b6572dddb80f76d3cf34683bb8ca67d.jpg",
    },
    {
      id: 6,
      category: "bags",
      title: "Shoulder Bag",
      description: "Comfortable shoulder bag.",
      price: 1299,
      image: "https://i.pinimg.com/736x/ba/93/95/ba9395028c73240b833edccd998d7c78.jpg",
    },
    // Sunglasses
    {
      id: 7,
      category: "sunglasses",
      title: "Classic Sunglasses",
      description: "Classy UV protection shades.",
      price: 999,
      image: "https://i.pinimg.com/736x/ed/6a/c1/ed6ac1c85ff0b8f1549388ebf1e3de01.jpg",
    },
    {
      id: 8,
      category: "sunglasses",
      title: "Round Sunglasses",
      description: "Trendy round frames.",
      price: 899,
      image: "https://i.pinimg.com/1200x/80/6d/79/806d7980598ec931bf71829f2369d638.jpg",
    },
    {
      id: 9,
      category: "sunglasses",
      title: "Fashion Sunglasses",
      description: "Modern sunglasses.",
      price: 1099,
      image: "https://i.pinimg.com/1200x/ff/05/17/ff0517c6cbad034f144c452e8cac8c0c.jpg",
    },
    // Belts
    {
      id: 10,
      category: "belts",
      title: "Leather Belt",
      description: "Premium leather belt.",
      price: 999,
      image: "https://i.pinimg.com/1200x/fa/18/a0/fa18a0098ce4ea940c81bc1f0ef27909.jpg",
    },
    {
      id: 11,
      category: "belts",
      title: "Formal Belt",
      description: "Classic formal belt.",
      price: 799,
      image: "https://i.pinimg.com/736x/fe/c5/bc/fec5bc30ea5da03fc92c7cb49b480ae8.jpg",
    },
    {
      id: 12,
      category: "belts",
      title: "Funky Belt",
      description: "Trendy casual belt.",
      price: 699,
      image: "https://i.pinimg.com/1200x/4a/89/73/4a8973c2f22aedfd1277f7090b131507.jpg",
    },
    // Shoes
    {
      id: 13,
      category: "shoes",
      title: "Running Shoes",
      description: "Lightweight athletic shoes.",
      price: 2999,
      image: "https://i.pinimg.com/1200x/a1/e7/cc/a1e7cc994ca0ca25b44df95497d2228d.jpg",
    },
    {
      id: 14,
      category: "shoes",
      title: "Casual Shoes",
      description: "Everyday comfortable sneakers.",
      price: 1999,
      image: "https://i.pinimg.com/1200x/51/59/0d/51590d1e3bed1f4488d7734157355730.jpg",
    },
    {
      id: 15,
      category: "shoes",
      title: "Formal Shoes",
      description: "Office wear formal shoes.",
      price: 3499,
      image: "https://i.pinimg.com/1200x/e4/d9/a9/e4d9a95a69dd98385f8591df14b5c4bd.jpg",
    },
    // Jewellery
    {
      id: 16,
      category: "jewellery",
      title: "Necklace",
      description: "Beautiful statement necklace.",
      price: 1999,
      image: "https://i.pinimg.com/736x/60/bc/41/60bc4166680bf43d71d01c8178134fc9.jpg",
    },
    {
      id: 17,
      category: "jewellery",
      title: "Bracelet",
      description: "Elegant crafted bracelet.",
      price: 999,
      image: "https://i.pinimg.com/736x/16/f9/7b/16f97b09a962f450cbc7a8688348d26f.jpg",
    },
    {
      id: 18,
      category: "jewellery",
      title: "Earrings",
      description: "Stylish festive earrings.",
      price: 799,
      image: "https://i.pinimg.com/1200x/2e/e7/3b/2ee73bae4fe526942cb8cb4d57bdca13.jpg",
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
          Access-<br />ories<br />
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
                className={`filter-btn ${selectedCategory === "watches" ? "active" : ""}`}
                onClick={() => setSelectedCategory("watches")}
              >
                Watches
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedCategory === "bags" ? "active" : ""}`}
                onClick={() => setSelectedCategory("bags")}
              >
                Bags
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedCategory === "sunglasses" ? "active" : ""}`}
                onClick={() => setSelectedCategory("sunglasses")}
              >
                Sunglasses
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedCategory === "belts" ? "active" : ""}`}
                onClick={() => setSelectedCategory("belts")}
              >
                Belts
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedCategory === "shoes" ? "active" : ""}`}
                onClick={() => setSelectedCategory("shoes")}
              >
                Shoes
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedCategory === "jewellery" ? "active" : ""}`}
                onClick={() => setSelectedCategory("jewellery")}
              >
                Jewellery
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

export default Accessories;
