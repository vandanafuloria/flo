import React, { useState } from 'react';
import './AIBrandEngine.css';

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const Sparkline = ({ data }) => {
  const [hovered, setHovered] = useState(null);
  const w = 200, h = 48, pad = 6;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const pts = data.map((v, i) => ({
    x: pad + (i / (data.length - 1)) * (w - pad * 2),
    y: h - pad - ((v - min) / range) * (h - pad * 2),
    v, i,
  }));
  const pathD = 'M ' + pts.map(p => `${p.x},${p.y}`).join(' L ');
  const areaD = `${pathD} L ${pts[pts.length-1].x},${h} L ${pts[0].x},${h} Z`;

  return (
    <div style={{ position: 'relative' }}>
      {hovered !== null && (
        <div style={{
          position: 'absolute', top: 0,
          left: `${(pts[hovered].x / w) * 100}%`,
          transform: 'translateX(-50%)',
          background: '#0B4DA9', color: '#fff',
          fontSize: '9px', fontWeight: 600,
          padding: '3px 7px', borderRadius: '5px',
          whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: 10,
        }}>
          {MONTHS[hovered]}: {data[hovered] * 6 + 30} orders
        </div>
      )}
      <svg width="100%" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ display: 'block' }}>
        <defs>
          <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0B4DA9" stopOpacity="0.12"/>
            <stop offset="100%" stopColor="#0B4DA9" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path d={areaD} fill="url(#sparkGrad)"/>
        <path d={pathD} fill="none" stroke="#0B4DA9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        {pts.map((p) => (
          <circle key={p.i} cx={p.x} cy={p.y}
            r={hovered === p.i ? 3.5 : 2}
            fill={hovered === p.i ? '#0B4DA9' : '#fff'}
            stroke="#0B4DA9" strokeWidth="1.4"
            style={{ cursor: 'pointer', transition: 'r 0.15s' }}
            onMouseEnter={() => setHovered(p.i)}
            onMouseLeave={() => setHovered(null)}
          />
        ))}
      </svg>
    </div>
  );
};

const AIBrandEngine = ({ showExtras = true }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('ergo');

  if (!showExtras) return null;

  const tabs = [
    { id: 'ergo',       label: 'Ergo'         },
    { id: 'supersoft',  label: 'Super Soft'   },
    { id: 'ortho',      label: 'Ortho'        },
    { id: 'bedsheets',  label: 'Bedsheets'    },
    { id: 'pillows',    label: 'Pillows'      },
    { id: 'bundles',    label: 'Bundles'      },
  ];

  const content = {
    ergo: {
      title: 'Flo Ergo Mattress',
      category: 'Mattresses · Ergonomic Support',
      metrics: { purchases: 18420, reviews: 5630, refundRate: 0.8, qualityScore: 99,
        trend: [60, 72, 85, 95, 108, 120, 135, 148, 162, 175, 190, 210] },
      stats: [
        { value: '7-Zone',  label: '7-zone targeted body support' },
        { value: '100N',    label: '100-night free trial' },
        { value: '10 Yr',   label: '10-year warranty' },
      ],
      highlights: [
        '7-zone ergonomic support for spine alignment',
        'Adaptive foam responds to your body shape',
        '100-night risk-free trial — return if not satisfied',
        'Certified by orthopedists for back pain relief',
      ],
    },
    supersoft: {
      title: 'Flo Super Soft Mattress',
      category: 'Mattresses · Plush Comfort',
      metrics: { purchases: 14280, reviews: 4120, refundRate: 0.9, qualityScore: 98,
        trend: [45, 58, 68, 80, 92, 105, 118, 130, 142, 155, 168, 182] },
      stats: [
        { value: 'Plush',   label: 'Cloud-like plush comfort layer' },
        { value: '6-inch',  label: 'Available in 6 & 8 inch' },
        { value: 'Cool',    label: 'AirFlow cooling technology' },
      ],
      highlights: [
        'Ultra-plush memory foam for deep pressure relief',
        'AirFlow channels keep you cool all night',
        'Ideal for side sleepers & light sleepers',
        'CertiPUR-US certified foam — safe & non-toxic',
      ],
    },
    ortho: {
      title: 'Flo Ortho Mattress',
      category: 'Mattresses · Orthopedic Support',
      metrics: { purchases: 11540, reviews: 3280, refundRate: 0.7, qualityScore: 99,
        trend: [40, 52, 62, 74, 88, 100, 112, 125, 138, 150, 162, 178] },
      stats: [
        { value: 'Firm',    label: 'Firm ortho support core' },
        { value: 'Back',    label: 'Recommended for back pain' },
        { value: '10 Yr',   label: '10-year manufacturer warranty' },
      ],
      highlights: [
        'High-density ortho foam for firm spinal support',
        'Medically recommended for chronic back pain',
        'Dual-sided — flip for soft or firm feel',
        'Anti-sagging technology retains shape for years',
      ],
    },
    bedsheets: {
      title: 'Flo Bedsheets Collection',
      category: 'Bedding · Sheets & Covers',
      metrics: { purchases: 22800, reviews: 6940, refundRate: 1.1, qualityScore: 97,
        trend: [70, 85, 95, 110, 125, 140, 152, 165, 178, 192, 205, 220] },
      stats: [
        { value: '500TC',   label: '500 thread count pure cotton' },
        { value: 'Soft',    label: 'Buttery smooth texture' },
        { value: 'Easy',    label: 'Easy-fit elastic all around' },
      ],
      highlights: [
        '100% pure cotton — breathable & skin-friendly',
        '500 thread count for hotel-like luxury feel',
        'Deep-pocket elastic fits up to 14-inch mattresses',
        'Pre-washed — no shrinking after multiple washes',
      ],
    },
    pillows: {
      title: 'Flo Pillow Collection',
      category: 'Bedding · Pillows & Bolsters',
      metrics: { purchases: 16350, reviews: 4820, refundRate: 1.2, qualityScore: 97,
        trend: [50, 62, 72, 85, 98, 110, 122, 135, 148, 160, 172, 185] },
      stats: [
        { value: 'Memory',  label: 'Memory foam contour pillow' },
        { value: 'Neck',    label: 'Cervical neck support design' },
        { value: 'Cool',    label: 'Cool-touch bamboo cover' },
      ],
      highlights: [
        'Contour memory foam for neck & shoulder relief',
        'Cool-touch bamboo cover — stays fresh all night',
        'Anti-microbial & dust-mite resistant filling',
        'Available in soft, medium & firm loft options',
      ],
    },
    bundles: {
      title: 'Flo Sleep Bundles',
      category: 'Bundles · Complete Sleep Sets',
      metrics: { purchases: 8920, reviews: 2640, refundRate: 0.6, qualityScore: 99,
        trend: [30, 40, 52, 65, 78, 92, 108, 122, 138, 155, 172, 195] },
      stats: [
        { value: 'Save',    label: 'Save up to 40% vs individual' },
        { value: 'Complete',label: 'Mattress + pillow + bedsheet' },
        { value: 'Trial',   label: '100-night trial on all bundles' },
      ],
      highlights: [
        'Complete sleep setup — mattress, pillow & bedsheet',
        'Save up to 40% compared to buying individually',
        'Curated by sleep experts for best combination',
        '100-night trial + 10-year warranty included',
      ],
    },
  };

  const current = content[activeTab];
  const m = current.metrics;
  const fmt = (n) => n >= 1000 ? `${(n / 1000).toFixed(1)}k` : n;

  return (
    <div className={`ai-brand-engine ${isExpanded ? 'expanded' : ''}`}>
      {!isExpanded ? (
        <button
          className="ai-brand-engine-trigger"
          onClick={() => setIsExpanded(true)}
          aria-label="Explore Collections"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
            <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
          </svg>
        </button>
      ) : (
        <div className="ai-brand-engine-panel">
          {/* Header */}
          <div className="panel-header">
            <div className="header-left">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
                <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
              </svg>
              <div>
                <h3 className="panel-title">Flo Mattress</h3>
                <p className="panel-subtitle">Sleep · Comfort · Science-backed Support</p>
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

            {/* Metric tiles */}
            <div className="metric-tiles">
              <div className="metric-tile">
                <div className="metric-icon">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                </div>
                <div className="metric-num">{fmt(m.purchases)}</div>
                <div className="metric-lbl">Purchases</div>
              </div>
              <div className="metric-tile">
                <div className="metric-icon">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <div className="metric-num">{fmt(m.reviews)}</div>
                <div className="metric-lbl">Reviews</div>
              </div>
              <div className="metric-tile">
                <div className="metric-icon">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div className="metric-num">{m.qualityScore}%</div>
                <div className="metric-lbl">Quality</div>
              </div>
              <div className="metric-tile">
                <div className="metric-icon">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.27"/>
                  </svg>
                </div>
                <div className="metric-num">{m.refundRate}%</div>
                <div className="metric-lbl">Returns</div>
              </div>
            </div>

            {/* Quality + Return rate */}
            <div className="score-row">
              <div className="score-card">
                <div className="score-arc-wrap">
                  <svg width="64" height="40" viewBox="0 0 64 40">
                    <path d="M 6 38 A 26 26 0 0 1 58 38" fill="none" stroke="#ebebeb" strokeWidth="5" strokeLinecap="round"/>
                    <path d="M 6 38 A 26 26 0 0 1 58 38" fill="none" stroke="#0B4DA9" strokeWidth="5" strokeLinecap="round"
                      strokeDasharray={`${(m.qualityScore / 100) * 81.7} 81.7`}/>
                  </svg>
                  <div className="score-arc-label">{m.qualityScore}%</div>
                </div>
                <div className="score-title">Quality</div>
                <div className="score-sub">Customer satisfaction</div>
              </div>

              <div className="score-card">
                <div className="refund-gauge">
                  <div className="refund-big">{m.refundRate}<span className="refund-pct">%</span></div>
                  <div className="refund-bar-wrap">
                    {[...Array(10)].map((_, i) => {
                      const filled = i < Math.round(m.refundRate * 10 / 10);
                      return <div key={i} className={`refund-seg ${filled ? 'filled' : ''}`}/>;
                    })}
                  </div>
                </div>
                <div className="score-title">Returns</div>
                <div className="score-sub">Avg return rate</div>
              </div>
            </div>

            {/* Purchase trend */}
            <div className="trend-card">
              <div className="trend-header">
                <span className="trend-label">Purchase trend</span>
                <span className="trend-badge">Last 12 months</span>
              </div>
              <Sparkline data={m.trend} />
              <div className="trend-axes">
                <span className="trend-axis">Jan</span>
                <span className="trend-axis">Dec</span>
              </div>
            </div>

            {/* Highlights */}
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
