import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutForm = ({ cartItemsLength, handlePayment }) => {
  return (
    <div style={{ flex: '1 1 600px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {cartItemsLength === 0 && (
        <div style={{ padding: '20px', backgroundColor: '#FEF2F2', color: '#B91C1C', borderRadius: 'var(--radius-sm)' }}>
          No hay productos en tu orden. <Link to="/">Volver a la tienda</Link>.
        </div>
      )}

      <form id="checkout-form" onSubmit={handlePayment} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Contacto */}
        <section style={{ backgroundColor: 'var(--bg-surface)', padding: '32px', borderRadius: 'var(--radius)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '20px' }}>Información de Contacto</h2>
          <div style={{ display: 'grid', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '6px' }}>Correo Electrónico</label>
              <input type="email" required placeholder="correo@ejemplo.com" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-strong)', outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s' }} />
            </div>
          </div>
        </section>

        {/* Envío */}
        <section style={{ backgroundColor: 'var(--bg-surface)', padding: '32px', borderRadius: 'var(--radius)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '20px' }}>Dirección de Envío</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '6px' }}>Nombre Completo</label>
              <input type="text" required placeholder="Juan Pérez" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-strong)', outline: 'none', fontFamily: 'inherit' }} />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '6px' }}>Dirección</label>
              <input type="text" required placeholder="Calle Principal 123" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-strong)', outline: 'none', fontFamily: 'inherit' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '6px' }}>Ciudad</label>
              <input type="text" required placeholder="Bogotá" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-strong)', outline: 'none', fontFamily: 'inherit' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '6px' }}>Código Postal</label>
              <input type="text" placeholder="110111" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-strong)', outline: 'none', fontFamily: 'inherit' }} />
            </div>
          </div>
        </section>

        {/* Pago */}
        <section style={{ backgroundColor: 'var(--bg-surface)', padding: '32px', borderRadius: 'var(--radius)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '20px' }}>Pago</h2>
          <div style={{ padding: '20px', border: '1px solid var(--accent)', borderRadius: '8px', backgroundColor: 'var(--accent-light)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <input type="radio" checked readOnly style={{ accentColor: 'var(--accent)' }} />
            <span style={{ fontWeight: 500, color: 'var(--accent-text)' }}>Tarjeta de Crédito</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '6px' }}>Número de Tarjeta</label>
              <input type="text" required placeholder="0000 0000 0000 0000" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-strong)', outline: 'none', fontFamily: 'var(--font-mono)' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '6px' }}>Expiración</label>
              <input type="text" required placeholder="MM/AA" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-strong)', outline: 'none', fontFamily: 'inherit' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '6px' }}>CVC</label>
              <input type="text" required placeholder="123" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-strong)', outline: 'none', fontFamily: 'inherit' }} />
            </div>
          </div>
        </section>

      </form>
    </div>
  );
};

export default CheckoutForm;
