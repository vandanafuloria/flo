import React, { useState, useEffect, useCallback } from 'react';
import ShopifyHeader from './ShopifyHeader';
import ShopifyFooter from './ShopifyFooter';
import AIBrandEngine from './AIBrandEngine';
import ProductCard from './ProductCard';
import SocialProofBadge from './SocialProofBadge';

// ============================================
// EDIT THESE VALUES TO CUSTOMIZE YOUR PRODUCT
// ============================================

// Product images now use external URL
import productImage1 from './assets/product/SPP_8830.jpg';
import productImage2 from './assets/product/SPP_8834.jpg';
import productImage3 from './assets/product/SPP_8844.jpg';
import pdp1 from './assets/pdp_1.png';
import pdp2 from './assets/pdp_2.png';
import pdp3 from './assets/pdp_3.png';

// Product review images from product folder
// So True — Product review images
import stP1 from './assets/So True/Product/1.png';
import stP2 from './assets/So True/Product/2.png';
import stP3 from './assets/So True/Product/3.png';
import stP4 from './assets/So True/Product/4.png';
import stP5 from './assets/So True/Product/5.png';
import stP6 from './assets/So True/Product/6.png';
import stP7 from './assets/So True/Product/7.png';
import stP8 from './assets/So True/Product/8.png';
import stP9 from './assets/So True/Product/9.png';
import stP10 from './assets/So True/Product/10.png';
import stP11 from './assets/So True/Product/11.png';
import stP12 from './assets/So True/Product/12.png';
import stP13 from './assets/So True/Product/13.png';
import stP14 from './assets/So True/Product/14.png';
import stP15 from './assets/So True/Product/15.png';
import stP16 from './assets/So True/Product/16.png';
import stP17 from './assets/So True/Product/17.png';
import stP18 from './assets/So True/Product/18.png';
import stP19 from './assets/So True/Product/19.png';
import stP20 from './assets/So True/Product/20.png';

// So True — Brand review images
import stB1 from './assets/So True/Brand/1.png';
import stB2 from './assets/So True/Brand/2.png';
import stB3 from './assets/So True/Brand/3.png';
import stB4 from './assets/So True/Brand/4.png';
import stB5 from './assets/So True/Brand/5.png';
import stB6 from './assets/So True/Brand/6.png';
import stB7 from './assets/So True/Brand/7.png';
import stB8 from './assets/So True/Brand/8.png';
import stB9 from './assets/So True/Brand/9.png';
import stB10 from './assets/So True/Brand/10.png';
import stB11 from './assets/So True/Brand/11.png';
import stB12 from './assets/So True/Brand/12.png';
import stB13 from './assets/So True/Brand/13.png';
import stB14 from './assets/So True/Brand/14.png';
import stB15 from './assets/So True/Brand/15.png';
import stB16 from './assets/So True/Brand/16.png';
import stB17 from './assets/So True/Brand/17.png';
import stB18 from './assets/So True/Brand/18.png';
import stB19 from './assets/So True/Brand/19.png';
import stB20 from './assets/So True/Brand/20.png';

import reviewData from '../review.json';

// Image arrays for review cycling
const ST_PRODUCT_IMGS = [
  stP1, stP2, stP3, stP4, stP5, stP6, stP7, stP8, stP9, stP10,
  stP11, stP12, stP13, stP14, stP15, stP16, stP17, stP18, stP19, stP20,
];
const ST_BRAND_IMGS = [
  stB1, stB2, stB3, stB4, stB5, stB6, stB7, stB8, stB9, stB10,
  stB11, stB12, stB13, stB14, stB15, stB16, stB17, stB18, stB19, stB20,
];

function getReviewTitle(text) {
  const first = text.split(/[.!,]/)[0].trim();
  return first.length > 5 ? first : text.substring(0, 50);
}

// Import store images
import storeImage1 from './assets/store.png';
import storeImage2 from './assets/store2.png';
import storeImage3 from './assets/store3.png';
import storeImage4 from './assets/store5.png';

// Brand Name
const BRAND_NAME = "wordofmouth";

// Product Images Array - All product images
const PRODUCT_IMAGES = [
  "https://www.sotrue.in/cdn/shop/files/1_7_5a7c7fbe-f6e3-4603-8cfd-2ef6482ace8a.jpg?v=1762521956&width=1000",
];

// Product Video
const PRODUCT_VIDEO = 'https://www.sotrue.in/cdn/shop/files/quinn_k2kbh4h0kkk9dmhkiv4y16kb.mp4#t=0.1';

// Product Details
const PRODUCT_NAME = "3-in-1 Illuminating Strobe Cream Combo | Pack of 3";
const PRODUCT_PRICE = 299;
const PRODUCT_ORIGINAL_PRICE = 599;
const PRODUCT_DISCOUNT = 50;
const PRODUCT_SKU = "DS-KOHL-001";
const PRODUCT_DESCRIPTION = "Intensely pigmented 3-in-1 waterproof kohl pencil — define, line, and smudge with ease. Long-lasting 24-hour wear formula with a smooth, creamy texture. Comes with a precision sharpener for the perfect line every time.";
const PRODUCT_COLORS = [
  { name: "Black", value: "#1a1a1a" },
];
const PRODUCT_SIZES = ["One Size"];

// You May Also Like Products Data
const RELATED_PRODUCTS = [
  {
    id: 1,
    name: "Brown Collarless Checkered Shirt",
    image: "https://somashop.com/_next/image?url=https%3A%2F%2Fapi.somashop.com%2Fassets%2Fuploads%2Fmedia%2F_DSC8004.webp&w=640&q=75",
    price: 7999,
    originalPrice: 8499,
    rating: 4.5,
    reviews: 156
  },
  {
    id: 2,
    name: "Indigo Style Tunic",
    image: "https://somashop.com/_next/image?url=https%3A%2F%2Fapi.somashop.com%2Fassets%2Fuploads%2Fmedia%2F_AR73374.webp&w=640&q=75",
    price: 6799,
    originalPrice: 7299,
    rating: 4.7,
    reviews: 189
  },
  {
    id: 3,
    name: "Box Pleat Dress Beige",
    image: "https://somashop.com/_next/image?url=https%3A%2F%2Fapi.somashop.com%2Fassets%2Fuploads%2Fmedia%2F_DSC8160.webp&w=640&q=75",
    price: 5899,
    originalPrice: 6399,
    rating: 4.3,
    reviews: 142
  },
  {
    id: 4,
    name: "Box Pleat Blue Twill Dress",
    image: "https://api.somashop.com/assets/uploads/media/_DSC8033.webp",
    price: 6299,
    originalPrice: 6799,
    rating: 4.6,
    reviews: 178
  }
];

// Best Seller Products data
const BS_IMG_1 = 'https://www.sotrue.in/cdn/shop/files/1_7_5a7c7fbe-f6e3-4603-8cfd-2ef6482ace8a.jpg?v=1762521956&width=1000';
const BS_IMG_2 = 'https://www.sotrue.in/cdn/shop/files/01_4d8982c5-510a-4955-8a84-8120184cc312.jpg?v=1770280818&width=1000';
const BS_IMG_3 = 'https://www.sotrue.in/cdn/shop/files/1_1.jpg?v=1756733352&width=1000';
const BS_IMG_4 = 'https://www.sotrue.in/cdn/shop/files/foxnut_2.jpg?v=1765440399&width=1000';

const bestSellerProducts = [
  {
    id: 1,
    image: BS_IMG_1,
    title: 'Illuminating Strobe Cream Combo | Pack of 2',
    currentPrice: 489,
    originalPrice: 698,
    rating: 4.66,
    reviewCount: 1296,
    isBestseller: true,
    showQuickView: true,
  },
  {
    id: 2,
    image: BS_IMG_2,
    title: 'Dark Spell Kohl Kajal Pencil | Intense Jet Black',
    currentPrice: 299,
    originalPrice: 349,
    rating: 4.78,
    reviewCount: 186,
    showQuickView: true,
  },
  {
    id: 3,
    image: BS_IMG_3,
    title: 'Daily Strobe Cream with SPF 50+ | Rose Gold',
    currentPrice: 399,
    originalPrice: 499,
    rating: 4.57,
    reviewCount: 134,
  },
  {
    id: 4,
    image: BS_IMG_4,
    title: 'Prep & Glow Combo | Primer + Strobe Cream (Pink)',
    currentPrice: 499,
    originalPrice: 748,
    rating: 4.71,
    reviewCount: 59,
  },
  {
    id: 5,
    image: BS_IMG_1,
    title: 'Illuminating Strobe Cream Combo | Pack of 2',
    currentPrice: 489,
    originalPrice: 698,
    rating: 4.66,
    reviewCount: 1296,
    isBestseller: true,
    showQuickView: true,
  },
  {
    id: 6,
    image: BS_IMG_2,
    title: 'Dark Spell Kohl Kajal Pencil | Intense Jet Black',
    currentPrice: 299,
    originalPrice: 349,
    rating: 4.78,
    reviewCount: 186,
    showQuickView: true,
  },
  {
    id: 7,
    image: BS_IMG_3,
    title: 'Daily Strobe Cream with SPF 50+ | Rose Gold',
    currentPrice: 399,
    originalPrice: 499,
    rating: 4.57,
    reviewCount: 134,
  },
  {
    id: 8,
    image: BS_IMG_4,
    title: 'Prep & Glow Combo | Primer + Strobe Cream (Pink)',
    currentPrice: 499,
    originalPrice: 748,
    rating: 4.71,
    reviewCount: 59,
  },
];

// ============================================
// END OF EDITABLE SECTION
// ============================================

// Dummy review templates (mix of positive and negative) for images without reviews
const dummyReviews = [
  {
    name: 'Priya Sharma',
    rating: 5,
    title: 'Absolutely stunning!',
    text: 'This kurta set is absolutely beautiful! The fabric quality is excellent and the fit is perfect. The embroidery work is so detailed and elegant. I received so many compliments when I wore it. Highly recommended!',
    date: '1/20/2025',
    type: 'product'
  },
  {
    name: 'Anjali Mehta',
    rating: 4,
    title: 'Great quality, minor sizing issue',
    text: 'The kurta is well-made with good fabric quality. The design is elegant and the color is vibrant. However, the sizing runs slightly small, so I would suggest ordering one size up. Overall, a good purchase!',
    date: '1/18/2025',
    type: 'product'
  },
  {
    name: 'Riya Patel',
    rating: 5,
    title: 'Perfect for special occasions',
    text: 'I bought this for a wedding and it was perfect! The fabric is premium quality, very comfortable to wear all day. The design is elegant and the fit is flattering. Worth every penny!',
    date: '1/15/2025',
    type: 'product'
  },
  {
    name: 'Kavya Reddy',
    rating: 3,
    title: 'Decent but could be better',
    text: 'The kurta is okay but not exceptional. The fabric quality is decent but the stitching could be better. The color is nice but doesn\'t match the images exactly. It\'s wearable but not outstanding.',
    date: '1/12/2025',
    type: 'product'
  },
  {
    name: 'Meera Singh',
    rating: 5,
    title: 'Exceeded my expectations!',
    text: 'I was pleasantly surprised by the quality of this kurta set. The fabric is soft, the design is beautiful, and the fit is perfect. The dupatta is elegant and adds to the overall look. Very satisfied with my purchase!',
    date: '1/10/2025',
    type: 'product'
  },
  {
    name: 'Sneha Verma',
    rating: 2,
    title: 'Not satisfied with the quality',
    text: 'The kurta didn\'t meet my expectations. The fabric feels cheap and the stitching is not up to the mark. The color faded after first wash. Would not recommend this product.',
    date: '1/08/2025',
    type: 'product'
  },
  {
    name: 'Divya Nair',
    rating: 4,
    title: 'Good value for money',
    text: 'This kurta set offers good value for the price. The fabric is comfortable and the design is trendy. The fit is decent though it could be better. Overall, a satisfactory purchase for the price point.',
    date: '1/05/2025',
    type: 'product'
  },
  {
    name: 'Pooja Mehta',
    rating: 5,
    title: 'Love it! Perfect fit and quality',
    text: 'This is one of the best kurtas I\'ve purchased online. The quality is excellent, the fit is perfect, and the design is so elegant. I\'ve already ordered another one in a different color!',
    date: '1/03/2025',
    type: 'product'
  },
  {
    name: 'Neha Kapoor',
    rating: 3,
    title: 'Average product',
    text: 'The kurta is average quality. Nothing exceptional about it. The fabric is okay, the fit is decent, but the design is quite common. It\'s wearable but nothing special.',
    date: '12/30/2024',
    type: 'product'
  },
  {
    name: 'Aarti Desai',
    rating: 5,
    title: 'Beautiful and comfortable',
    text: 'I absolutely love this kurta! It\'s so comfortable to wear and the design is beautiful. The fabric quality is great and it looks elegant. Perfect for both casual and formal occasions.',
    date: '12/28/2024',
    type: 'product'
  }
];

const ShopifyProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('S');
  const [quantity, setQuantity] = useState(1);
  const [isAISummaryExpanded, setIsAISummaryExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModalImageIndex, setSelectedModalImageIndex] = useState(0);
  const [selectedReview, setSelectedReview] = useState(null);
  const [isGridModalOpen, setIsGridModalOpen] = useState(false);
  const [gridModalImages, setGridModalImages] = useState([]);
  const [gridModalReview, setGridModalReview] = useState(null);
  const [activeTab, setActiveTab] = useState('product');
  const [reviewsToShow, setReviewsToShow] = useState(3);
  const [brandReviewsToShow, setBrandReviewsToShow] = useState(3);
  const [isBrandAISummaryExpanded, setIsBrandAISummaryExpanded] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);
  const [storeView, setStoreView] = useState('store-visit');
  const [reviewLikes, setReviewLikes] = useState({});
  const [reviewReplies, setReviewReplies] = useState({});
  const [expandedReviews, setExpandedReviews] = useState({});
  const [productSortBy, setProductSortBy] = useState('most-recent');
  const [brandSortBy, setBrandSortBy] = useState('most-recent');
  const [showInstagramModal, setShowInstagramModal] = useState(false);
  const [instagramLoading, setInstagramLoading] = useState(true);
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [showVideoCard, setShowVideoCard] = useState(true);
  const dragCardRef = React.useRef(null);
  const dragOffset = React.useRef({ x: 0, y: 0 });
  const dragPos = React.useRef({ x: null, y: null });
  const dragVideoRef = React.useRef(null);

  // Set initial position of drag card to bottom-right corner
  useEffect(() => {
    if (dragCardRef.current) {
      const card = dragCardRef.current;
      const x = window.innerWidth - card.offsetWidth - 16;
      const y = window.innerHeight - card.offsetHeight - 16;
      card.style.left = `${x}px`;
      card.style.top = `${y}px`;
      dragPos.current = { x, y };
    }
    if (dragVideoRef.current) {
      dragVideoRef.current.muted = true;
      dragVideoRef.current.play().catch(() => {});
    }
  }, [showVideoCard]);

  // Instagram post URLs
  const instagramPosts = [
    'https://www.instagram.com/p/DVvm6AokmlE/',
    'https://www.instagram.com/p/DV0wEh-Em8E/',
    'https://www.instagram.com/p/DVa_W9DE1DT/',
    'https://www.instagram.com/p/DVnDGUSzPd1/',
    'https://www.instagram.com/p/DT2k8G2iWzC/',
    'https://www.instagram.com/p/DRj6CdPjJFI/',
    'https://www.instagram.com/reel/DUVe7ZHCU7z/',
    'https://www.instagram.com/p/DV_uRIsk1MQ/',
  ];

  // Store locations data
  const storeLocations = [
    {
      id: 'store-1',
      name: 'Fashion Boutique – Downtown',
      address: '123 Fashion Street, Downtown District',
      hours: '10:00 AM – 9:00 PM',
      image: storeImage1,
      phone: '+1 (555) 123-4567'
    },
    {
      id: 'store-2',
      name: 'Style Hub – Shopping Plaza',
      address: '456 Style Avenue, Shopping Plaza',
      hours: '11:00 AM – 8:30 PM',
      image: storeImage2,
      phone: '+1 (555) 234-5678'
    },
    {
      id: 'store-3',
      name: 'Design Studio – Retail Center',
      address: '789 Design Boulevard, Retail Center',
      hours: '10:30 AM – 9:30 PM',
      image: storeImage3,
      phone: '+1 (555) 345-6789'
    },
    {
      id: 'store-4',
      name: 'Collection Store – Market Square',
      address: '321 Collection Way, Market Square',
      hours: '11:00 AM – 9:00 PM',
      image: storeImage4,
      phone: '+1 (555) 456-7890'
    }
  ];

  const storeTabOptions = [
    { value: 'in-store', label: 'In Store' },
    { value: 'store-visit', label: 'Store Visit' }
  ];

  // Store visits data (using placeholder for now - can be updated with actual images)
  const storeVisits = [
    {
      id: 'visit-1',
      image: storeImage1,
      caption: 'Customer feedback at our store',
      badge: '@wordofmouth'
    },
    {
      id: 'visit-2',
      image: storeImage2,
      caption: 'Festive look haul from our store',
      badge: '@wordofmouth'
    },
    {
      id: 'visit-3',
      image: storeImage3,
      caption: 'Client reviews live from the store',
      badge: '@wordofmouth'
    },
    {
      id: 'visit-4',
      image: storeImage4,
      caption: 'Happy customers at our store',
      badge: '@wordofmouth'
    }
  ];

  // Load Instagram embed script
  useEffect(() => {
    const scriptId = 'instagram-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Process embeds when modal opens
  useEffect(() => {
    if (!showInstagramModal) return;
    
    // Set loading state asynchronously to avoid linter warning
    setTimeout(() => setInstagramLoading(true), 0);
    
      const processEmbeds = () => {
        if (window.instgrm && window.instgrm.Embeds) {
          window.instgrm.Embeds.process();
        // Hide loading after embeds are processed
        setTimeout(() => {
          setInstagramLoading(false);
        }, 2000);
        }
      };
      
    // Process embeds with delays to ensure DOM is ready
    const timers = [
      setTimeout(processEmbeds, 500),
      setTimeout(processEmbeds, 1500),
      setTimeout(processEmbeds, 2500)
    ];

    // Fallback: hide loading after max wait time
    const fallbackTimer = setTimeout(() => {
      setInstagramLoading(false);
    }, 5000);

      return () => {
      timers.forEach(timer => clearTimeout(timer));
      clearTimeout(fallbackTimer);
      };
  }, [showInstagramModal]);

  
  // Product images - using images from assets/product folder
  const productImages = PRODUCT_IMAGES;

  // Customer review images - Using So True Product folder images
  const customerReviewImages = [
    stP1, stP2, stP3, stP4, stP5, stP6, stP7, stP8, stP9, stP10,
    stP11, stP12, stP13, stP14, stP15, stP16, stP17, stP18, stP19, stP20,
    stP1, stP2, stP3, stP4, stP5, stP6, stP7, stP8, stP9, stP10,
    stP11, stP12, stP13, stP14, stP15, stP16, stP17, stP18, stP19, stP20,
  ];

  // All review images (product + brand) for modal navigation
  const allReviewImages = [
    ...customerReviewImages,
    stB1, stB2, stB3, stB4, stB5, stB6, stB7, stB8, stB9, stB10,
    stB11, stB12, stB13, stB14, stB15, stB16, stB17, stB18, stB19, stB20,
  ];

  // Short reviews for carousel widget — from very_small + small entries in review.json
  const shortReviewMinutes = [10, 360, 1440, 5760, 30, 120, 2880, 720, 180, 4320, 60, 240, 480, 1200, 3600];
  const shortReviews = reviewData
    .filter(r => r.type === 'very_small' || r.type === 'small')
    .map((r, i) => ({
      id: `sr${i + 1}`,
      name: r.name,
      minutesAgo: shortReviewMinutes[i % shortReviewMinutes.length],
      text: r.review,
      verified: true,
    }));

  // Product Reviews — from 'large' type entries in review.json
  const productReviewDates = ['8/19/2025', '2/03/2025', '7/20/2025', '10/11/2024', '4/20/2025', '12/15/2024', '3/15/2025'];
  const reviews = reviewData
    .filter(r => r.type === 'large')
    .map((r, i) => ({
      id: i + 1,
      name: r.name,
      location: r.location,
      date: productReviewDates[i] || '1/01/2025',
      rating: r.rating,
      title: getReviewTitle(r.review),
      text: r.review,
      images: [ST_PRODUCT_IMGS[(i * 2) % 20], ST_PRODUCT_IMGS[(i * 2 + 1) % 20]],
    }));

  // Brand Reviews — from 'mid' type entries in review.json
  const brandReviewDates = ['1/12/2025', '1/08/2025', '1/05/2025', '12/30/2024', '12/25/2024', '12/20/2024', '12/15/2024', '12/10/2024'];
  const brandReviews = reviewData
    .filter(r => r.type === 'mid')
    .map((r, i) => ({
      id: `b${i + 1}`,
      name: r.name,
      location: r.location,
      date: brandReviewDates[i] || '1/01/2025',
      rating: r.rating,
      title: getReviewTitle(r.review),
      text: r.review,
      images: [ST_BRAND_IMGS[(i * 2) % 20], ST_BRAND_IMGS[(i * 2 + 1) % 20]],
    }));

  // Handle like functionality
  const handleLike = (reviewId, type = 'product') => {
    const key = `${type}-${reviewId}`;
    setReviewLikes(prev => ({
      ...prev,
      [key]: (prev[key] || 0) + 1
    }));
  };

  // Handle reply functionality
  const handleReply = (reviewId, type = 'product') => {
    const key = `${type}-${reviewId}`;
    setReviewReplies(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleReadMore = (reviewId, type = 'product') => {
    const key = `${type}-${reviewId}`;
    setExpandedReviews(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Convert date to "X days ago" format
  const getDaysAgo = (dateString) => {
    const [month, day, year] = dateString.split('/').map(Number);
    const reviewDate = new Date(year, month - 1, day);
    const today = new Date();
    const diffTime = today - reviewDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 14) return '1 week ago';
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 60) return '1 month ago';
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} year${Math.floor(diffDays / 365) > 1 ? 's' : ''} ago`;
  };

  // Convert date to relative time format (minutes/hours/days ago)
  const getRelativeTime = (minutesAgo) => {
    if (minutesAgo < 60) {
      return `${minutesAgo} ${minutesAgo === 1 ? 'min' : 'mins'} ago`;
    } else if (minutesAgo < 1440) {
      const hours = Math.floor(minutesAgo / 60);
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else {
      const days = Math.floor(minutesAgo / 1440);
      return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    }
  };

  // Find which review an image belongs to, or create a dummy review
  const findReviewForImage = useCallback((imageSrc) => {
    // Check product reviews
    for (const review of reviews) {
      if (review.images && review.images.includes(imageSrc)) {
        return { ...review, type: 'product' };
      }
    }
    // Check brand reviews
    for (const review of brandReviews) {
      if (review.images && review.images.includes(imageSrc)) {
        return { ...review, type: 'brand' };
      }
    }
    // If no review found, create a dummy review based on image index
    const imageIndex = allReviewImages.indexOf(imageSrc);
    if (imageIndex !== -1) {
      const dummyIndex = imageIndex % dummyReviews.length;
      return { ...dummyReviews[dummyIndex], id: `dummy-${imageIndex}` };
    }
    return null;
  }, [reviews, brandReviews, allReviewImages]);

  // Handle image click to open modal
  const handleImageClick = (index) => {
    setSelectedModalImageIndex(index);
    const imageSrc = allReviewImages[index];
    const review = findReviewForImage(imageSrc);
    setSelectedReview(review);
    setIsModalOpen(true);
  };

  // Handle modal navigation
  const handlePrevious = () => {
    setSelectedModalImageIndex((prev) => {
      const newIndex = prev === 0 ? allReviewImages.length - 1 : prev - 1;
      const imageSrc = allReviewImages[newIndex];
      const review = findReviewForImage(imageSrc);
      setSelectedReview(review);
      return newIndex;
    });
  };

  const handleNext = () => {
    setSelectedModalImageIndex((prev) => {
      const newIndex = prev === allReviewImages.length - 1 ? 0 : prev + 1;
      const imageSrc = allReviewImages[newIndex];
      const review = findReviewForImage(imageSrc);
      setSelectedReview(review);
      return newIndex;
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedReview(null);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      
      if (e.key === 'Escape') {
        handleCloseModal();
      } else if (e.key === 'ArrowLeft') {
        setSelectedModalImageIndex((prev) => {
          const newIndex = prev === 0 ? allReviewImages.length - 1 : prev - 1;
          const imageSrc = allReviewImages[newIndex];
          const review = findReviewForImage(imageSrc);
          setSelectedReview(review);
          return newIndex;
        });
      } else if (e.key === 'ArrowRight') {
        setSelectedModalImageIndex((prev) => {
          const newIndex = prev === allReviewImages.length - 1 ? 0 : prev + 1;
          const imageSrc = allReviewImages[newIndex];
          const review = findReviewForImage(imageSrc);
          setSelectedReview(review);
          return newIndex;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, allReviewImages, findReviewForImage]);

  // Auto-rotate reviews carousel every 3 seconds
  useEffect(() => {
    if (shortReviews.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % shortReviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [shortReviews.length]);

  // Social proof carousel data
  const [socialProofIndex, setSocialProofIndex] = useState(0);
  const [showCarousel, setShowCarousel] = useState(true);
  const socialProofItems = [
    {
      type: 'bought',
      name: 'Pooja',
      action: 'bought this dress',
      time: 'Just now',
      image: productImage1
    },
    {
      type: 'review',
      name: 'Neha',
      action: 'gave the review',
      time: '30 min ago',
      image: productImage2
    },
    {
      type: 'viewed',
      name: 'Priya',
      action: 'recently viewed',
      time: '1 hour ago',
      image: productImage3
    }
  ];

  // Auto-rotate social proof carousel
  useEffect(() => {
    if (!showCarousel) return;
    
    const interval = setInterval(() => {
      setSocialProofIndex((prev) => {
        const nextIndex = (prev + 1) % socialProofItems.length;
        // If we've shown the last item and are about to cycle back to first, hide carousel
        if (prev === socialProofItems.length - 1) {
          setShowCarousel(false);
          // Show again after 3 seconds
          setTimeout(() => {
            setShowCarousel(true);
            setSocialProofIndex(0);
          }, 3000);
          return prev; // Keep showing last item until hidden
        }
        return nextIndex;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [showCarousel, socialProofItems.length]);

  const SocialProofCarousel = () => (
    showCarousel ? (
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-3 flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
          <img 
            src={socialProofItems[socialProofIndex].image} 
            alt="Product" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900">
            <span className="font-semibold text-[#A71499]">{socialProofItems[socialProofIndex].name}</span> {socialProofItems[socialProofIndex].action}
          </p>
          <p className="text-xs text-gray-500 mt-0.5">{socialProofItems[socialProofIndex].time}</p>
        </div>
      </div>
    ) : null
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 relative">
      <ShopifyHeader brandName={BRAND_NAME} />
      
      {/* Product Video - Draggable floating card */}
      {showVideoCard && (
        <div
          ref={dragCardRef}
          className="fixed z-50 select-none"
          style={{
            width: '150px',
            touchAction: 'none',
            userSelect: 'none',
            cursor: 'grab',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
            overflow: 'hidden',
            background: '#000',
          }}
          onPointerDown={(e) => {
            if (e.target.closest('.close-btn')) return;
            e.currentTarget.setPointerCapture(e.pointerId);
            e.currentTarget.style.cursor = 'grabbing';
            const rect = e.currentTarget.getBoundingClientRect();
            dragOffset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
            dragOffset.current.startX = e.clientX;
            dragOffset.current.startY = e.clientY;
            dragOffset.current.moved = false;
          }}
          onPointerMove={(e) => {
            if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
            const dx = Math.abs(e.clientX - dragOffset.current.startX);
            const dy = Math.abs(e.clientY - dragOffset.current.startY);
            if (dx > 5 || dy > 5) dragOffset.current.moved = true;
            const card = e.currentTarget;
            const x = Math.max(0, Math.min(window.innerWidth - card.offsetWidth, e.clientX - dragOffset.current.x));
            const y = Math.max(0, Math.min(window.innerHeight - card.offsetHeight, e.clientY - dragOffset.current.y));
            card.style.left = `${x}px`;
            card.style.top = `${y}px`;
          }}
          onPointerUp={(e) => {
            e.currentTarget.releasePointerCapture(e.pointerId);
            e.currentTarget.style.cursor = 'grab';
            if (!dragOffset.current.moved && !e.target.closest('.close-btn')) {
              setSelectedVideo(PRODUCT_VIDEO);
            }
          }}
        >
          {/* Close button */}
          <button
            className="close-btn absolute top-2 right-2 z-20 w-7 h-7 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white"
            onClick={(e) => { e.stopPropagation(); setShowVideoCard(false); }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Video */}
          <video
            ref={dragVideoRef}
            src={PRODUCT_VIDEO}
            style={{ width: '150px', height: '225px', objectFit: 'cover', display: 'block', pointerEvents: 'none' }}
            loop
            muted
            autoPlay
            playsInline
            preload="auto"
          />
        </div>
      )}
      
      <main className="flex-1 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Product Images Section - Grid Layout for Laptop */}
            <div className="w-full max-w-2xl mx-auto">
              {/* Main Product Image */}
              <div className="relative bg-white rounded-2xl overflow-hidden mb-6 group">
                <div className="aspect-square flex items-center justify-center p-8">
                  <img 
                    src={productImages[selectedImage] || productImages[0]} 
                    alt={PRODUCT_NAME}
                    className="w-full h-full object-contain cursor-zoom-in transition-transform group-hover:scale-105"
                  />
                  
                  {/* Zoom Icon */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                  
                  {/* Save Badge */}
                  <div className="absolute top-4 left-4 bg-[#A71499] text-white text-sm font-semibold px-3 py-1 rounded-lg">
                    SAVE 50%
                  </div>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-3 justify-center overflow-x-auto pb-2">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    className={`w-16 h-16 md:w-20 md:h-20 shrink-0 border-2 rounded-lg overflow-hidden cursor-pointer transition-all bg-white ${
                      selectedImage === index 
                        ? 'border-gray-900 shadow-lg ring-2 ring-gray-900/20' 
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={img} 
                      alt={`${PRODUCT_NAME} view ${index + 1}`}
                      className="w-full h-full object-contain p-1"
                    />
                  </button>
                ))}
              </div>
            </div>


            {/* Product Details Section */}
            <div className="flex flex-col gap-4">
              {/* SKU */}
              <div className="text-sm text-gray-600">
                SKU: {PRODUCT_SKU}
              </div>

              {/* Product Title */}
              <h1 className="text-2xl md:text-3xl font-normal leading-tight text-gray-900">
                {PRODUCT_NAME}
              </h1>
              
              {/* Social Proof Badge */}
              <div className="my-4">
                <SocialProofBadge rating={4.5} reviewCount={124} soldThisWeek={235} />
              </div>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2 md:gap-2.5 mb-4 md:mb-5">
                {[
                  { text: 'Perfect Fit' },
                  { text: 'Premium Quality Fabric' },
                  { text: 'Elegant Design' },
                  { text: 'Comfortable Wear' }
                ].map((benefit, index) => (
                  <span key={index} className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-normal" style={{ backgroundColor: 'rgba(167,20,153,0.08)', color: '#A71499', border: '1px solid rgba(167,20,153,0.2)' }}>
                    <svg className="w-2.5 h-2.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit.text}
                  </span>
                ))}
              </div>
              
              {/* Pricing Section */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-lg md:text-xl text-gray-500 line-through">
                    Rs. {PRODUCT_ORIGINAL_PRICE.toLocaleString('en-IN')}.00
                  </span>
                  <span className="text-2xl md:text-3xl font-semibold text-gray-900">
                    Rs. {PRODUCT_PRICE.toLocaleString('en-IN')}.00
                  </span>
                  <span className="px-2 py-1 bg-green-600 text-white text-sm font-semibold rounded">
                    {PRODUCT_DISCOUNT}% off
                  </span>
                </div>
                
                {/* Payment Options */}
                <div className="flex flex-col gap-1 text-sm text-gray-700">
                  <p>or 3 Monthly Payments of Rs.{Math.round(PRODUCT_PRICE / 3).toLocaleString('en-IN')}</p>
                  <p>0% EMI on UPI • snapmint Buy on EMI</p>
                </div>
              </div>

              {/* Size Selection */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-900">Size:</span>
                  <span className="text-sm text-gray-700">{selectedSize || 'S'}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {PRODUCT_SIZES.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-sm font-medium border-2 rounded transition-all ${
                        (selectedSize || 'S') === size
                          ? 'border-[#A71499] bg-[#fdf0fc] text-[#A71499]'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-900">Quantity</span>
                <div className="flex items-center gap-2 border border-gray-300 rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-gray-900 font-medium min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Size Chart Link */}
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <button className="text-sm text-gray-700 hover:text-gray-900 transition-colors underline">
                  Size Chart
                </button>
              </div>

              {/* Recent Reviews Carousel - Compact Pill */}
              {shortReviews.length > 0 && (
                <div className="border rounded-full px-3 py-2 mb-4 relative overflow-hidden inline-block max-w-md" style={{ backgroundColor: 'rgba(167, 20, 153, 0.06)', borderColor: 'rgba(167, 20, 153, 0.2)' }}>
                  <div className="relative min-h-[40px] flex items-center">
                    {shortReviews.map((review, index) => (
                      <div
                        key={review.id}
                        className={`absolute inset-0 transition-all duration-500 ease-in-out flex items-center ${
                          index === currentReviewIndex
                            ? 'opacity-100 translate-x-0'
                            : index < currentReviewIndex
                            ? 'opacity-0 -translate-x-full'
                            : 'opacity-0 translate-x-full'
                        }`}
                      >
                        <div className="flex items-center gap-2 w-full">
                          {/* Comment Icon */}
                          <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(167, 20, 153, 0.1)' }}>
                            <svg className="w-7 h-7" fill="#A71499" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-semibold text-gray-900 truncate">{review.name}</span>
                          {review.verified && (
                                <svg className="w-3 h-3 text-blue-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          )}
                              <span className="text-[10px] text-gray-500 ml-auto shrink-0">{getRelativeTime(review.minutesAgo)}</span>
                        </div>
                            <p className="text-xs text-gray-700 leading-tight line-clamp-1 mt-0.5">{review.text}</p>
                          </div>
                      </div>
                    </div>
                  ))}
                </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <button className="w-full py-3 px-6 bg-black text-white rounded font-semibold text-sm uppercase hover:bg-gray-800 transition-colors">
                  ADD TO BAG
                </button>
                <button className="w-full py-3 px-6 bg-black text-white rounded font-semibold text-sm uppercase hover:bg-gray-800 transition-colors">
                  BUY IT NOW
                </button>
              </div>

              {/* Promotional Banner */}
              <div className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium text-center">
                Get Additional 5% discount
              </div>

              {/* Collapsible Shipping Information */}
              <div className="border-t border-gray-200 pt-4">
                <button
                  onClick={() => setIsShippingOpen(!isShippingOpen)}
                  className="w-full flex items-center justify-between py-3 text-sm font-semibold text-gray-900 hover:text-gray-700 transition-colors"
                >
                  <span>SHIPPING INFORMATION</span>
                  <svg 
                    className={`w-5 h-5 transition-transform ${isShippingOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isShippingOpen && (
                  <div className="pb-4 text-sm text-gray-600">
                    <p>All products are ready to ship and are shipped within 24-48 hours. Free international shipping available for orders above Rs 20,000.</p>
                  </div>
                )}
              </div>

              {/* Collapsible Description */}
              <div className="border-t border-gray-200 pt-4">
                <button
                  onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                  className="w-full flex items-center justify-between py-3 text-sm font-semibold text-gray-900 hover:text-gray-700 transition-colors"
                >
                  <span>DESCRIPTION</span>
                  <svg 
                    className={`w-5 h-5 transition-transform ${isDescriptionOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isDescriptionOpen && (
                  <div className="pb-4 text-sm text-gray-600">
                    <p>{PRODUCT_DESCRIPTION}</p>
                  </div>
                )}
              </div>


              {/* Social Sharing */}
              <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
                <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Share</span>
                </button>
                <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482c0 .39.045.765.127 1.124C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  <span>Tweet</span>
                </button>
                <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.487.535 6.624 0 11.99-5.367 11.99-11.987C23.97 5.39 18.592.026 12.017.026L12.017 0z"/>
                  </svg>
                  <span>Pin it</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* PDP Banner Images */}
      <div className="w-full bg-white">
        <img src={pdp1} alt="" className="w-full block" />
        <img src={pdp2} alt="" className="w-full block" />
        <img src={pdp3} alt="" className="w-full block" />
      </div>

      {/* Reviews Section - WOM Style */}
      <div id="reviews-section" className="bg-white w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-normal text-gray-800">Customer Reviews</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left Side - Rating Breakdown */}
            <div className="lg:col-span-1 mt-[100px] mb-[100px] lg:mb-[200px]">
              <div className="relative lg:sticky lg:top-[145px]" style={{ maxHeight: 'calc(-300px + 100vh)' }}>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  {/* Rating Score Card */}
                  <div className="text-center mb-6">
                    <div 
                      className="w-32 h-32 rounded-full flex items-center justify-center mb-4 relative mx-auto"
                      style={{
                        background: `conic-gradient(from 225deg, #A71499 0%, #A71499 65%, rgba(167, 20, 153, 0.18) 65%)`,
                        boxShadow: `0 18px 35px rgba(167, 20, 153, 0.18)`
                      }}
                    >
                      <div 
                        className="absolute inset-2 rounded-full flex items-center justify-center"
                        style={{
                          background: '#ffffff',
                          boxShadow: 'inset 0 1px 4px rgba(255, 255, 255, 0.6)'
                        }}
                      >
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-semibold" style={{ color: '#8B6F5E' }}>4.8</span>
                          <span className="text-lg font-medium" style={{ color: '#A6897A' }}>/5</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, index) => (
                        <svg 
                          key={index} 
                          className="w-5 h-5" 
                          style={{ 
                            fill: '#A71499',
                            filter: 'drop-shadow(0 1px 2px rgba(167, 20, 153, 0.3))'
                          }} 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Based on <strong>147</strong> verified reviews
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border" style={{ backgroundColor: 'rgba(167, 20, 153, 0.1)', color: '#A71499', borderColor: 'rgba(167, 20, 153, 0.3)' }}>
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>93% would buy again</span>
                    </div>
                  </div>

                  {/* Rating Distribution */}
                  <div className="space-y-3 mb-6">
                    {[
                      { stars: 5, percent: 75 },
                      { stars: 4, percent: 17 },
                      { stars: 3, percent: 5 },
                      { stars: 2, percent: 2 },
                      { stars: 1, percent: 1 },
                    ].map((item) => (
                      <div key={item.stars} className="flex items-center gap-2 sm:gap-3">
                        <div className="flex items-center gap-1 text-xs text-gray-600 w-8 flex-shrink-0">
                          <svg className="w-3 h-3" style={{ color: '#A71499' }} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span>{item.stars}</span>
                        </div>
                        <div className="flex-1 min-w-0 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-300"
                            style={{ 
                              width: `${item.percent}%`,
                              minWidth: '2px',
                              backgroundColor: '#A71499'
                            }}
                          />
                        </div>
                        <span className="text-xs text-gray-600 w-8 flex-shrink-0 text-right">{item.percent}%</span>
                      </div>
                    ))}
                  </div>

                  {/* Rating Highlights */}
                  <div className="space-y-3">
                    {[
                      { 
                        icon: (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        ), 
                        label: 'Would recommend', 
                        value: '93%' 
                      },
                      { 
                        icon: (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ), 
                        label: 'Love the perfect fit', 
                        value: '9/10' 
                      },
                      { 
                        icon: (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.69c-2.5 0-4.5 2-4.5 4.5 0 1.5.7 2.8 1.7 3.7L12 18l2.8-7.1c1-0.9 1.7-2.2 1.7-3.7 0-2.5-2-4.5-4.5-4.5z" />
                          </svg>
                        ), 
                        label: 'Say fabric quality is excellent', 
                        value: '92%' 
                      },
                    ].map((stat, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white" style={{ color: '#A71499' }}>
                          {stat.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm text-gray-900">{stat.value}</div>
                          <div className="text-xs text-gray-600">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Reviews */}
            <div className="lg:col-span-2">
              {/* Tab Headers */}
              <div className="flex flex-wrap mb-6 bg-gray-100 rounded-lg p-1 gap-1">
                <button 
                  className={`flex-1 py-3 px-6 rounded-md text-sm font-medium transition-all ${
                    activeTab === 'product' 
                    ? 'bg-white shadow-sm text-gray-900' 
                    : 'hover:text-gray-900'
                  }`}
                  style={{ color: activeTab === 'product' ? undefined : '#A71499' }}
                  onClick={() => setActiveTab('product')}
                >
                  Product Reviews
                </button>
                <button 
                  className={`flex-1 py-3 px-6 rounded-md text-sm font-medium transition-all ${
                    activeTab === 'brand' 
                    ? 'bg-white shadow-sm text-gray-900' 
                    : 'hover:text-gray-900'
                  }`}
                  style={{ color: activeTab === 'brand' ? undefined : '#A71499' }}
                  onClick={() => setActiveTab('brand')}
                >
                  Brand Reviews
                </button>
                <button 
                  className={`flex-1 py-3 px-6 rounded-md text-sm font-medium transition-all ${
                    activeTab === 'store' 
                    ? 'bg-white shadow-sm text-gray-900' 
                    : 'hover:text-gray-900'
                  }`}
                  style={{ color: activeTab === 'store' ? undefined : '#A71499' }}
                  onClick={() => {
                    setActiveTab('store');
                    setStoreView('store-visit');
                  }}
                >
                  Our Stores
                </button>
              </div>

              {/* Product Tab Content - AI Insight & Customer Photos */}
              {activeTab === 'product' && (
                <div className="mb-8">
                  {/* AI Insight Section */}
                  <div className="mb-12 bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-100">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider">AI INSIGHT</h3>
                      </div>
                      <button className="px-3 py-1.5 text-xs font-medium rounded-full" style={{ backgroundColor: 'rgba(167, 20, 153, 0.1)', color: '#A71499' }}>Verified reviews</button>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Customers say</h4>
                    
                    <p className="text-gray-700 leading-relaxed mb-2 text-base">
                      {isAISummaryExpanded ? (
                        <>
                          Customers love how this kurta fits perfectly and flatters all body types. The premium fabric quality and elegant design make it ideal for various occasions. The kurta drapes beautifully and maintains its shape throughout the day, making it perfect for both casual and formal events. Many customers appreciate the attention to detail in the handwork on the yoke and the way the fabric feels against the skin.
                          <button onClick={() => setIsAISummaryExpanded(false)} className="underline ml-1 cursor-pointer" style={{ color: '#A71499' }}>Read less</button>
                        </>
                      ) : (
                        <>
                          Customers love how this kurta fits perfectly and flatters all body types. The premium fabric quality and elegant design make it ideal for various occasions.
                          <button onClick={() => setIsAISummaryExpanded(true)} className="underline ml-1 cursor-pointer" style={{ color: '#A71499' }}>Read more</button>
                        </>
                      )}
                    </p>
                    
                    <p className="text-xs text-gray-500 mb-4">Updated in near real-time as new feedback arrives.</p>
                    
                    {/* Divider */}
                    <div className="border-t border-gray-200 mb-4"></div>
                    
                    {/* Frequently Mentioned */}
                    <div>
                      <p className="text-[11px] font-medium text-gray-400 mb-3 uppercase tracking-widest">Customers Frequently Mention</p>
                      <div className="flex flex-wrap gap-2">
                        {['Perfect Fit', 'Premium Quality', 'Elegant Design', 'Comfortable Wear', 'Flattering Silhouette'].map((item, index) => (
                          <span key={index} className="text-xs px-3 py-1.5 rounded-full font-medium" style={{ background: 'rgba(167,20,153,0.07)', color: '#A71499', border: '1px solid rgba(167,20,153,0.18)', letterSpacing: '0.02em' }}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Customer Photos Section - Instagram Style */}
                  <div className="mb-12">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">CUSTOMER PHOTOS</h3>
                        <p className="text-sm text-gray-600">Real results from the community</p>
                      </div>
                      <span className="text-sm text-gray-500">{customerReviewImages.length} uploads</span>
                    </div>
                    
                    {/* Instagram-style Photo Gallery Grid - Show first 6, then "View all" */}
                    {customerReviewImages.length > 0 ? (
                      <div className="flex gap-2 mb-6 overflow-x-auto md:flex-wrap md:overflow-x-visible pb-2 md:pb-0 scrollbar-hide">
                        {customerReviewImages.slice(0, 6).map((image, i) => (
                          <div 
                            key={i} 
                            className="relative rounded-lg overflow-hidden cursor-pointer group flex-shrink-0"
                            onClick={() => handleImageClick(i)}
                            style={{ 
                              backgroundColor: '#f3f4f6',
                              width: '100px',
                              height: '100px',
                            }}
                          >
                            <img 
                              src={image} 
                              alt={`Customer review ${i + 1}`}
                              style={{ 
                                width: '100px',
                                height: '100px',
                                objectFit: 'cover',
                                display: 'block',
                                backgroundColor: 'transparent',
                                color: 'transparent',
                                opacity: 1
                              }}
                              onError={(e) => {
                                console.error(`Failed to load image ${i}:`, image);
                                e.target.style.display = 'none';
                              }}
                              onLoad={(e) => {
                                console.log(`Image ${i} loaded successfully:`, image);
                                e.target.style.opacity = '1';
                              }}
                            />
                            <div 
                              className="absolute inset-0 transition-all duration-300 pointer-events-none"
                              style={{
                                backgroundColor: 'transparent'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                              }}
                            ></div>
                          </div>
                        ))}
                        {customerReviewImages.length > 6 && (
                          <div 
                            className="relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity bg-gray-100 flex items-center justify-center flex-shrink-0"
                            onClick={() => {
                              setGridModalImages(customerReviewImages);
                              setGridModalReview(null);
                              setIsGridModalOpen(true);
                            }}
                            style={{ 
                              width: '100px',
                              height: '100px',
                            }}
                          >
                            <div className="text-center p-2">
                              <div className="text-xs font-semibold text-gray-700">+{customerReviewImages.length - 6}</div>
                              <div className="text-[10px] text-gray-500 mt-0.5">View all</div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">No customer photos available</p>
                    )}
                  </div>

                  {/* Sort & Filter Dropdown */}
                  <div className="mb-6 flex items-center gap-3">
                    <span className="text-[17px] md:text-sm font-medium text-gray-700">Sort & Filter:</span>
                    <div className="relative">
                      <select
                        value={productSortBy}
                        onChange={(e) => setProductSortBy(e.target.value)}
                        className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-[17px] md:text-sm font-medium text-gray-700 cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                      >
                        <option value="most-recent">Most Recent</option>
                        <option value="highest-rated">Highest Rated</option>
                        <option value="lowest-rated">Lowest Rated</option>
                        <option value="oldest">Oldest First</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Review Cards */}
                  <div className="space-y-0">
                    {reviews
                      .slice(0, reviewsToShow)
                      .map((review, index) => {
                      const likeKey = `product-${review.id}`;
                      const replyKey = `product-${review.id}`;
                      const isFirst = index === 0;
                      const isLast = index === reviewsToShow - 1;
                      return (
                        <React.Fragment key={review.id}>
                          {index > 0 && <div className="border-t border-gray-400"></div>}
                          <div className={`bg-white py-6 w-full ${isFirst ? 'border-t border-gray-400' : ''} ${isLast ? 'border-b border-gray-400' : ''}`}>
                            {/* Header with name, verification, location and time */}
                            <div className="flex items-start justify-between mb-0">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#f0f0f0' }}>
                                  <svg className="w-4 h-4" style={{ color: '#9ca3af' }} fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                                  </svg>
                                </div>
                                <span className="font-medium text-gray-900">{review.name}</span>
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div className="text-right">
                                <div className="text-sm text-gray-500">{review.location}</div>
                                <div className="text-sm text-gray-400">{getDaysAgo(review.date)}</div>
                              </div>
                            </div>

                            {/* Star Rating */}
                            <div className="flex items-center gap-1 mb-3 -mt-1">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className="w-5 h-5"
                                  style={{
                                    fill: i < review.rating ? '#A71499' : '#E5E7EB',
                                    filter: i < review.rating ? 'drop-shadow(0 1px 2px rgba(167, 20, 153, 0.3))' : 'none'
                                  }}
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>

                            {/* Review Content */}
                            <p className="text-gray-700 text-base leading-relaxed mb-3">
                              {expandedReviews[`product-${review.id}`] ? review.text : `${review.text.slice(0, 120)}...`}
                              <button 
                                onClick={() => handleReadMore(review.id, 'product')}
                                className="text-gray-600 ml-2 text-sm underline hover:text-gray-800"
                              >
                                {expandedReviews[`product-${review.id}`] ? 'Read less' : 'Read more'}
                              </button>
                            </p>
                            
                            {/* Review Images - Show all images */}
                            {review.images && review.images.length > 0 && (
                              <div className="flex flex-wrap gap-2 mb-3">
                                {review.images.map((image, imgIndex) => (
                                  <div 
                                    key={imgIndex}
                                    className="relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                                    onClick={() => {
                                      const imageIndex = allReviewImages.indexOf(image);
                                      if (imageIndex !== -1) {
                                        handleImageClick(imageIndex);
                                      }
                                    }}
                                    style={{ 
                                      width: '80px',
                                      height: '80px',
                                      flexShrink: 0
                                    }}
                                  >
                                    <img 
                                      src={image} 
                                      alt={`Review ${review.id} image ${imgIndex + 1}`}
                                      style={{ 
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                      }}
                                    />
                                  </div>
                                ))}
                              </div>
                            )}
                            
                            {/* Helpful Button - Right Aligned */}
                            <div className="flex justify-end">
                              <button 
                                onClick={() => handleLike(review.id, 'product')}
                                className="text-gray-500 text-sm hover:text-gray-700 transition-colors"
                              >
                                Helpful ({reviewLikes[likeKey] || 4})
                              </button>
                            </div>

                            {/* Reply Form */}
                            {reviewReplies[replyKey] && (
                              <div className="mt-4 pl-4 border-l-2 border-gray-200">
                                <textarea 
                                  className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                                  placeholder="Write a reply..."
                                  rows="3"
                                />
                                <div className="flex gap-2 mt-2">
                                  <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition-colors">
                                    Post Reply
                                  </button>
                                  <button 
                                    onClick={() => handleReply(review.id, 'product')}
                                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>

                  {/* View More Reviews Button */}
                  {reviewsToShow < reviews.length && (
                    <div className="mt-6 text-center">
                      <button 
                        onClick={() => setReviewsToShow(reviews.length)}
                        className="bg-transparent border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium text-sm md:text-base hover:border-gray-400 transition-colors"
                      >
                        View More Reviews
                      </button>
                    </div>
                  )}

                  {/* Write Review Button */}
                  <div className="mt-8 text-center">
                    <button className="bg-black text-white px-6 py-3 rounded-lg font-medium text-sm md:text-base hover:bg-gray-800 transition-colors">
                      Write a Review
                    </button>
                  </div>
                </div>
              )}

              {/* Brand Tab Content */}
              {activeTab === 'brand' && (
                <div className="mb-8">
                  {/* Brand AI Insight Section */}
                  <div className="mb-12 bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-100">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider">AI INSIGHT</h3>
                      </div>
                      <button className="px-3 py-1.5 text-xs font-medium rounded-full" style={{ backgroundColor: 'rgba(167, 20, 153, 0.1)', color: '#A71499' }}>Verified reviews</button>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Customers say about the brand</h4>
                    
                    <p className="text-gray-700 leading-relaxed mb-2 text-base">
                      {isBrandAISummaryExpanded ? (
                        <>
                          Customers love the brand for its consistent quality and excellent customer service. The brand is known for premium fabrics, elegant designs, and comfortable fits that flatter all body types. Many customers appreciate the brand's attention to detail and commitment to customer satisfaction. The brand has built a strong reputation for delivering stylish and well-made ethnic wear that stands the test of time. Customers frequently mention the brand's reliability, value for money, and trustworthy service.
                          <button onClick={() => setIsBrandAISummaryExpanded(false)} className="underline ml-1 cursor-pointer" style={{ color: '#A71499' }}>Read less</button>
                        </>
                      ) : (
                        <>
                          Customers love the brand for its consistent quality and excellent customer service. The brand is known for premium fabrics, elegant designs, and comfortable fits that flatter all body types.
                          <button onClick={() => setIsBrandAISummaryExpanded(true)} className="underline ml-1 cursor-pointer" style={{ color: '#A71499' }}>Read more</button>
                        </>
                      )}
                    </p>
                    
                    <p className="text-xs text-gray-500 mb-4">Updated in near real-time as new feedback arrives.</p>
                    
                    {/* Divider */}
                    <div className="border-t border-gray-200 mb-4"></div>
                    
                    {/* Brand Keywords */}
                    <div>
                      <p className="text-[11px] font-medium text-gray-400 mb-3 uppercase tracking-widest">Brand Frequently Mentioned</p>
                      <div className="flex flex-wrap gap-2">
                        {['Premium Quality', 'Excellent Service', 'Reliable Brand', 'Elegant Designs', 'Comfortable Fit', 'Great Value'].map((item, index) => (
                          <span key={index} className="text-xs px-3 py-1.5 rounded-full font-medium" style={{ background: 'rgba(167,20,153,0.07)', color: '#A71499', border: '1px solid rgba(167,20,153,0.18)', letterSpacing: '0.02em' }}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Customer Photos Section - Brand Reviews */}
                  <div className="mb-12">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">CUSTOMER PHOTOS</h3>
                        <p className="text-sm text-gray-600">Real results from the community</p>
                      </div>
                      <span className="text-sm text-gray-500">
                        {brandReviews.reduce((total, review) => total + (review.images?.length || 0), 0)} uploads
                      </span>
                    </div>
                    
                    {/* Get all brand review images */}
                    {(() => {
                      const allBrandImages = brandReviews.flatMap(review => review.images || []);
                      return allBrandImages.length > 0 ? (
                        <div className="flex gap-2 mb-6 overflow-x-auto md:flex-wrap md:overflow-x-visible pb-2 md:pb-0 scrollbar-hide">
                          {allBrandImages.slice(0, 6).map((image, i) => {
                            const imageIndex = allReviewImages.indexOf(image);
                            return (
                              <div 
                                key={i} 
                                className="relative rounded-lg overflow-hidden cursor-pointer group flex-shrink-0"
                                onClick={() => {
                                  if (imageIndex !== -1) {
                                    handleImageClick(imageIndex);
                                  }
                                }}
                                style={{ 
                                  backgroundColor: '#f3f4f6',
                                  width: '100px',
                                  height: '100px',
                                }}
                              >
                                <img 
                                  src={image} 
                                  alt={`Brand review photo ${i + 1}`}
                                  style={{ 
                                    width: '100px',
                                    height: '100px',
                                    objectFit: 'cover',
                                    display: 'block',
                                    backgroundColor: 'transparent',
                                    color: 'transparent',
                                    opacity: 1
                                  }}
                                  onError={(e) => {
                                    console.error(`Failed to load brand image ${i}:`, image);
                                    e.target.style.display = 'none';
                                  }}
                                  onLoad={(e) => {
                                    console.log(`Brand image ${i} loaded successfully:`, image);
                                    e.target.style.opacity = '1';
                                  }}
                                />
                                <div 
                                  className="absolute inset-0 transition-all duration-300 pointer-events-none"
                                  style={{
                                    backgroundColor: 'transparent'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                  }}
                                ></div>
                              </div>
                            );
                          })}
                          {allBrandImages.length > 6 && (
                            <div 
                              className="relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity bg-gray-100 flex items-center justify-center flex-shrink-0"
                              onClick={() => {
                                setGridModalImages(allBrandImages);
                                setGridModalReview(null);
                                setIsGridModalOpen(true);
                              }}
                              style={{ 
                                width: '100px',
                                height: '100px',
                              }}
                            >
                              <div className="text-center p-2">
                                <div className="text-xs font-semibold text-gray-700">+{allBrandImages.length - 6}</div>
                                <div className="text-[10px] text-gray-500 mt-0.5">View all</div>
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">No customer photos available</p>
                      );
                    })()}
                  </div>

                  {/* Sort & Filter Dropdown */}
                  <div className="mb-6 flex items-center gap-3">
                    <span className="text-[17px] md:text-sm font-medium text-gray-700">Sort & Filter:</span>
                    <div className="relative">
                      <select
                        value={brandSortBy}
                        onChange={(e) => setBrandSortBy(e.target.value)}
                        className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-[17px] md:text-sm font-medium text-gray-700 cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                      >
                        <option value="most-recent">Most Recent</option>
                        <option value="highest-rated">Highest Rated</option>
                        <option value="lowest-rated">Lowest Rated</option>
                        <option value="oldest">Oldest First</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Brand Review Cards */}
                  <div className="space-y-0">
                    {brandReviews
                      .slice(0, brandReviewsToShow)
                      .map((review, index) => {
                      const likeKey = `brand-${review.id}`;
                      const replyKey = `brand-${review.id}`;
                      const isFirst = index === 0;
                      const isLast = index === brandReviewsToShow - 1;
                      return (
                        <React.Fragment key={review.id}>
                          {index > 0 && <div className="border-t border-gray-400"></div>}
                          <div className={`bg-white py-6 w-full ${isFirst ? 'border-t border-gray-400' : ''} ${isLast ? 'border-b border-gray-400' : ''}`}>
                            {/* Header with name, verification, location and time */}
                            <div className="flex items-start justify-between mb-0">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#f0f0f0' }}>
                                  <svg className="w-4 h-4" style={{ color: '#9ca3af' }} fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                                  </svg>
                                </div>
                                <span className="font-medium text-gray-900">{review.name}</span>
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div className="text-right">
                                <div className="text-sm text-gray-500">{review.location}</div>
                                <div className="text-sm text-gray-400">{getDaysAgo(review.date)}</div>
                              </div>
                            </div>

                            {/* Star Rating */}
                            <div className="flex items-center gap-1 mb-3 -mt-1">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className="w-5 h-5"
                                  style={{
                                    fill: i < review.rating ? '#A71499' : '#E5E7EB',
                                    filter: i < review.rating ? 'drop-shadow(0 1px 2px rgba(167, 20, 153, 0.3))' : 'none'
                                  }}
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>

                            {/* Review Title */}
                            <h3 className="font-medium text-gray-900 mb-2">{review.title}</h3>

                            {/* Review Content */}
                            <p className="text-gray-700 text-base leading-relaxed mb-3">
                              {expandedReviews[`brand-${review.id}`] ? review.text : `${review.text.slice(0, 120)}...`}
                              {review.text.length > 120 && (
                                <button 
                                  onClick={() => handleReadMore(review.id, 'brand')}
                                  className="text-gray-600 ml-2 text-sm underline hover:text-gray-800"
                                >
                                  {expandedReviews[`brand-${review.id}`] ? 'Read less' : 'Read more'}
                                </button>
                              )}
                            </p>
                            
                            {/* Brand Review Images - Show all images */}
                            {review.images && review.images.length > 0 && (
                              <div className="flex flex-wrap gap-2 mb-3">
                                {review.images.map((image, imgIndex) => (
                                  <div 
                                    key={imgIndex}
                                    className="relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                                    onClick={() => {
                                      const imageIndex = allReviewImages.indexOf(image);
                                      if (imageIndex !== -1) {
                                        handleImageClick(imageIndex);
                                      }
                                    }}
                                    style={{ 
                                      width: '80px',
                                      height: '80px',
                                      flexShrink: 0
                                    }}
                                  >
                                    <img 
                                      src={image} 
                                      alt={`Brand review ${review.id} image ${imgIndex + 1}`}
                                      style={{ 
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                      }}
                                    />
                              </div>
                                ))}
                            </div>
                            )}
                            
                            {/* Helpful Button - Right Aligned */}
                            <div className="flex justify-end">
                              <button 
                                onClick={() => handleLike(review.id, 'brand')}
                                className="text-gray-500 text-sm hover:text-gray-700 transition-colors"
                              >
                                Helpful ({reviewLikes[likeKey] || 4})
                              </button>
                            </div>

                            {/* Reply Form */}
                            {reviewReplies[replyKey] && (
                              <div className="mt-4 pl-4 border-l-2 border-gray-200">
                                <textarea 
                                  className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                                  placeholder="Write a reply..."
                                  rows="3"
                                />
                                <div className="flex gap-2 mt-2">
                                  <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition-colors">
                                    Post Reply
                                  </button>
                                  <button 
                                    onClick={() => handleReply(review.id, 'brand')}
                                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>

                  {/* View More Brand Reviews Button */}
                  {brandReviewsToShow < brandReviews.length && (
                    <div className="mt-6 text-center">
                      <button 
                        onClick={() => setBrandReviewsToShow(brandReviews.length)}
                        className="bg-transparent border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium text-sm md:text-base hover:border-gray-400 transition-colors"
                      >
                        View More Reviews
                      </button>
                    </div>
                  )}

                  {/* Write Review Button */}
                  <div className="mt-8 text-center">
                    <button className="bg-black text-white px-6 py-3 rounded-lg font-medium text-sm md:text-base hover:bg-gray-800 transition-colors">
                      Write a Review
                    </button>
                  </div>
                </div>
              )}

              {/* Store Tab Content */}
              {activeTab === 'store' && (
                <div className="mb-8 space-y-6">
                  <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Visit Our Stores</h3>
                        <p className="text-sm text-gray-500 mt-1">Experience wordofmouth in person or see what guests are sharing from their visits.</p>
                      </div>
                      <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
                        {storeTabOptions.map((tab) => (
                          <button
                            key={tab.value}
                            onClick={() => {
                              setStoreView(tab.value);
                              if (tab.value !== 'in-store') {
                                setSelectedStore(null);
                              }
                            }}
                            className={`px-3 py-2 text-xs sm:text-sm rounded-md transition-all ${
                              storeView === tab.value ? 'bg-white shadow-sm text-gray-900' : 'hover:text-gray-900 text-gray-600'
                            }`}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  {storeView === 'in-store' ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {storeLocations.map((store) => (
                        <button
                          key={store.id}
                          onClick={() => setSelectedStore(store)}
                          className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm text-left transition-transform hover:-translate-y-1 hover:shadow-lg"
                        >
                          <div className="relative h-56">
                            <img
                              src={store.image}
                              alt={store.name}
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                            <div className="absolute bottom-4 left-4 right-4 text-white drop-shadow">
                              <div className="text-sm uppercase tracking-wide text-white/80">wordofmouth Store</div>
                              <div className="text-lg font-semibold">{store.name}</div>
                            </div>
                          </div>
                          <div className="p-5 space-y-2">
                            <div className="text-sm text-gray-600">{store.address}</div>
                            <div className="text-xs uppercase tracking-wide text-gray-400">{store.hours}</div>
                            <div className="text-sm font-medium text-gray-800">{store.phone}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {storeVisits.map((shot) => (
                        <div
                          key={shot.id}
                          className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                        >
                          <div className="aspect-3/4 overflow-hidden">
                            <img
                              src={shot.image}
                              alt={shot.caption}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="p-4 space-y-2">
                            <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-[11px] font-medium text-gray-600 uppercase tracking-wide">{shot.badge}</span>
                            <p className="text-sm text-gray-700 leading-relaxed">{shot.caption}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Instagram Button */}
      <button 
        className="fixed bottom-0 left-0 md:bottom-5 md:left-5 w-full md:w-auto md:rounded-full rounded-none flex items-center justify-center gap-2.5 px-5 py-3 md:px-5 md:py-3 text-sm md:text-sm font-semibold text-white cursor-pointer shadow-lg z-[1000] transition-all duration-300 hover:-translate-y-0.5"
        style={{
          background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
          boxShadow: '0 4px 15px rgba(188, 24, 136, 0.4)'
        }}
        onClick={() => setShowInstagramModal(true)}
        aria-label="See Our Instagram"
      >
        <svg className="w-6 h-6 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
        </svg>
        <span className="whitespace-nowrap">See Our Instagram</span>
      </button>

      {/* Instagram Modal */}
      {showInstagramModal && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-[10000] p-4 overflow-y-auto"
          onClick={() => setShowInstagramModal(false)}
        >
          <div 
            className="relative w-full md:w-2/5 max-w-4xl h-full md:h-[90vh] bg-gray-50 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 bg-black bg-opacity-60 border-none rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-all duration-200 z-[10001] hover:bg-opacity-80"
              onClick={() => setShowInstagramModal(false)}
              aria-label="Close Instagram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="h-full flex flex-col overflow-hidden">
              <div className="text-center border-b border-gray-200 flex-shrink-0 py-4 px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-2 m-0">Our Instagram</h2>
                <p className="text-base text-gray-600 m-0">Check out our latest posts and reels</p>
              </div>
              <div className="flex-1 overflow-y-auto py-4 px-4">
                <div className="max-w-2xl mx-auto w-full">
                  {/* Loading Skeleton */}
                  {instagramLoading && (
                    <div className="space-y-6">
                      {[1, 2, 3, 4].map((i) => (
                    <div
                          key={`skeleton-${i}`}
                          className="w-full bg-gray-200 rounded-lg overflow-hidden animate-pulse"
                          style={{ height: '600px' }}
                        >
                          <div className="h-full bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200"></div>
                        </div>
                      ))}
                      <div className="flex items-center justify-center py-4">
                        <div className="flex items-center gap-2 text-gray-500">
                          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Loading Instagram posts...</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Instagram Posts */}
                  <div style={{ display: instagramLoading ? 'none' : 'block' }}>
                    {instagramPosts.map((url, index) => (
                      <div
                        key={`instagram-post-${index}`}
                        className="w-full flex justify-center mb-6 last:mb-0"
                      >
                        <blockquote 
                          className="instagram-media" 
                          data-instgrm-permalink={url}
                          data-instgrm-version="14"
                          style={{ maxWidth: '100%', width: '100%' }}
                      />
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="video-modal-overlay"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="video-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="video-modal-close"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close video"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <video
              src={selectedVideo}
              className="video-modal-player"
              controls
              autoPlay
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="video-modal-overlay"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="video-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="video-modal-close"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close video"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <video
              src={selectedVideo}
              className="video-modal-player"
              controls
              autoPlay
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* You May Also Like Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-[#8B4513] mb-3 tracking-wide">
              Best Sellers
            </h2>
          </div>
          <div className="overflow-x-auto -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-4 md:gap-6 min-w-max">
              {bestSellerProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="w-[90vw] md:w-[380px] lg:w-[280px] flex-shrink-0 cursor-pointer"
                  onClick={() => onProductClick && onProductClick()}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ShopifyFooter brandName={BRAND_NAME} />
      
      {/* Grid Modal - Show All Images - Full Screen */}
      {isGridModalOpen && (
        <div 
          className="fixed inset-0 bg-white z-[9998] flex flex-col"
          onClick={() => setIsGridModalOpen(false)}
        >
          {/* Header - Fixed at top */}
          <div 
            className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200 bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                {gridModalReview ? `${gridModalReview.name}'s Photos` : 'Customer Photos'}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {gridModalImages.length} {gridModalImages.length === 1 ? 'photo' : 'photos'}
              </p>
            </div>
            <button
              onClick={() => setIsGridModalOpen(false)}
              className="text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-full hover:bg-gray-100"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Images Grid - Full screen scrollable */}
          <div 
            className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 max-w-7xl mx-auto">
              {gridModalImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity bg-gray-200 shadow-sm"
                  onClick={() => {
                    const imageIndex = allReviewImages.indexOf(image);
                    if (imageIndex !== -1) {
                      setIsGridModalOpen(false);
                      handleImageClick(imageIndex);
                    }
                  }}
                >
                  <img
                    src={image}
                    alt={`Photo ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error(`Failed to load grid image ${index}:`, image);
                      e.target.style.display = 'none';
                    }}
                    onLoad={(e) => {
                      e.target.style.opacity = '1';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-[9999] flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          {/* Modal Content Container - Myntra Style Side-by-Side for Desktop */}
          <div 
            className="relative w-full max-w-6xl h-[90vh] bg-white rounded-lg overflow-hidden flex flex-col md:flex-row shadow-2xl"
            onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition-colors z-20 bg-white rounded-full p-2 shadow-lg"
            aria-label="Close modal"
          >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

            {/* Left Side - Image Section */}
            <div className="relative w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-4 md:p-8">
              {/* Previous Button - Mobile only */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
                className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 text-gray-700 hover:text-gray-900 transition-colors z-10 bg-white bg-opacity-80 rounded-full p-2 shadow-lg"
            aria-label="Previous image"
          >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

              {/* Next Button - Mobile only */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
                className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 text-gray-700 hover:text-gray-900 transition-colors z-10 bg-white bg-opacity-80 rounded-full p-2 shadow-lg"
            aria-label="Next image"
          >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

              {/* Image */}
            <img
                src={allReviewImages[selectedModalImageIndex]}
                alt={`Review image ${selectedModalImageIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
              {/* Image Counter - Bottom Left */}
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-3 py-1.5 rounded-full text-xs md:text-sm">
                {selectedModalImageIndex + 1} / {allReviewImages.length}
            </div>
          </div>
            
            {/* Right Side - Review Details Section (Desktop) */}
            {selectedReview && (
              <div className="hidden md:flex w-full md:w-1/2 bg-white overflow-y-auto flex-col">
                <div className="p-6 md:p-8">
                  {/* Header with Name and Date */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900 text-lg md:text-xl">{selectedReview.name}</span>
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
        </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">{getDaysAgo(selectedReview.date)}</div>
                    </div>
                  </div>
                  
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <svg width="0" height="0" style={{ position: 'absolute' }}>
                      <defs>
                        <linearGradient id="modalStarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#A71499" />
                          <stop offset="50%" stopColor="#A855A5" />
                          <stop offset="100%" stopColor="#C47BC5" />
                        </linearGradient>
                      </defs>
                    </svg>
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        className="w-5 h-5"
                        style={i < selectedReview.rating ? { 
                          fill: 'url(#modalStarGradient)',
                          filter: 'drop-shadow(0 1px 2px rgba(167, 20, 153, 0.3))'
                        } : { fill: '#d1d5db' }}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Review Title */}
                  {selectedReview.title && (
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg md:text-xl">{selectedReview.title}</h3>
                  )}
                  
                  {/* Review Text */}
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">{selectedReview.text}</p>
                  
                  {/* Review Type Badge */}
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1.5 text-xs font-medium rounded-full" style={{ backgroundColor: 'rgba(167, 20, 153, 0.1)', color: '#A71499' }}>
                      {selectedReview.type === 'product' ? 'Product Review' : 'Brand Review'}
                    </span>
                  </div>

                  {/* Navigation Buttons for Desktop - Bottom */}
                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-200">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrevious();
                      }}
                      className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
                      aria-label="Previous image"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      <span className="text-sm font-medium">Previous</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
                      aria-label="Next image"
                    >
                      <span className="text-sm font-medium">Next</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Mobile: Review Details Below Image */}
            {selectedReview && (
              <div className="md:hidden w-full bg-white p-4 border-t border-gray-200 overflow-y-auto max-h-[40vh]">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900 text-base">{selectedReview.name}</span>
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">{getDaysAgo(selectedReview.date)}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  <svg width="0" height="0" style={{ position: 'absolute' }}>
                    <defs>
                      <linearGradient id="mobileModalStarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#A71499" />
                        <stop offset="50%" stopColor="#A855A5" />
                        <stop offset="100%" stopColor="#C47BC5" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      className="w-4 h-4"
                      style={i < selectedReview.rating ? { 
                        fill: 'url(#mobileModalStarGradient)',
                        filter: 'drop-shadow(0 1px 2px rgba(167, 20, 153, 0.3))'
                      } : { fill: '#d1d5db' }}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {selectedReview.title && (
                  <h3 className="font-medium text-gray-900 mb-2 text-base">{selectedReview.title}</h3>
                )}
                <p className="text-gray-700 text-sm leading-relaxed mb-2">{selectedReview.text}</p>
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full" style={{ backgroundColor: 'rgba(167, 20, 153, 0.1)', color: '#A71499' }}>
                  {selectedReview.type === 'product' ? 'Product Review' : 'Brand Review'}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
      <AIBrandEngine />
    </div>
  );
};

export default ShopifyProductPage;

