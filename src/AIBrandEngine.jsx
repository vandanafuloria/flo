import React, { useState } from 'react';
import './AIBrandEngine.css';

const AIBrandEngine = ({ showExtras = true }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('meera');

  if (!showExtras) return null;

  const tabs = [
    { id: 'meera',    label: 'Meera'    },
    { id: 'chik',     label: 'Chik'     },
    { id: 'fairever', label: 'Fairever' },
    { id: 'spinz',    label: 'Spinz'    },
    { id: 'karthika', label: 'Karthika' },
    { id: 'raaga',    label: 'Raaga'    },
  ];

  const content = {
    meera: {
      title: 'Meera — Herbal Hair Care',
      category: 'Hair Care · Herbal',
      stats: [
        { value: 'Herbal Shampoo',  label: 'Shikakai & Hibiscus blend' },
        { value: 'Hair Oil',        label: 'Nourishing scalp treatment' },
        { value: 'Hair Wash',       label: 'Traditional powder formula' },
      ],
      highlights: [
        'Trusted herbal haircare for 30+ years',
        'Key ingredients: Shikakai, Amla, Hibiscus',
        'Reduces hairfall & promotes growth',
        'Available in shampoo, oil & powder',
      ],
    },
    chik: {
      title: 'Chik — Everyday Shampoo',
      category: 'Hair Care · Everyday',
      stats: [
        { value: 'Egg Protein',     label: 'Strengthens hair shaft' },
        { value: '650ml / 1000ml',  label: 'Value family pack sizes' },
        { value: 'Hairfall Control', label: 'Clinically tested formula' },
      ],
      highlights: [
        'Affordable daily-use shampoo range',
        'Protein-enriched for stronger hair',
        'Variants: Hairfall, Jasmine, Blackshine',
        'Best value-for-money in hair care',
      ],
    },
    fairever: {
      title: 'Fairever — Skin Brightening',
      category: 'Skin Care · Brightening',
      stats: [
        { value: 'Saffron',         label: 'Natural glow booster' },
        { value: 'Milk & Rosehip',  label: 'Moisturising skin blend' },
        { value: 'SPF Protection',  label: 'Sun defence in daily cream' },
      ],
      highlights: [
        'Visible brightness in 4 weeks',
        'Key ingredients: Saffron, Milk, Rosehip Oil',
        'Lightweight, non-greasy formula',
        'Gentle enough for daily use',
      ],
    },
    spinz: {
      title: 'Spinz — Deo & Fragrance',
      category: 'Deodorant · Fragrance',
      stats: [
        { value: '24hr Fresh',      label: 'Long-lasting odour protection' },
        { value: 'Bulgarian Rose',  label: 'Signature women\'s fragrance' },
        { value: 'BB Cream',        label: 'Brightening face coverage' },
      ],
      highlights: [
        'Premium deodorant for men & women',
        'Multiple fragrance variants available',
        'Spinz BB cream for instant glow',
        'Alcohol-free gentle formulas',
      ],
    },
    karthika: {
      title: 'Karthika — Hair Fall Shield',
      category: 'Hair Care · Specialised',
      stats: [
        { value: 'Shikakai',        label: 'Traditional hair cleanser' },
        { value: 'Hibiscus',        label: 'Strengthens & adds shine' },
        { value: '650ml',           label: 'Value pack shampoo' },
      ],
      highlights: [
        'Clinically proven hairfall reduction',
        'Rooted in South Indian hair rituals',
        'Suitable for men & women',
        'No harsh sulphates in key variants',
      ],
    },
    raaga: {
      title: 'Raaga Professional',
      category: 'Skin Care · Professional',
      stats: [
        { value: 'De-Tan Pack',     label: 'Kojic acid + Milk formula' },
        { value: 'Salon Quality',   label: 'Professional-grade at home' },
        { value: '500g Value',      label: 'Large professional size' },
      ],
      highlights: [
        'Professional skin treatments at home',
        'Visible tan removal in one use',
        'Kojic acid for even skin tone',
        'Full range: scrubs, packs & creams',
      ],
    },
  };

  const current = content[activeTab];

  return (
    <div className={`ai-brand-engine ${isExpanded ? 'expanded' : ''}`}>
      {!isExpanded ? (
        <button
          className="ai-brand-engine-trigger"
          onClick={() => setIsExpanded(true)}
          aria-label="Explore Brands"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
        </button>
      ) : (
        <div className="ai-brand-engine-panel">
          {/* Header */}
          <div className="panel-header">
            <div className="header-left">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              <div>
                <h3 className="panel-title">CavinKart</h3>
                <p className="panel-subtitle">25+ Brands · One Store · Trusted Since 1983</p>
              </div>
            </div>
            <button className="panel-close-btn" onClick={() => setIsExpanded(false)} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
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
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="panel-content">
            <div className="content-header-row">
              <h4 className="content-title">{current.title}</h4>
              <span className="content-category">{current.category}</span>
            </div>

            <div className="stats-grid">
              {current.stats.map((item, i) => (
                <div key={i} className="stat-card">
                  <div className="stat-value">{item.value}</div>
                  <div className="stat-label">{item.label}</div>
                </div>
              ))}
            </div>

            <ul className="highlights-list">
              {current.highlights.map((h, i) => (
                <li key={i} className="highlight-item">
                  <span className="highlight-dot" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIBrandEngine;
