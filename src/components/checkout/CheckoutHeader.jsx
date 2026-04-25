import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutHeader = () => {
  return (
    <header style={{ padding: '20px 40px', backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/" style={{ fontFamily: 'var(--font-brand)', fontSize: '24px', color: 'var(--text-primary)', textDecoration: 'none', letterSpacing: '-0.5px' }}>
        mer<span style={{color: 'var(--accent)'}}>c</span>
      </Link>
      <div style={{ color: 'var(--text-muted)', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Checkout Seguro
      </div>
    </header>
  );
};

export default CheckoutHeader;
