import React from 'react';

const ProductCard = ({ product }) => {
  if (!product) return null;

  const { image, title, currentPrice, originalPrice, inStock, rating = 4.3, reviewCount = 1284 } = product;

  const discountPercent = originalPrice && currentPrice
    ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
    : 0;

  const formatPrice = (price) => {
    if (typeof price === 'number') return `Rs. ${price.toLocaleString('en-IN')}.00`;
    return price;
  };

  return (
    <div
      className="flex flex-col rounded-2xl overflow-hidden bg-white"
      style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)', minWidth: '220px' }}
    >
      {/* Image area — light blue background */}
      <div
        className="relative w-full flex items-center justify-center"
        style={{ backgroundColor: '#e8f0fe', aspectRatio: '1 / 1' }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-4"
          loading="lazy"
        />

        {/* Save badge — bottom left, rectangular navy */}
        {discountPercent > 0 && (
          <div
            className="absolute bottom-3 left-3 px-3 py-1 text-white text-xs font-bold"
            style={{ backgroundColor: '#1a2456', borderRadius: '4px' }}
          >
            Save {discountPercent}%
          </div>
        )}
      </div>

      {/* Info */}
      <div className="px-4 pt-3 pb-4 flex flex-col gap-1 bg-white">
        {/* Rating + reviews */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {[1,2,3,4,5].map(s => (
              <svg key={s} width="12" height="12" viewBox="0 0 24 24">
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  fill={s <= Math.floor(rating) ? '#F59E0B' : s - 0.5 <= rating ? '#F59E0B' : '#e5e7eb'}
                />
              </svg>
            ))}
          </div>
          <span className="text-xs font-semibold text-gray-800">{rating}</span>
          <span className="text-xs text-gray-400">({reviewCount.toLocaleString('en-IN')})</span>
        </div>

        {/* Original price strikethrough */}
        {originalPrice && (
          <span className="text-sm text-gray-400 line-through">
            {formatPrice(originalPrice)}
          </span>
        )}

        {/* Current price */}
        <span className="text-2xl font-bold text-gray-900 leading-tight">
          {formatPrice(currentPrice)}
        </span>

        {/* Product name */}
        <p className="text-sm text-gray-700 leading-snug line-clamp-2 mt-0.5">
          {title}
        </p>

        {/* In stock */}
        {inStock && (
          <span className="text-sm font-medium" style={{ color: '#22a55b' }}>
            In stock
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
