import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../context/StoreContext';

const CartPanel = () => {
  const navigate = useNavigate();
  const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, formatPrice, cartTotal } = useStore();

  if (!isCartOpen) return null;

  return (
    <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 300, display: 'flex', justifyContent: 'flex-end'}} onClick={() => setIsCartOpen(false)}>
      <div style={{width: '400px', maxWidth: '100vw', backgroundColor: 'var(--bg-surface)', height: '100%', boxShadow: '-4px 0 25px rgba(0,0,0,0.15)', display: 'flex', flexDirection: 'column', animation: 'slideIn 0.3s forwards'}} onClick={e => e.stopPropagation()}>
        <div style={{padding: '24px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h2 style={{fontSize: '20px', fontWeight: 700, fontFamily: 'var(--font-brand)'}}>Tu Carrito</h2>
          <button onClick={() => setIsCartOpen(false)} style={{background: 'none', border: 'none', fontSize: '28px', cursor: 'pointer', color: 'var(--text-muted)', lineHeight: 1}}>&times;</button>
        </div>
        
        <div style={{flex: 1, overflowY: 'auto', padding: '24px'}}>
          {cartItems.length === 0 ? (
            <div style={{textAlign: 'center', color: 'var(--text-muted)', marginTop: '80px'}}>
              <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" style={{margin: '0 auto 16px', opacity: 0.5}}><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <p style={{fontSize: '16px'}}>Tu carrito está vacío.</p>
            </div>
          ) : (
            cartItems.map((item, idx) => (
              <div key={idx} style={{display: 'flex', gap: '16px', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid var(--border)'}}>
                <div className={`row-thumb ${item.product.imageClass}`} style={{width: '70px', height: '70px', borderRadius: '12px'}}></div>
                <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                  <div>
                    <div style={{fontWeight: 600, fontSize: '14px', marginBottom: '4px', lineHeight: 1.2}}>{item.product.name}</div>
                    <div style={{color: 'var(--text-muted)', fontSize: '12px'}}>{item.product.category}</div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginTop: '12px'}}>
                     <button onClick={() => updateQuantity(item.product.id, -1)} style={{width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-strong)', borderRadius: '6px', background: 'transparent', cursor: 'pointer', fontWeight: 'bold'}}>-</button>
                     <span style={{fontSize: '14px', fontWeight: 600, width: '16px', textAlign: 'center'}}>{item.quantity}</span>
                     <button onClick={() => updateQuantity(item.product.id, 1)} style={{width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-strong)', borderRadius: '6px', background: 'transparent', cursor: 'pointer', fontWeight: 'bold'}}>+</button>
                  </div>
                </div>
                <div style={{fontWeight: 600, fontSize: '15px', fontFamily: 'var(--font-mono)'}}>
                  {formatPrice(item.product.price * item.quantity)}
                </div>
              </div>
            ))
          )}
        </div>

        <div style={{padding: '24px', borderTop: '1px solid var(--border)', background: 'var(--bg-page)'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
            <span style={{fontSize: '16px', color: 'var(--text-secondary)'}}>Subtotal</span>
            <span style={{fontSize: '16px', fontWeight: 600, fontFamily: 'var(--font-mono)'}}>{formatPrice(cartTotal)}</span>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '24px'}}>
            <span style={{fontSize: '18px', fontWeight: 700}}>Total a Pagar</span>
            <span style={{fontSize: '22px', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--accent-text)'}}>{formatPrice(cartTotal)}</span>
          </div>
          <button 
            className="detail-cta" 
            style={{width: '100%', padding: '16px', fontSize: '16px', opacity: cartItems.length === 0 ? 0.5 : 1, cursor: cartItems.length === 0 ? 'not-allowed' : 'pointer'}} 
            disabled={cartItems.length === 0}
            onClick={() => {
              setIsCartOpen(false);
              navigate('/checkout', { state: { cartItems, cartTotal } });
            }}
          >
            Proceder al Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPanel;
