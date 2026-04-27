import React from 'react';

const SavedCard = ({ product, formatPrice, handleAddToCart, toggleSaved }) => {
  return (
    <div className="saved-card">
      <button 
        className="saved-remove-btn" 
        onClick={(e) => toggleSaved(e, product.id)}
        title="Eliminar de guardados"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>

      <div className={`saved-card-thumb ${product.imageClass}`}>
        {product.tags && product.tags.length > 0 && (
          <span className={`saved-card-tag ${product.tags[0].type}`}>
            {product.tags[0].label}
          </span>
        )}
        <span style={{fontSize: '40px'}}>
          {product.category === 'Audio' ? '🎧' : product.category === 'Computing' ? '💻' : '📱'}
        </span>
      </div>

      <div className="saved-card-info">
        <div className="saved-card-name">{product.name}</div>
        <div className="saved-card-price">
          {formatPrice(product.price)}
          {product.originalPrice && <span className="original">{formatPrice(product.originalPrice)}</span>}
        </div>
      </div>
      
      <button className="saved-card-btn" onClick={(e) => handleAddToCart(e, product)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default SavedCard;
