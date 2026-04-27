import React from 'react';
import { useStore } from '../../context/StoreContext';

const Header = () => {
  const { searchQuery, setSearchQuery, showToast, setCurrentView, totalCartItems } = useStore();

  return (
    <header className="header">
      <div className="header-logo">mer<span>c</span></div>

      <div className="search-wrap">
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        <input 
          type="text" 
          placeholder="Buscar productos de tecnología..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <svg onClick={() => setSearchQuery('')} width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{color: 'var(--text-muted)', cursor: 'pointer'}}><path d="M18 6L6 18M6 6l12 12"/></svg>
        )}
      </div>

      <div className="header-actions">
        <button className="icon-btn" title="Notificaciones" onClick={() => showToast('No tienes nuevas notificaciones', 'info')}>
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          <span className="badge"></span>
        </button>
        <button className="icon-btn" title="Carrito" onClick={() => setCurrentView('cart')}>
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          {totalCartItems > 0 && <span className="badge" style={{display: 'block'}}></span>}
        </button>
        <div className="avatar">MR</div>
      </div>
    </header>
  );
};

export default Header;
