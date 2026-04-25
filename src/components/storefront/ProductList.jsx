import React from 'react';
import { useStore } from '../../context/StoreContext';
import ProductRow from './ProductRow';

const ProductList = () => {
  const { 
    currentView, selectedCategory, setSelectedCategory, 
    showSortMenu, setShowSortMenu, sortOption, setSortOption, 
    store, sortedProducts, activeTab, setActiveTab, searchQuery 
  } = useStore();

  return (
    <div className="list-panel">

      {/* TOOLBAR */}
      <div className="toolbar">
        <label style={{display:'flex', alignItems:'center', gap:'6px', cursor:'pointer'}}>
          <input type="checkbox" style={{width:'16px', height:'16px', accentColor:'var(--accent)'}} />
        </label>
        <button className="toolbar-btn" onClick={() => setSelectedCategory('Todo')}>
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 6h18M6 12h12M9 18h6"/></svg>
          {selectedCategory === 'Todo' ? 'Filtrar' : `Quitar filtro (${selectedCategory})`}
        </button>
        
        <div style={{position: 'relative'}}>
          <button 
            className="toolbar-btn" 
            onClick={(e) => {
              e.stopPropagation();
              setShowSortMenu(!showSortMenu);
            }}
            style={{ borderColor: showSortMenu ? 'var(--accent)' : 'var(--border-strong)', color: showSortMenu ? 'var(--accent-text)' : 'var(--text-secondary)' }}
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5m-1.414-9.414a2 2 0 1 1 2.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
            Ordenar {sortOption !== 'default' && '•'}
          </button>
          
          {showSortMenu && (
            <div style={{position: 'absolute', top: '100%', left: 0, marginTop: '8px', background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-md)', zIndex: 100, display: 'flex', flexDirection: 'column', padding: '6px', minWidth: '160px'}}>
              <button style={{padding: '8px 12px', textAlign: 'left', background: sortOption === 'default' ? 'var(--bg-hover)' : 'transparent', color: sortOption === 'default' ? 'var(--accent-text)' : 'inherit', border: 'none', borderRadius: '4px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: sortOption === 'default' ? 600 : 400}} onClick={() => setSortOption('default')}>Por Defecto</button>
              <button style={{padding: '8px 12px', textAlign: 'left', background: sortOption === 'price-asc' ? 'var(--bg-hover)' : 'transparent', color: sortOption === 'price-asc' ? 'var(--accent-text)' : 'inherit', border: 'none', borderRadius: '4px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: sortOption === 'price-asc' ? 600 : 400}} onClick={() => setSortOption('price-asc')}>Menor Precio</button>
              <button style={{padding: '8px 12px', textAlign: 'left', background: sortOption === 'price-desc' ? 'var(--bg-hover)' : 'transparent', color: sortOption === 'price-desc' ? 'var(--accent-text)' : 'inherit', border: 'none', borderRadius: '4px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: sortOption === 'price-desc' ? 600 : 400}} onClick={() => setSortOption('price-desc')}>Mayor Precio</button>
              <button style={{padding: '8px 12px', textAlign: 'left', background: sortOption === 'name-asc' ? 'var(--bg-hover)' : 'transparent', color: sortOption === 'name-asc' ? 'var(--accent-text)' : 'inherit', border: 'none', borderRadius: '4px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: sortOption === 'name-asc' ? 600 : 400}} onClick={() => setSortOption('name-asc')}>Alfabético (A-Z)</button>
            </div>
          )}
        </div>

        <span className="toolbar-sep"></span>
        <span className="toolbar-info">
          {currentView === 'favorites' ? 'Tus Favoritos' : currentView === 'saved' ? 'Tus Guardados' : `1–${sortedProducts.length} de ${store.products.length} productos`}
        </span>
      </div>

      {/* PRODUCT LIST */}
      <div className="product-list">

        {/* Category tabs */}
        <div className="cat-tabs">
          {['Todo', 'Destacados', 'Ofertas', 'Nuevo', 'Mejor valorado'].map(tab => (
            <button 
              key={tab} 
              className={`cat-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Rows */}
        {sortedProducts.length === 0 ? (
          <div style={{padding: '40px', textAlign: 'center', color: 'var(--text-muted)'}}>
            {currentView === 'favorites' ? 'Aún no tienes productos favoritos.' : 
             currentView === 'saved' ? 'Aún no has guardado productos.' : 
             `No se encontraron productos para "${searchQuery}".`}
          </div>
        ) : (
          sortedProducts.map(product => (
            <ProductRow key={product.id} product={product} />
          ))
        )}

      </div>
    </div>
  );
};

export default ProductList;
