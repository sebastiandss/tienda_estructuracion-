import React from 'react';
import { useStore } from '../../context/StoreContext';

const ProductRow = ({ product }) => {
  const { activeProduct, setActiveProduct, savedItems, toggleSaved, formatPrice, handleAddToCart } = useStore();

  return (
    <div 
      className={`product-row ${activeProduct?.id === product.id ? 'active' : ''} ${product.tags.some(t => t.type === 'new') ? 'new' : ''}`}
      onClick={() => setActiveProduct(product)}
    >
      <div className="row-check"><input type="checkbox" onClick={e => e.stopPropagation()}/></div>
      <div className={`row-star ${savedItems.has(product.id) ? 'starred' : ''}`} onClick={(e) => toggleSaved(e, product.id)}>
        {savedItems.has(product.id) ? '★' : '☆'}
      </div>
      <div className={`row-thumb ${product.imageClass}`}></div>
      <div className="row-name">{product.name}</div>
      <div className="row-tags">
        {product.tags.map((tag, idx) => (
          <span key={idx} className={`tag tag-${tag.type}`}>{tag.label}</span>
        ))}
      </div>
      <div className="row-desc">
        <b>{product.description.split('·')[0]}</b> {product.description.includes('·') && '· ' + product.description.split('·')[1]}
      </div>
      <div className="row-price">
        {formatPrice(product.price)}
        {product.originalPrice && <span className="original">{formatPrice(product.originalPrice)}</span>}
      </div>
      <div className="row-action">
        <button className="add-btn" title="Agregar al carrito" onClick={(e) => handleAddToCart(e, product)}>+</button>
      </div>
    </div>
  );
};

export default ProductRow;
