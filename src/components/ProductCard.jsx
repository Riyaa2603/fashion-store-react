import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../css/ProductCard.css";

// Helper function to get default cloth / fabric description
function getDefaultClothDescription(category, title) {
  const t = (title || "").toLowerCase();
  const c = (category || "").toLowerCase();

  if (t.includes("denim") || c === "jeans") {
    return "100% Premium Cotton Denim — Durable, breathable, and pre-washed for comfortable stretch.";
  }
  if (t.includes("leather")) {
    return "High-Grade Faux / Vegan Leather with soft inner viscose lining — Sleek and weather-resistant.";
  }
  if (t.includes("silk") || c === "ethnic" || t.includes("saree") || t.includes("lehenga") || t.includes("kurti")) {
    return "Rich Silk-Chanderi Blend with traditional zari work — Soft, lustrous, and skin-friendly.";
  }
  if (t.includes("fleece") || t.includes("hoodie") || t.includes("sweatshirt") || t.includes("winter") || t.includes("coat")) {
    return "Heavyweight 320 GSM Cotton-Poly Fleece — Brushed thermal interior for cozy warmth.";
  }
  if (c === "tshirts" || t.includes("tee")) {
    return "100% Bio-Washed Combed Cotton (180 GSM) — Ultra-soft, breathable, and color-fast.";
  }
  if (c === "shirts") {
    return "100% Pure Egyptian Cotton — Crisp lightweight weave, breathable, and easy to iron.";
  }
  if (c === "dresses" || c === "tops") {
    return "Premium Rayon-Crepe Blend — Elegant fluid drape, lightweight, and super soft on skin.";
  }
  if (c === "babies" || c === "boys" || c === "girls" || c === "unisex") {
    return "100% Certified Organic Cotton — Hypoallergenic, gentle on delicate skin, and durable.";
  }
  if (c === "shoes") {
    return "Breathable Engineered Mesh with High-Rebound Foam Insole & anti-slip rubber sole.";
  }
  if (c === "watches") {
    return "316L Stainless Steel case with scratch-resistant mineral crystal glass.";
  }
  if (c === "bags") {
    return "High-Density Water-Resistant Canvas with vegan leather reinforcement.";
  }
  if (c === "sunglasses") {
    return "Polycarbonate UV400 Polarized lenses with durable acetate frame.";
  }
  if (c === "belts") {
    return "100% Genuine Full-Grain Leather with anti-corrosion brushed metal buckle.";
  }
  if (c === "jewellery") {
    return "Hypoallergenic skin-safe metal alloy with anti-tarnish 18K gold polish.";
  }

  // General default for clothes
  return "100% Pure Premium Cotton Fabric — Soft, breathable, and tailored for all-day comfort.";
}

// Helper function to get available sizes
function getDefaultSizes(category) {
  const c = (category || "").toLowerCase();

  // Shoes have numerical sizes
  if (c === "shoes") {
    return ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"];
  }

  // Accessories usually don't need multiple clothing sizes
  if (c === "watches" || c === "bags" || c === "sunglasses" || c === "jewellery" || c === "belts") {
    return ["Free Size"];
  }

  // Default clothing sizes
  return ["S", "M", "L", "XL", "XXL"];
}

function ProductCard({ title, description, price, image, category, fabric, sizes }) {
  // Simple state to control popup visibility
  const [isOpen, setIsOpen] = useState(false);

  // Available sizes & cloth description
  const availableSizes = sizes || getDefaultSizes(category);
  const clothDescription = fabric || getDefaultClothDescription(category, title);

  // Simple state for selected size (defaults to 'M' or first available size)
  const defaultSize = availableSizes.includes("M") ? "M" : availableSizes[0];
  const [selectedSize, setSelectedSize] = useState(defaultSize);

  // Cart Context se addToCart function nikala
  const { addToCart } = useContext(CartContext);

  // Open the product details popup
  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  // Close the product details popup
  const handleClosePopup = () => {
    setIsOpen(false);
  };

  // Simple event handler for Add to Cart
  const handleAddToCart = (e) => {
    // Stop click from bubbling up to the card
    if (e) e.stopPropagation();
    addToCart({ 
      title, 
      description, 
      price, 
      image, 
      category, 
      size: selectedSize, 
      fabric: clothDescription 
    });
    alert(`Added "${title}" (Size: ${selectedSize}) to your cart!`);
  };

  return (
    <>
      {/* Product Card - click anywhere to view details */}
      <div className="card" onClick={handleOpenPopup} style={{ cursor: "pointer" }}>
        <div className="card-image-wrap">
          <img src={image} alt={title} />
          <button 
            type="button"
            className="cart-btn" 
            onClick={handleAddToCart}
            title="Add to cart"
          >
            🛒
          </button>
        </div>
        <div className="card-info">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="price">₹{price}</div>
        </div>
      </div>

      {/* Product Details Popup (Modal) */}
      {isOpen && (
        <div className="modal-overlay" onClick={handleClosePopup}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button 
              type="button" 
              className="modal-close-btn" 
              onClick={handleClosePopup}
              title="Close"
            >
              ✕
            </button>

            {/* Left: Product Image */}
            <div className="modal-image-wrap">
              <img src={image} alt={title} />
            </div>

            {/* Right: Product Details */}
            <div className="modal-details">
              {category && <span className="modal-category">{category}</span>}
              <h2 className="modal-title">{title}</h2>
              <div className="modal-price">₹{price}</div>
              <p className="modal-description">{description}</p>

              {/* Size Selector for Clothes */}
              <div className="modal-section">
                <div className="modal-section-title">
                  <span>Select Size:</span>
                  <span className="selected-size-label">{selectedSize}</span>
                </div>
                <div className="size-buttons">
                  {availableSizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      className={`size-btn ${selectedSize === size ? "active" : ""}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description of the Cloth / Fabric Used */}
              <div className="modal-section fabric-box">
                <div className="modal-section-title">
                  <span>🧵 Cloth & Fabric Used:</span>
                </div>
                <p className="modal-fabric-desc">
                  {clothDescription}
                </p>
              </div>

              {/* Modal Actions */}
              <div className="modal-actions">
                <button 
                  type="button" 
                  className="modal-add-cart-btn"
                  onClick={handleAddToCart}
                >
                  🛒 Add to Cart ({selectedSize})
                </button>
                <button 
                  type="button" 
                  className="modal-close-action-btn"
                  onClick={handleClosePopup}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductCard;
