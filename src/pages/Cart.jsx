import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../css/Cart.css";

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  // Total price of products
  const totalPrice = cart.reduce((total, item) => {
    const priceNum = typeof item.price === "number" 
      ? item.price 
      : parseInt(String(item.price).replace(/[^0-9]/g, ""), 10) || 0;
    return total + priceNum;
  }, 0);

  return (
    <div className="cart-page">
      {/* Cart Page Header */}
      <div className="cart-header">
        <div className="cart-header-title">
          <span className="cart-icon">🛒</span>
          <h1>Your Cart</h1>
        </div>
        <span className="cart-item-count">
          {cart.length} {cart.length === 1 ? "Item" : "Items"}
        </span>
      </div>

      {/* When Cart is Empty */}
      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>
            Looks like you haven&apos;t added anything yet.<br />
            Explore our collections and find something you love.
          </p>
          <Link to="/" className="explore-btn">
            Explore Collections
          </Link>
        </div>
      ) : (
        /* When Cart has Items: Item List + Total Price */
        <div className="cart-layout">
          {/* Product Items List */}
          <div className="cart-items-list">
            {cart.map((item, index) => {
              const itemTitle = item.title || item.name || "Product";
              const itemPrice = typeof item.price === "number"
                ? item.price
                : parseInt(String(item.price).replace(/[^0-9]/g, ""), 10) || 0;
              const itemImage = item.image || item.img || "";

              return (
                <div key={`${itemTitle}-${index}`} className="cart-item-card">
                  {itemImage ? (
                    <img 
                      src={itemImage} 
                      alt={itemTitle} 
                      className="cart-item-image"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }} 
                    />
                  ) : (
                    <div className="cart-item-image" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      🛍️
                    </div>
                  )}

                  <div className="cart-item-details">
                    <h3 className="cart-item-title">{itemTitle}</h3>
                    {item.size && (
                      <div className="cart-item-subtitle">Size: {item.size}</div>
                    )}
                    <div className="cart-item-price">
                      ₹{itemPrice.toLocaleString("en-IN")}
                    </div>
                  </div>

                  <button
                    type="button"
                    className="cart-item-remove-btn"
                    title="Remove item"
                    onClick={() => removeFromCart(index)}
                  >
                    ✕
                  </button>
                </div>
              );
            })}
          </div>

          {/* Cart Summary (Total Price) */}
          <aside className="cart-summary">
            <h3>Order Summary</h3>
            <div className="cart-summary-row">
              <span>Total Items</span>
              <span>{cart.length}</span>
            </div>
            <div className="cart-summary-row cart-summary-total">
              <span>Total Price</span>
              <span className="total-amount">₹{totalPrice.toLocaleString("en-IN")}</span>
            </div>

            <div className="cart-actions">
              <Link to="/" className="cart-continue-btn">
                Continue Shopping
              </Link>
              <button 
                type="button" 
                className="cart-clear-btn" 
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

export default Cart;
