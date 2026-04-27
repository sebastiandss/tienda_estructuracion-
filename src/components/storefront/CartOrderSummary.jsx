import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
const DISCOUNT = 170000;
const SHIPPING_PRICES = { standard: 0, express: 18000, next_day: 35000 };

const CartOrderSummary = ({ selectedShipping = 'standard' }) => {
  const { cartItems, cartTotal, formatPrice, setCurrentView } = useStore();
  const navigate = useNavigate();
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  const shippingCost = SHIPPING_PRICES[selectedShipping] ?? 0;
  const discount = discountApplied ? DISCOUNT : 0;
  const total = cartTotal - discount + shippingCost;

  const handleApplyDiscount = () => {
    if (discountCode.trim().toUpperCase() === 'MERC10') {
      setDiscountApplied(true);
    }
  };

  const handleCheckout = () => {
    navigate('/checkout', { state: { cartItems, cartTotal: total } });
  };

  return (
    <aside className="cart-order-summary">
      <h2 className="cart-summary-title">Resumen del pedido</h2>

      <div className="cart-summary-rows">
        <div className="cart-summary-row">
          <span className="cart-summary-label">
            Subtotal ({cartItems.reduce((s, i) => s + i.quantity, 0)} art.)
          </span>
          <span className="cart-summary-value">{formatPrice(cartTotal)}</span>
        </div>

        {discountApplied && (
          <div className="cart-summary-row discount">
            <span className="cart-summary-label">Descuento aplicado</span>
            <span className="cart-summary-value discount">−{formatPrice(DISCOUNT)}</span>
          </div>
        )}

        <div className="cart-summary-row">
          <span className="cart-summary-label">Envío</span>
          <span className={`cart-summary-value ${shippingCost === 0 ? 'free' : ''}`}>
            {shippingCost === 0 ? 'Gratis' : formatPrice(shippingCost)}
          </span>
        </div>
      </div>

      <div className="cart-summary-divider" />

      <div className="cart-summary-total">
        <span>Total</span>
        <span className="cart-summary-total-price">{formatPrice(total)}</span>
      </div>

      {/* Discount code */}
      <div className="cart-discount-wrap">
        <input
          className="cart-discount-input"
          placeholder="Código de descuento"
          value={discountCode}
          onChange={e => setDiscountCode(e.target.value)}
          disabled={discountApplied}
        />
        <button
          className="cart-discount-btn"
          onClick={handleApplyDiscount}
          disabled={discountApplied || !discountCode.trim()}
        >
          {discountApplied ? '✓' : 'Aplicar'}
        </button>
      </div>
      {discountApplied && (
        <p className="cart-discount-msg">✓ Código MERC10 aplicado</p>
      )}

      <button
        className="cart-checkout-btn"
        disabled={cartItems.length === 0}
        onClick={handleCheckout}
      >
        Ir al pago →
      </button>

      <button className="cart-continue-btn" onClick={() => setCurrentView('catalog')}>
        Seguir comprando
      </button>

      <p className="cart-security-note">
        🔒 Pago seguro con SSL · Devolución gratuita 30 días
      </p>
    </aside>
  );
};

export default CartOrderSummary;
