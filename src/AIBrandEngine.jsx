import React, { useState } from 'react';
import './AIBrandEngine.css';

const AIBrandEngine = ({ showExtras = true }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('metrics');
  const [activeMetric, setActiveMetric] = useState('glow');

  if (!showExtras) return null;

  const getIcon = (type) => {
    const icons = {
      skinmatch: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M17 3l1.5 1.5L21 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      ingredients: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      results: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      refunds: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      shipping: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M1 3H17L22 8L17 13H1V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2"/>
          <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      cleanbeauty: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2a5 5 0 015 5c0 3-2 5.5-5 9-3-3.5-5-6-5-9a5 5 0 015-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 14l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      metrics: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 16L12 11L16 15L21 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 10V3H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    };
    return icons[type] || icons.skinmatch;
  };

  const brandInfo = {
    skinmatch: {
      title: 'Skin Type Match',
      iconType: 'skinmatch',
      content: [
        { label: 'Skin Match Accuracy', value: '97%', description: 'AI matches product to your skin type from 15,000+ reviews' },
        { label: 'Works for Sensitive Skin', value: '93%', description: 'Customers with sensitive skin report no irritation' },
        { label: 'Shade Finder', value: 'AI-Powered', description: 'Personalized shade recommendations for your undertone' }
      ],
      highlights: [
        'Suitable for all Indian skin tones',
        'Dermatologist tested formula',
        'Free shade consultation available'
      ]
    },
    ingredients: {
      title: 'Clean Ingredients',
      iconType: 'ingredients',
      content: [
        { label: 'Harmful Chemicals', value: '0', description: 'Free from parabens, sulphates & mineral oils' },
        { label: 'Active Ingredients', value: 'Care-Infused', description: 'Enriched with niacinamide & vitamin E' },
        { label: 'Ingredient Score', value: '9.4/10', description: 'Based on EWG safety ratings & customer reviews' }
      ],
      highlights: [
        'Cruelty-free & vegan formula',
        'No artificial fragrance',
        'Ophthalmologist tested — safe for eyes'
      ]
    },
    results: {
      title: 'Real Results',
      iconType: 'results',
      content: [
        { label: 'See Results In', value: '1st Use', description: 'Visible definition & colour payoff from day one' },
        { label: 'Long Wear', value: '24 Hours', description: 'Waterproof formula that stays through the day' },
        { label: 'Satisfaction Rate', value: '96%', description: 'Women report visible improvement in eye look' }
      ],
      highlights: [
        'Smudge-proof & transfer-resistant',
        'No touch-up needed for 12+ hours',
        'Works on hooded & monolid eyes too'
      ]
    },
    refunds: {
      title: 'Easy Refunds',
      iconType: 'refunds',
      content: [
        { label: 'Refund Time', value: '3-5 Days', description: 'After we receive your return' },
        { label: 'Refund Method', value: 'Original Payment', description: 'Money back to your original payment method' },
        { label: 'Customer Satisfaction', value: '96%', description: 'Satisfied with refund process' }
      ],
      highlights: [
        'Full refund guarantee',
        'No restocking fees',
        'Instant refund for damaged items'
      ]
    },
    shipping: {
      title: 'Fast Shipping',
      iconType: 'shipping',
      content: [
        { label: 'Delivery Time', value: '2-4 Days', description: 'Standard shipping across India' },
        { label: 'Express Delivery', value: '1-2 Days', description: 'Available for metro cities' },
        { label: 'Free Shipping', value: 'Above ₹499', description: 'On all beauty orders above ₹499' }
      ],
      highlights: [
        'Temperature-safe packaging for makeup',
        'Real-time tracking',
        'Cash on delivery available'
      ]
    },
    cleanbeauty: {
      title: 'Clean Beauty',
      iconType: 'cleanbeauty',
      content: [
        { label: 'Cruelty-Free', value: '100%', description: 'Never tested on animals — certified by PETA' },
        { label: 'Vegan Formula', value: 'Certified', description: 'No animal-derived ingredients used' },
        { label: 'Eco Packaging', value: 'Recyclable', description: 'Packaging made from recycled materials' }
      ],
      highlights: [
        'No microplastics in formulas',
        'Sustainably sourced botanicals',
        'Carbon-neutral shipping available'
      ]
    }
  };

  // Graph data for skincare/makeup metrics
  const graphData = {
    glow: {
      label: 'Glow Satisfaction',
      data: [82, 88, 85, 91, 87, 93, 96],
      color: '#a58296'
    },
    positive: {
      label: 'Positive Reviews',
      data: [78, 85, 82, 89, 86, 90, 93],
      color: '#4CAF50'
    },
    repeat: {
      label: 'Repeat Purchase',
      data: [65, 72, 68, 77, 73, 80, 84],
      color: '#7f2065'
    },
    wear: {
      label: 'Long Wear Score',
      data: [80, 85, 83, 88, 86, 91, 94],
      color: '#FF9800'
    },
    rating: {
      label: 'Average Rating',
      data: [4.2, 4.4, 4.3, 4.6, 4.5, 4.7, 4.8],
      color: '#9C27B0'
    },
    skin: {
      label: 'Skin Compatibility',
      data: [84, 89, 87, 92, 90, 94, 96],
      color: '#E91E8C'
    }
  };

  const metrics = [
    { id: 'positive', label: 'Positive' },
    { id: 'repeat', label: 'Repeat' },
    { id: 'glow', label: 'Glow' },
    { id: 'wear', label: 'Wear' },
    { id: 'rating', label: 'Rating' },
    { id: 'skin', label: 'Skin' }
  ];

  // Calculate current metric value and percentage
  const currentMetric = graphData[activeMetric];
  const currentValue = currentMetric.data[currentMetric.data.length - 1];
  const percentage = typeof currentValue === 'number' ? currentValue.toFixed(1) : currentValue;
  const displayValue = typeof currentValue === 'number' && currentValue < 10 ? `${currentValue.toFixed(1)}/5` : `${percentage}%`;

  // Render line chart
  const renderChart = () => {
    const data = currentMetric.data;
    const maxValue = Math.max(...data) * 1.1;
    const minValue = Math.min(...data) * 0.9;
    const range = maxValue - minValue;
    const width = 340;
    const height = 160;
    const padding = { top: 15, right: 15, bottom: 35, left: 45 };

    const points = data.map((value, index) => {
      const x = padding.left + (index / (data.length - 1)) * (width - padding.left - padding.right);
      const y = padding.top + (height - padding.top - padding.bottom) - ((value - minValue) / range) * (height - padding.top - padding.bottom);
      return { x, y, value };
    });

    // Create path for line
    const linePath = points.map((point, index) => 
      `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
    ).join(' ');

    // Create path for area fill
    const areaPath = `${linePath} L ${points[points.length - 1].x} ${height - padding.bottom} L ${points[0].x} ${height - padding.bottom} Z`;

    return (
      <div className="chart-container">
        <div className="chart-header">
          <h5 className="chart-title">Trust Metrics</h5>
          <div className="chart-value">{displayValue}</div>
        </div>
        <svg width={width} height={height} className="chart-svg">
          {/* Area fill */}
          <path d={areaPath} fill={`url(#gradient-${activeMetric})`} opacity="0.3"/>
          {/* Gradient definition */}
          <defs>
            <linearGradient id={`gradient-${activeMetric}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={currentMetric.color} stopOpacity="0.4"/>
              <stop offset="100%" stopColor={currentMetric.color} stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map((i) => {
            const y = padding.top + (i / 4) * (height - padding.top - padding.bottom);
            return (
              <line
                key={i}
                x1={padding.left}
                y1={y}
                x2={width - padding.right}
                y2={y}
                stroke="#e5e5e5"
                strokeWidth="1"
                strokeDasharray="2,2"
              />
            );
          })}
          {/* Line */}
          <path
            d={linePath}
            fill="none"
            stroke={currentMetric.color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Data points */}
          {points.map((point, index) => (
            <g key={index}>
              <circle
                cx={point.x}
                cy={point.y}
                r="4"
                fill={currentMetric.color}
                stroke="white"
                strokeWidth="2"
              />
              {/* Tooltip on hover */}
              {index === 4 && (
                <g>
                  <line
                    x1={point.x}
                    y1={padding.top}
                    x2={point.x}
                    y2={height - padding.bottom}
                    stroke="#999"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                  />
                  <rect
                    x={point.x - 30}
                    y={point.y - 35}
                    width="60"
                    height="24"
                    rx="4"
                    fill="#2d2d2d"
                  />
                  <text
                    x={point.x}
                    y={point.y - 18}
                    textAnchor="middle"
                    fill="white"
                    fontSize="11"
                    fontWeight="600"
                  >
                    {index + 1}: {typeof point.value === 'number' && point.value < 10 ? `${point.value.toFixed(1)}/5` : `${point.value.toFixed(1)}%`}
                  </text>
                </g>
              )}
            </g>
          ))}
          {/* X-axis labels */}
          {points.map((point, index) => (
            <text
              key={index}
              x={point.x}
              y={height - padding.bottom + 20}
              textAnchor="middle"
              fill="#666"
              fontSize="10"
              fontWeight="500"
            >
              W{index + 1}
            </text>
          ))}
        </svg>
        {/* Metric filter buttons */}
        <div className="metric-filters">
          {metrics.map((metric) => (
            <button
              key={metric.id}
              className={`metric-filter-btn ${activeMetric === metric.id ? 'active' : ''}`}
              onClick={() => setActiveMetric(metric.id)}
            >
              {metric.label}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const tabs = [
    { id: 'metrics', label: 'Metrics', iconType: 'metrics' },
    { id: 'skinmatch', label: 'Skin Match', iconType: 'skinmatch' },
    { id: 'ingredients', label: 'Ingredients', iconType: 'ingredients' },
    { id: 'results', label: 'Results', iconType: 'results' },
    { id: 'refunds', label: 'Refunds', iconType: 'refunds' },
    { id: 'shipping', label: 'Shipping', iconType: 'shipping' },
    { id: 'cleanbeauty', label: 'Clean Beauty', iconType: 'cleanbeauty' }
  ];

  const currentInfo = brandInfo[activeTab] || brandInfo.skinmatch;

  return (
    <div className={`ai-brand-engine ${isExpanded ? 'expanded' : ''}`}>
      {!isExpanded ? (
        <button
          className="ai-brand-engine-trigger"
          onClick={() => setIsExpanded(true)}
          aria-label="Open AI Brand Engine"
        >
          <div className="trigger-icon">
            <img 
              src="https://img.freepik.com/premium-vector/generate-ai-abstract-vector-symbol-artificial-intelligence-colorful-stars-icon_34480-1539.jpg" 
              alt="AI Icon" 
              className="ai-icon-image"
            />
          </div>
        </button>
      ) : (
        <div className="ai-brand-engine-panel">
          {/* Header */}
          <div className="panel-header">
            <div className="header-left">
              <div className="header-icon">
                <img 
                  src="https://img.freepik.com/premium-vector/generate-ai-abstract-vector-symbol-artificial-intelligence-colorful-stars-icon_34480-1539.jpg" 
                  alt="AI Icon" 
                  className="ai-icon-image header-ai-icon"
                />
              </div>
              <div>
                <h3 className="panel-title">AI Brand Engine</h3>
                <p className="panel-subtitle">Powered by AI insights</p>
              </div>
            </div>
            <button
              className="panel-close-btn"
              onClick={() => setIsExpanded(false)}
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Tabs */}
          <div className="panel-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{getIcon(tab.iconType)}</span>
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="panel-content">
            {activeTab === 'metrics' ? (
              renderChart()
            ) : (
              <>
                <div className="content-header">
                  <div className="content-icon">{getIcon(currentInfo.iconType)}</div>
                  <h4 className="content-title">{currentInfo.title}</h4>
                </div>

                {/* Stats Grid */}
                <div className="stats-grid">
                  {currentInfo.content.map((item, index) => (
                    <div key={index} className="stat-card">
                      <div className="stat-value">{item.value}</div>
                      <div className="stat-label">{item.label}</div>
                      <div className="stat-description">{item.description}</div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="highlights-section">
                  <h5 className="highlights-title">Key Highlights</h5>
                  <ul className="highlights-list">
                    {currentInfo.highlights.map((highlight, index) => (
                      <li key={index} className="highlight-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="highlight-icon">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="panel-footer">
            <div className="footer-badge">
              <img 
                src="https://img.freepik.com/premium-vector/generate-ai-abstract-vector-symbol-artificial-intelligence-colorful-stars-icon_34480-1539.jpg" 
                alt="AI Icon" 
                className="ai-icon-image footer-ai-icon"
              />
              <span>AI-Powered Insights</span>
            </div>
            <p className="footer-note">Data updated in real-time from customer reviews and brand analytics</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIBrandEngine;

