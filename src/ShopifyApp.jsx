import React, { useState } from 'react';
import HomePage from './HomePage';
import ShopifyProductPage from './ShopifyProductPage';

// This is a wrapper App that supports both Home and Product pages
// To use this, update your main.jsx to import ShopifyApp instead of App
function ShopifyApp() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'product'

  const handleProductClick = () => {
    setCurrentPage('product');
  };

  const handleHomeClick = () => {
    setCurrentPage('home');
  };

  return (
    <div className="w-full min-h-screen">
      {currentPage === 'home' ? (
        <HomePage onProductClick={handleProductClick} />
      ) : (
        <ShopifyProductPage onHomeClick={handleHomeClick} />
      )}
    </div>
  );
}

export default ShopifyApp;

