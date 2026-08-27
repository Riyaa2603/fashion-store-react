
function ProductCard({ title, description, price, image }) {
  // Simple event handler for Add to Cart
  const handleAddToCart = () => {
    alert(`Added ${title} to your cart!`);
  };

  return (
    <div className="card">
      <div className="card-image-wrap">
        <img src={image} alt={title} />
        <button 
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
  );
}

export default ProductCard;
