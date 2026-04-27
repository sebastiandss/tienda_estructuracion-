import React from 'react';
import { useStore } from '../../context/StoreContext';
import CartItemRow from './CartItemRow';

const SHIPPING_OPTIONS = [
  { id: 'standard', label: 'Estándar', subtitle: '5-7 días hábiles', price: 0 },
  { id: 'express', label: 'Express', subtitle: '2-3 días hábiles', price: 18000 },
  { id: 'next_day', label: 'Día siguiente', subtitle: 'Mañana antes de las 12pm', price: 35000 },
];

const CartArticles = ({ selectedShipping, onShippingChange }) => {
  const { cartItems, setCartItems, formatPrice } = useStore();

  const selectedOption = SHIPPING_OPTIONS.find(o => o.id === selectedShipping);

  return (
    <div className="cart-articles">
      {/* Header */}
      <div className="cart-articles-header">
        <h2 className="cart-articles-title">
          Artículos ({cartItems.length})
        </h2>
        <button
          className="cart-clear-btn"
          onClick={() => setCartItems([])}
          disabled={cartItems.length === 0}
        >
          Vaciar carrito
        </button>
      </div>

      {/* Items */}
      <div className="cart-items-list">
        {cartItems.length === 0 ? (
          <div className="cart-empty-state">
            <span style={{ fontSize: 40 }}>🛒</span>
            <p>Tu carrito está vacío.</p>
          </div>
        ) : (
          cartItems.map((item, idx) => (
            <CartItemRow key={`${item.product.id}-${idx}`} item={item} />
          ))
        )}
      </div>

      {/* Shipping */}
      <div className="cart-shipping">
        <h3 className="cart-shipping-title">Método de envío</h3>
        <div className="cart-shipping-options">
          {SHIPPING_OPTIONS.map(option => (
            <label
              key={option.id}
              className={`cart-shipping-option ${selectedShipping === option.id ? 'selected' : ''}`}
            >
              <input
                type="radio"
                name="shipping"
                value={option.id}
                checked={selectedShipping === option.id}
                onChange={() => onShippingChange(option.id)}
              />
              <div className="cart-shipping-info">
                <span className="cart-shipping-label">{option.label}</span>
                <span className="cart-shipping-sub">{option.subtitle}</span>
              </div>
              <span className="cart-shipping-price">
                {option.price === 0 ? 'Gratis' : formatPrice(option.price)}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export { SHIPPING_OPTIONS };
export default CartArticles;
