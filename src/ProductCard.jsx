import React, { useState } from 'react';


const ProductCard = ({ product, onClick }) => {
  const [wished, setWished] = useState(false);

  if (!product) return null;

  const { image, title, currentPrice, originalPrice, rating = 4.5, reviewCount = 1284, feature } = product;

  const discountPercent = originalPrice && currentPrice
    ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
    : 0;

  const formatPrice = (price) => `₹${Number(price).toLocaleString('en-IN')}.00`;

  return (
    <div
      className="flex flex-col rounded-2xl overflow-hidden bg-white cursor-pointer"
      style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.10)', minWidth: '200px' }}
      onClick={onClick}
    >
      {/* Image area — dark background */}
      <div className="relative w-full" style={{ backgroundColor: '#ffffff', aspectRatio: '1 / 1' }}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-3"
          loading="lazy"
        />

        {/* Top-left: discount only */}
        {discountPercent > 0 && (
          <div className="absolute top-2.5 left-2.5">
            <span
              className="text-white text-xs font-bold px-2 py-0.5 rounded"
              style={{ backgroundColor: '#22c55e' }}
            >
              {discountPercent}%
            </span>
          </div>
        )}

        {/* Top-right: heart */}
        <button
          className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow"
          onClick={(e) => { e.stopPropagation(); setWished(w => !w); }}
          aria-label="Wishlist"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={wished ? '#ef4444' : 'none'} stroke={wished ? '#ef4444' : '#888'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>

      </div>

      {/* Info */}
      <div className="px-3 pt-2.5 pb-3 flex flex-col gap-1 bg-white">
        <p className="text-gray-900 text-sm font-semibold leading-snug line-clamp-2">{title}</p>

        {/* Rating & reviews below title */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {[1,2,3,4,5].map(i => {
              const full = i <= Math.floor(rating);
              const half = !full && i === Math.ceil(rating) && rating % 1 >= 0.3;
              const clipId = `half-card-${i}`;
              return (
                <svg key={i} width="13" height="13" viewBox="0 0 24 24">
                  {half && (
                    <defs>
                      <clipPath id={clipId}>
                        <rect x="0" y="0" width="12" height="24"/>
                      </clipPath>
                    </defs>
                  )}
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#e5e7eb"/>
                  {(full || half) && <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#f59e0b" clipPath={half ? `url(#${clipId})` : undefined}/>}
                </svg>
              );
            })}
          </div>
          <span className="text-xs font-bold text-gray-800">{rating}</span>
          <span className="text-xs text-gray-400">({reviewCount.toLocaleString('en-IN')})</span>
        </div>

        <div className="flex items-center justify-between mt-1">
          <div className="flex flex-col">
            {originalPrice && (
              <span className="text-gray-400 text-xs line-through">₹{Number(originalPrice).toLocaleString('en-IN')}.00</span>
            )}
            <span className="text-gray-900 text-base font-bold">{formatPrice(currentPrice)}</span>
          </div>
          <button
            className="w-9 h-9 rounded-lg border-2 flex items-center justify-center shrink-0"
            style={{ borderColor: '#f5b800' }}
            onClick={(e) => e.stopPropagation()}
            aria-label="Add to cart"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          </button>
        </div>

        {/* Feature highlight strip */}
        {feature && (
          <div
            className="flex items-center mt-2 rounded-xl overflow-hidden"
            style={{ border: '1px solid #f0f0f0' }}
          >
            {/* Left yellow accent tab with bolt */}
            <div
              className="flex items-center justify-center px-2.5 self-stretch shrink-0"
              style={{ backgroundColor: '#f5b800' }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#000">
                <path d="M13 2L4.5 13.5H11L10 22L20.5 10H14L13 2Z"/>
              </svg>
            </div>
            {/* Feature text */}
            <span className="flex-1 text-[11px] font-semibold text-gray-800 truncate px-2.5 py-2">
              {feature}
            </span>
            {/* Rating */}
            <div
              className="flex items-center gap-1 px-2.5 py-2 shrink-0"
              style={{ borderLeft: '1px solid #f0f0f0' }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="#f59e0b">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="text-[11px] font-bold text-gray-800">{rating}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
