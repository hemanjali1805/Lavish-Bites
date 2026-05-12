import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import './Cart.css';

const Cart = () => {
  const { cart, updateCart, removeFromCart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [orderData, setOrderData] = useState({
    name: '',
    address: '',
    phone: '',
    paymentMethod: 'Cash on Delivery'
  });
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleQuantityChange = (productId, quantity) => {
    if (quantity > 0) {
      updateCart(productId, quantity);
    } else {
      removeFromCart(productId);
    }
  };

  const totalPrice = cart.items.reduce((total, item) => total + item.productId.price * item.quantity, 0);

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    try {
      // Assuming order API
      await fetch('http://lavish-bites-1.onrender.com/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(orderData)
      });
      toast.success('Order placed successfully!');
      navigate('/');
    } catch (err) {
      toast.error('Failed to place order');
    }
  };

  return (
    <div className="cart-container">
      <header className="cart-header">
        <h1>Your Cart</h1>
        <nav className="top-nav">
          <button onClick={() => navigate('/')}>Home</button>
          <div className="profile-container">
            <div className="profile-icon" onClick={handleProfileClick}>
              👤
            </div>
            {showDropdown && (
              <div className="profile-dropdown">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <button onClick={logout}>Logout</button>
              </div>
            )}
          </div>
        </nav>
      </header>
      {cart.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.items.map((item) => (
              <div key={item.productId._id} className="cart-item">
                <img src={item.productId.image} alt={item.productId.name} />
                <div>
                  <h3>{item.productId.name}</h3>
                  <p>₹{item.productId.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => handleQuantityChange(item.productId._id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.productId._id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.productId._id)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h2>Total: ₹{totalPrice.toFixed(0)}</h2>
          </div>
          <form className="order-form" onSubmit={handleOrderSubmit}>
            <h2>Place Order</h2>
            <input
              type="text"
              placeholder="Name"
              value={orderData.name}
              onChange={(e) => setOrderData({ ...orderData, name: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Address"
              value={orderData.address}
              onChange={(e) => setOrderData({ ...orderData, address: e.target.value })}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={orderData.phone}
              onChange={(e) => setOrderData({ ...orderData, phone: e.target.value })}
              required
            />
            <select
              value={orderData.paymentMethod}
              onChange={(e) => setOrderData({ ...orderData, paymentMethod: e.target.value })}
            >
              <option>Cash on Delivery</option>
              <option>UPI / Card</option>
            </select>
            <button type="submit">Place Order</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Cart;