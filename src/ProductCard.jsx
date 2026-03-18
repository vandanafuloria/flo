import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const {
    image,
    title,
    currentPrice,
    originalPrice,
    rating = 0,
    reviewCount = 0,
    isBestseller = false,
    showQuickView = false,
  } = product;

  const discountPercent = originalPrice && currentPrice
    ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
    : 0;

  const handleCart = (e) => {
    e.stopPropagation();
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100"
      style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>

      {/* Image area */}
      <div className="relative w-full overflow-hidden bg-pink-50" style={{ aspectRatio: '1 / 1' }}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* SAVE badge – top left */}
        {discountPercent > 0 && (
          <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-white text-[10px] font-bold tracking-wide"
            style={{ backgroundColor: '#7f2065' }}>
            SAVE {discountPercent}%
          </div>
        )}

        {/* BESTSELLER badge – top right */}
        {isBestseller && (
          <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold tracking-wide"
            style={{ backgroundColor: '#FFD700', color: '#333' }}>
            BESTSELLER
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3 flex flex-col gap-2">

        {/* Rating row */}
        {reviewCount > 0 && rating > 0 && (
          <div className="flex items-center gap-1.5 text-xs">
            <svg className="w-3.5 h-3.5 text-orange-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className="font-semibold text-gray-800">{rating.toFixed(2)}</span>
            <span className="text-gray-300">|</span>
            <div className="flex items-center gap-1 text-gray-500">
              <svg className="w-3 h-3 text-blue-500 fill-current" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              {reviewCount.toLocaleString('en-IN')} Verified Reviews
            </div>
          </div>
        )}

        {/* Title */}
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 leading-snug">{title}</h3>

        {/* Price */}
        <div>
          <p className="text-base font-bold text-gray-900">
            {currentPrice === 'from' ? 'From ' : ''}₹ {typeof currentPrice === 'number' ? currentPrice.toLocaleString('en-IN') : currentPrice}
          </p>
          {originalPrice && (
            <p className="text-xs text-gray-500 mt-0.5">
              MRP: <span className="line-through">₹ {originalPrice.toLocaleString('en-IN')}</span>
              {discountPercent > 0 && (
                <span className="text-orange-500 font-semibold ml-1">({discountPercent}% OFF)</span>
              )}
            </p>
          )}
        </div>

        {/* EMI row */}
        <div className="flex items-center gap-1.5 text-xs text-gray-600 flex-wrap">
          <span>Pay ₹100 now, rest later</span>
          <button className="px-2 py-0.5 rounded text-xs font-semibold text-gray-900"
            style={{ backgroundColor: '#FFD700' }}>
            Buy on EMI
          </button>
        </div>

        {/* CTA button */}
        <button
          onClick={handleCart}
          className="w-full py-2.5 text-xs font-bold uppercase tracking-widest text-gray-900 transition-opacity hover:opacity-90 mt-1 rounded"
          style={{ backgroundColor: '#FFD700' }}
        >
          {showQuickView ? 'QUICK VIEW' : added ? '✓ ADDED' : '+ ADD TO CART'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
