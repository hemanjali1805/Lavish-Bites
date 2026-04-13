import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import './Home.css';

const Home = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const categories = [
    { name: 'Pizza', icon: '🍕' },
    { name: 'Burgers', icon: '🍔' },
    { name: 'Milkshakes', icon: '🥤' },
    { name: 'Ice Creams', icon: '🍨' }
  ];

  const handleCategoryClick = (category) => {
    navigate(`/category/${category.toLowerCase()}`);
  };

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Lavish Bites</h1>
        <nav className="top-nav">
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
      <div className="categories-grid">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="category-card"
            onClick={() => handleCategoryClick(cat.name)}
          >
            <div className="category-icon">{cat.icon}</div>
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;