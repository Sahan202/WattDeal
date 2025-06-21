import { useState } from "react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Wireless Bluetooth Headphones", price: 26500.00, quantity: 1, image: "🎧" },
    { id: 2, name: "Smart LED Light Bulb", price: 7200.00, quantity: 2, image: "💡" },
    { id: 3, name: "USB-C Fast Charging Cable", price: 4700.00, quantity: 1, image: "🔌" },
  ]);
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };

  const handleApplyCoupon = () => {
    if (coupon.toLowerCase() === "save10") {
      setAppliedCoupon({ code: "SAVE10", discount: 0.1 });
    } else if (coupon.toLowerCase() === "electronics20") {
      setAppliedCoupon({ code: "ELECTRONICS20", discount: 0.2 });
    } else {
      setAppliedCoupon(null);
      alert("Invalid coupon code!");
    }
  };

  const getSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const getDiscount = () => {
    return appliedCoupon ? getSubtotal() * appliedCoupon.discount : 0;
  };

  const getTotal = () => {
    return (getSubtotal() - getDiscount()).toFixed(2);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-LK', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  return (
    <div className="cart-shopping-container">
      <div className="cart-shopping-header">
        <h1>🛒 Your Shopping Cart</h1>
        <p>Complete your purchase of amazing electrical items</p>
      </div>

      <div className="cart-shopping-content">
        <div className="cart-shopping-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-shopping-item-card">
              <div className="cart-shopping-item-image">
                <span className="cart-shopping-emoji">{item.image}</span>
              </div>
              <div className="cart-shopping-item-details">
                <h3>{item.name}</h3>
                <p className="cart-shopping-item-price">Rs. {formatPrice(item.price)}</p>
              </div>
              <div className="cart-shopping-item-controls">
                <div className="cart-shopping-quantity-controls">
                  <button 
                    className="cart-shopping-qty-btn"
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  >
                    −
                  </button>
                  <span className="cart-shopping-quantity">{item.quantity}</span>
                  <button 
                    className="cart-shopping-qty-btn"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <div className="cart-shopping-item-total">
                  Rs. {formatPrice(item.price * item.quantity)}
                </div>
                <button 
                  className="cart-shopping-remove-btn"
                  onClick={() => handleRemove(item.id)}
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
          
          {cartItems.length === 0 && (
            <div className="cart-shopping-empty">
              <span className="cart-shopping-empty-icon">🛒</span>
              <h3>Your cart is empty</h3>
              <p>Add some amazing electrical items to get started!</p>
            </div>
          )}
        </div>

        <div className="cart-shopping-sidebar">
          <div className="cart-shopping-coupon-card">
            <h3>💳 Apply Coupon</h3>
            <p className="cart-shopping-coupon-hint">Try: SAVE10 or ELECTRONICS20</p>
            <div className="cart-shopping-coupon-input-group">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="cart-shopping-coupon-input"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button 
                className="cart-shopping-apply-btn"
                onClick={handleApplyCoupon}
              >
                Apply
              </button>
            </div>
            {appliedCoupon && (
              <div className="cart-shopping-coupon-success">
                ✅ {appliedCoupon.code} applied! {(appliedCoupon.discount * 100)}% off
              </div>
            )}
          </div>

          <div className="cart-shopping-summary-card">
            <h3>📋 Order Summary</h3>
            <div className="cart-shopping-summary-line">
              <span>Subtotal:</span>
              <span>Rs. {formatPrice(getSubtotal())}</span>
            </div>
            {appliedCoupon && (
              <div className="cart-shopping-summary-line cart-shopping-discount">
                <span>Discount ({appliedCoupon.code}):</span>
                <span>-Rs. {formatPrice(getDiscount())}</span>
              </div>
            )}
            <div className="cart-shopping-summary-line">
              <span>Shipping:</span>
              <span className="cart-shopping-free">FREE 🚚</span>
            </div>
            <div className="cart-shopping-summary-line cart-shopping-total-line">
              <span>Total:</span>
              <span>Rs. {formatPrice(getTotal())}</span>
            </div>
            <button 
              className="cart-shopping-checkout-btn"
              disabled={cartItems.length === 0}
            >
              <span>🔒 Secure Checkout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

//styles combined directly in the file
const styles = `
/* Modern Shopping Cart Styles */
.cart-shopping-container {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.cart-shopping-header {
  text-align: center;
  margin-bottom: 40px;
  margin-top: 80px;
  color: white;
}

.cart-shopping-header h1 {
  font-size: 2.5rem;
  margin: 0;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.cart-shopping-header p {
  font-size: 1.1rem;
  margin: 10px 0 0 0;
  opacity: 0.9;
}

.cart-shopping-content {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 30px;
  align-items: start;
}

.cart-shopping-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cart-shopping-item-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  display: grid;
  grid-template-columns: 80px 1fr auto;
  gap: 20px;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255,255,255,0.2);
}

.cart-shopping-item-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
}

.cart-shopping-item-image {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-shopping-emoji {
  font-size: 2rem;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
}

.cart-shopping-item-details h3 {
  margin: 0 0 8px 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
}

.cart-shopping-item-price {
  margin: 0;
  font-size: 1rem;
  color: #666;
  font-weight: 500;
}

.cart-shopping-item-controls {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

.cart-shopping-quantity-controls {
  display: flex;
  align-items: center;
  background: #f8f9fa;
  border-radius: 8px;
  padding: 4px;
  gap: 4px;
}

.cart-shopping-qty-btn {
  width: 32px;
  height: 32px;
  border: none;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  color: #667eea;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.cart-shopping-qty-btn:hover {
  background: #667eea;
  color: white;
  transform: scale(1.05);
}

.cart-shopping-quantity {
  width: 40px;
  text-align: center;
  font-weight: 600;
  color: #333;
}

.cart-shopping-item-total {
  font-size: 1.1rem;
  font-weight: 700;
  color: #667eea;
}

.cart-shopping-remove-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.cart-shopping-remove-btn:hover {
  background: #fee;
  transform: scale(1.1);
}

.cart-shopping-empty {
  text-align: center;
  padding: 60px 20px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.cart-shopping-empty-icon {
  font-size: 4rem;
  display: block;
  margin-bottom: 20px;
}

.cart-shopping-empty h3 {
  margin: 0 0 10px 0;
  color: #333;
}

.cart-shopping-empty p {
  margin: 0;
  color: #666;
}

.cart-shopping-sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cart-shopping-coupon-card,
.cart-shopping-summary-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  border: 1px solid rgba(255,255,255,0.2);
}

.cart-shopping-coupon-card h3,
.cart-shopping-summary-card h3 {
  margin: 0 0 16px 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
}

.cart-shopping-coupon-hint {
  font-size: 0.9rem;
  color: #666;
  margin: 0 0 12px 0;
  font-style: italic;
}

.cart-shopping-coupon-input-group {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.cart-shopping-coupon-input {
  flex: 1;
  padding: 12px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

.cart-shopping-coupon-input:focus {
  outline: none;
  border-color: #667eea;
}

.cart-shopping-apply-btn {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.cart-shopping-apply-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.cart-shopping-coupon-success {
  background: #d4edda;
  color: #155724;
  padding: 12px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
}

.cart-shopping-summary-line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}

.cart-shopping-discount {
  color: #28a745;
  font-weight: 500;
}

.cart-shopping-free {
  color: #28a745;
  font-weight: 600;
}

.cart-shopping-total-line {
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
  border-bottom: 2px solid #667eea;
  margin-bottom: 20px;
}

.cart-shopping-checkout-btn {
  width: 100%;
  background: linear-gradient(135deg, #28a745, #20c997);
  color: white;
  border: none;
  padding: 16px;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.cart-shopping-checkout-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(40, 167, 69, 0.4);
}

.cart-shopping-checkout-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
  transform: none;
}

.cart-shopping-checkout-btn span {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .cart-shopping-content {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .cart-shopping-header h1 {
    font-size: 2rem;
  }
  
  .cart-shopping-item-card {
    grid-template-columns: 60px 1fr;
    gap: 16px;
  }
  
  .cart-shopping-item-controls {
    grid-column: 1 / -1;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 16px;
  }
  
  .cart-shopping-coupon-input-group {
    flex-direction: column;
  }
  
  .cart-shopping-apply-btn {
    width: 100%;
  }
}

/* Smooth animations */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cart-shopping-item-card {
  animation: slideIn 0.3s ease;
}
`;

const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);

export default ShoppingCart;