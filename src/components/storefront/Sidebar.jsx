import React from 'react';
import { useStore } from '../../context/StoreContext';

const Sidebar = () => {
  const { currentView, setCurrentView, isCartOpen, setIsCartOpen, totalCartItems, savedItems, favorites, selectedCategory, setSelectedCategory, store, categoriesCounts } = useStore();

  return (
    <nav className="sidebar">
      <button className="compose-btn" onClick={() => setCurrentView('favorites')}>
        <svg width="16" height="16" fill={currentView === 'favorites' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        <span>Favoritos</span>
        <span style={{marginLeft: 'auto', background: 'white', color: 'var(--accent)', borderRadius: '10px', padding: '1px 6px', fontSize: '11px'}}>{favorites.size}</span>
      </button>

      <span className="nav-section">Tienda</span>
      <button className={`nav-item ${currentView === 'catalog' ? 'active' : ''}`} onClick={() => setCurrentView('catalog')}>
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        <span>Inicio</span>
      </button>
      <button className={`nav-item ${isCartOpen ? 'active' : ''}`} onClick={() => setIsCartOpen(true)}>
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <span>Mi carrito</span>
        {totalCartItems > 0 && <span className="count">{totalCartItems}</span>}
      </button>
      <button className="nav-item">
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
        <span>Pedidos</span>
      </button>
      <button className={`nav-item ${currentView === 'saved' ? 'active' : ''}`} onClick={() => setCurrentView('saved')}>
        <svg width="16" height="16" fill={currentView === 'saved' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        <span>Guardados</span>
        {savedItems.size > 0 && <span className="count">{savedItems.size}</span>}
      </button>

      <div className="sidebar-divider"></div>
      <span className="nav-section">Categorías Tech</span>

      <button 
        className={`nav-item ${selectedCategory === 'Todo' ? 'active' : ''}`}
        onClick={() => setSelectedCategory('Todo')}
      >
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        <span>Todo el catálogo</span>
        <span className="count">{store.products.length}</span>
      </button>

      {Object.entries(categoriesCounts).map(([cat, count]) => (
        <button 
          key={cat} 
          className={`nav-item ${selectedCategory === cat ? 'active' : ''}`}
          onClick={() => setSelectedCategory(cat)}
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          <span>{cat}</span>
          <span className="count">{count}</span>
        </button>
      ))}

    </nav>
  );
};

export default Sidebar;
