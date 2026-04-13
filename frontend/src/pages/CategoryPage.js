import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../contexts/CartContext';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import './CategoryPage.css';

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const { addToCart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${category}`);
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, [category]);

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleAddToCart = (productId) => {
    addToCart(productId);
    toast.success('Added to cart!');
  };

  return (
    <div className="category-container">
      <header className="category-header">
        <button className="back-btn" onClick={() => navigate('/')}>← Back</button>
        <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
        <nav className="top-nav">
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/cart')}>Cart</button>
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
      <div className="products-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="type">{product.type}</p>
            <p className="price">₹{product.price}</p>
            <button onClick={() => handleAddToCart(product._id)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;