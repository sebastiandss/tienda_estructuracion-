import React from 'react';
import { useStore } from '../../context/StoreContext';

const SavedGrid = () => {
  const { savedItems, store, formatPrice, handleAddToCart } = useStore();

  const savedProducts = store.products.filter(p => savedItems.has(p.id));

  return (
    <div className="saved-grid-wrap">
      <div className="saved-header">
        <h2 className="saved-title">Guardados</h2>
        <span className="saved-count">{savedProducts.length} artículos</span>
      </div>

      {savedProducts.length === 0 ? (
        <div style={{textAlign: 'center', marginTop: '60px', color: 'var(--text-muted)'}}>
          Aún no tienes artículos guardados.
        </div>
      ) : (
        <div className="saved-grid">
          {savedProducts.map(product => (
            <div key={product.id} className="saved-card">
              <div className={`saved-card-thumb ${product.imageClass}`}>
                {product.tags.length > 0 && (
                  <span className={`saved-card-tag ${product.tags[0].type}`}>
                    {product.tags[0].label}
                  </span>
                )}
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
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedGrid;
