import React from 'react';
import { useStore } from '../../context/StoreContext';

const MobileNav = () => {
  const { currentView, setCurrentView, isCartOpen, setIsCartOpen, totalCartItems } = useStore();

  return (
    <nav className="mobile-nav">
      <button className={`mnav-item ${currentView === 'catalog' && !isCartOpen ? 'active' : ''}`} onClick={() => { setCurrentView('catalog'); setIsCartOpen(false); }}>
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
        Inicio
      </button>
      <button className={`mnav-item ${currentView === 'favorites' && !isCartOpen ? 'active' : ''}`} onClick={() => { setCurrentView('favorites'); setIsCartOpen(false); }}>
        <svg fill={currentView === 'favorites' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        Favoritos
      </button>
      <button className={`mnav-item ${isCartOpen ? 'active' : ''}`} onClick={() => setIsCartOpen(true)} style={{position: 'relative'}}>
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        Carrito
        {totalCartItems > 0 && <span style={{position: 'absolute', top: '2px', right: '12px', background: 'var(--accent)', color: 'white', width: '14px', height: '14px', borderRadius: '50%', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{totalCartItems}</span>}
      </button>
      <button className={`mnav-item ${currentView === 'saved' && !isCartOpen ? 'active' : ''}`} onClick={() => { setCurrentView('saved'); setIsCartOpen(false); }}>
        <svg fill={currentView === 'saved' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        Guardados
      </button>
    </nav>
  );
};

export default MobileNav;
