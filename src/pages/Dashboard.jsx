import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { stores } from '../data/mockData';

const Dashboard = () => {
  const [activeStore, setActiveStore] = useState(stores[0]);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      {/* Sidebar */}
      <aside style={{ width: '280px', backgroundColor: '#111827', color: 'white', padding: '2rem 1rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2.5rem', paddingLeft: '1rem' }}>Admin Panel</h2>
        
        <div style={{ marginBottom: '2rem', padding: '0 1rem' }}>
          <label style={{ display: 'block', fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.5rem' }}>Tienda Activa</label>
          <select 
            value={activeStore.id}
            onChange={(e) => setActiveStore(stores.find(s => s.id === e.target.value))}
            style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', backgroundColor: '#374151', color: 'white', border: '1px solid #4b5563', outline: 'none' }}
          >
            {stores.map(store => (
              <option key={store.id} value={store.id}>{store.name}</option>
            ))}
          </select>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <a href="#" style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', backgroundColor: '#374151', fontWeight: 500 }}>Productos</a>
          <a href="#" style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', color: '#d1d5db', fontWeight: 500 }}>Pedidos</a>
          <a href="#" style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', color: '#d1d5db', fontWeight: 500 }}>Configuración</a>
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '4rem' }}>
          <Link to={`/tienda/${activeStore.id}`} target="_blank" style={{ display: 'block', textAlign: 'center', padding: '0.75rem', backgroundColor: activeStore.theme.primaryColor, borderRadius: 'var(--radius-md)', fontWeight: 500, transition: 'opacity 0.2s' }} onMouseOver={e => e.currentTarget.style.opacity = 0.9} onMouseOut={e => e.currentTarget.style.opacity = 1}>
            Ver Tienda Pública ↗
          </Link>
          <Link to="/" style={{ display: 'block', textAlign: 'center', marginTop: '1rem', color: '#9ca3af' }}>Volver a Inicio</Link>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '3rem', backgroundColor: '#f9fafb' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#111827' }}>Catálogo de {activeStore.name}</h1>
            <p style={{ color: 'var(--text-muted)' }}>Administra tus productos y el inventario de esta tienda.</p>
          </div>
          <button className="btn btn-primary" style={{ backgroundColor: activeStore.theme.primaryColor }}>
            + Nuevo Producto
          </button>
        </header>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
          {[{ label: 'Ventas Totales', value: '$4,250' }, { label: 'Pedidos', value: '38' }, { label: 'Productos', value: activeStore.products.length }].map((stat, i) => (
            <div key={i} style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-color)' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 500 }}>{stat.label}</p>
              <p style={{ fontSize: '1.875rem', fontWeight: 700, marginTop: '0.5rem' }}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Products Table */}
        <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: '#f3f4f6', borderBottom: '1px solid var(--border-color)' }}>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: '#4b5563' }}>Producto</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: '#4b5563' }}>Precio</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: '#4b5563' }}>Estado</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: '#4b5563' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {activeStore.products.map(product => (
                <tr key={product.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img src={product.image} alt={product.name} style={{ width: '40px', height: '40px', borderRadius: '8px', objectFit: 'cover' }} />
                    <span style={{ fontWeight: 500 }}>{product.name}</span>
                  </td>
                  <td style={{ padding: '1rem 1.5rem', color: '#4b5563' }}>${product.price.toFixed(2)}</td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <span style={{ padding: '0.25rem 0.75rem', backgroundColor: '#dcfce3', color: '#166534', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600 }}>Activo</span>
                  </td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <button style={{ color: activeStore.theme.primaryColor, fontWeight: 500, background: 'none' }}>Editar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
