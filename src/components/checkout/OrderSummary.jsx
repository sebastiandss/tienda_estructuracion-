import React from 'react';

const OrderSummary = ({ cartItems, cartTotal, isProcessing, formatPrice }) => {
  return (
    <div style={{ flex: '1 1 400px', backgroundColor: 'var(--bg-surface)', padding: '32px', borderRadius: 'var(--radius)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', position: 'sticky', top: '40px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '24px' }}>Resumen de la Orden</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px', maxHeight: '40vh', overflowY: 'auto', paddingRight: '8px' }}>
        {cartItems.map((item, idx) => (
          <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div className={`row-thumb ${item.product.imageClass}`} style={{ width: '50px', height: '50px', borderRadius: '8px' }}></div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: 600, lineHeight: 1.2 }}>{item.product.name}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Cant: {item.quantity}</div>
            </div>
            <div style={{ fontSize: '13px', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
              {formatPrice(item.product.price * item.quantity)}
            </div>
          </div>
        ))}
      </div>

      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '14px' }}>
          <span>Subtotal</span>
          <span>{formatPrice(cartTotal)}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '14px' }}>
          <span>Envío</span>
          <span>Gratis</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '18px', marginTop: '8px', paddingTop: '8px', borderTop: '1px solid var(--border)' }}>
          <span>Total</span>
          <span style={{ color: 'var(--accent-text)', fontFamily: 'var(--font-mono)' }}>{formatPrice(cartTotal)}</span>
        </div>
      </div>

      <button 
        type="submit"
        form="checkout-form"
        disabled={cartItems.length === 0 || isProcessing}
        style={{ 
          width: '100%', padding: '16px', marginTop: '24px', borderRadius: '8px', 
          backgroundColor: isProcessing ? 'var(--text-muted)' : 'var(--accent)', 
          color: 'white', fontWeight: 600, fontSize: '16px', border: 'none', 
          cursor: (cartItems.length === 0 || isProcessing) ? 'not-allowed' : 'pointer',
          transition: 'background-color 0.2s', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px'
        }}
      >
        {isProcessing ? (
          <>
            <svg className="spinner" viewBox="0 0 50 50" style={{ width: '20px', height: '20px', animation: 'spin 1s linear infinite' }}>
              <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="31.4 31.4" />
            </svg>
            Procesando Pago...
          </>
        ) : (
          `Pagar ${formatPrice(cartTotal)}`
        )}
      </button>
    </div>
  );
};

export default OrderSummary;
