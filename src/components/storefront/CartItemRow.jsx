import React from 'react';
import { useStore } from '../../context/StoreContext';

const CartItemRow = ({ item }) => {
  const { updateQuantity, toggleSaved, formatPrice } = useStore();
  const { product, quantity } = item;

  return (
    <div className="cart-item-row">
      <div className={`cart-item-thumb ${product.imageClass}`}></div>

      <div className="cart-item-info">
        <div className="cart-item-name">{product.name}</div>
        <div className="cart-item-meta">
          {product.category}
          {product.tags.length > 0 && (
            <span className={`tag tag-${product.tags[0].type}`} style={{ marginLeft: 8 }}>
              {product.tags[0].label}
            </span>
          )}
        </div>

        <div className="cart-item-actions">
          <div className="cart-qty-control">
            <button
              className="cart-qty-btn"
              onClick={() => updateQuantity(product.id, -1)}
            >−</button>
            <span className="cart-qty-value">{quantity}</span>
            <button
              className="cart-qty-btn"
              onClick={() => updateQuantity(product.id, 1)}
            >+</button>
          </div>
          <button
            className="cart-action-link"
            onClick={() => updateQuantity(product.id, -quantity)}
          >
            Eliminar
          </button>
          <button
            className="cart-action-link accent"
            onClick={(e) => toggleSaved(e, product.id)}
          >
            Guardar
          </button>
        </div>
      </div>

      <div className="cart-item-price">
        {formatPrice(product.price * quantity)}
      </div>
    </div>
  );
};

export default CartItemRow;
