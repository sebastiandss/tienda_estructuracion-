import React from 'react';
import { useStore } from '../../context/StoreContext';

const DetailPanel = () => {
  const { activeProduct, selectedColor, setSelectedColor, handleAddToCart, toggleSaved, savedItems, toggleFavorite, favorites, formatPrice } = useStore();

  if (!activeProduct) {
    return (
      <aside className="detail-panel">
        <div style={{textAlign: 'center', color: 'var(--text-muted)', marginTop: '40px'}}>
          Selecciona un producto para ver los detalles.
        </div>
      </aside>
    );
  }

  return (
    <aside className="detail-panel">
      <div className={`detail-thumb ${activeProduct.imageClass}`}></div>
      <div style={{display:'flex', gap:'6px', marginBottom:'8px'}}>
        {activeProduct.tags.map((tag, idx) => (
          <span key={idx} className={`tag tag-${tag.type}`}>{tag.label}</span>
        ))}
      </div>
      <div className="detail-name">{activeProduct.name}</div>
      <div className="detail-cat">Tecnología · {activeProduct.category}</div>
      <div className="detail-price">{formatPrice(activeProduct.price)}</div>
      <div className="detail-desc">
        {activeProduct.description}
      </div>
      
      {/* SELECTOR DE COLORES INTERACTIVO */}
      <div style={{display:'flex', gap:'8px', marginBottom:'20px'}}>
        {['#1a1a1a', '#e5e5e5', '#264653'].map((color, idx) => (
          <button 
            key={idx} 
            onClick={() => setSelectedColor(idx)}
            style={{
              width:'24px', height:'24px', borderRadius:'50%', background:color, 
              border: selectedColor === idx ? '3px solid var(--accent)' : '2px solid var(--border)',
              cursor: 'pointer', transition: 'all 0.15s ease',
              boxShadow: selectedColor === idx ? '0 0 0 2px rgba(12,110,80,0.2)' : 'none'
            }}
            title="Seleccionar color"
          ></button>
        ))}
      </div>
      
      <button className="detail-cta" onClick={(e) => handleAddToCart(e, activeProduct)}>Agregar al carrito</button>
      <button 
        className="detail-secondary" 
        onClick={(e) => toggleSaved(e, activeProduct.id)}
        style={{
          background: savedItems.has(activeProduct.id) ? 'var(--bg-selected)' : 'transparent',
          color: savedItems.has(activeProduct.id) ? 'var(--text-primary)' : 'var(--text-secondary)'
        }}
      >
        {savedItems.has(activeProduct.id) ? '✓ Guardado' : 'Guardar para después'}
      </button>

      <button 
        className="detail-secondary" 
        onClick={(e) => toggleFavorite(e, activeProduct.id)}
        style={{
          marginTop: '8px',
          background: favorites.has(activeProduct.id) ? '#FCE7F3' : 'transparent',
          color: favorites.has(activeProduct.id) ? '#BE185D' : 'var(--text-secondary)',
          border: favorites.has(activeProduct.id) ? '1px solid #FBCFE8' : '1px solid var(--border)'
        }}
      >
        {favorites.has(activeProduct.id) ? '♥ En Favoritos' : '♡ Agregar a Favoritos'}
      </button>
      
      <div style={{marginTop:'16px', paddingTop:'16px', borderTop:'1px solid var(--border)', fontSize:'12px', color:'var(--text-muted)', display:'flex', justifyContent:'space-between'}}>
        <span>⭐ {activeProduct.rating} ({activeProduct.reviews} reseñas)</span>
        <span>Envío gratis</span>
      </div>
    </aside>
  );
};

export default DetailPanel;
