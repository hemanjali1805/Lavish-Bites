import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import SplashScreen from './pages/SplashScreen';
import Auth from './pages/Auth';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import Cart from './pages/Cart';
import './App.css';

function AppContent() {
  const [showSplash, setShowSplash] = useState(true);
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Auth />} />
      <Route path="/category/:category" element={user ? <CategoryPage /> : <Navigate to="/" />} />
      <Route path="/cart" element={user ? <Cart /> : <Navigate to="/" />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <AppContent />
            <ToastContainer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
