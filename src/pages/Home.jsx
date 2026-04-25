import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <nav className="navbar">
        <div className="navbar-brand">OmniCommerce</div>
        <div className="navbar-links">
          <Link to="/dashboard">Entrar al Administrador</Link>
        </div>
      </nav>

      <main className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '4rem 1rem' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', background: 'linear-gradient(to right, var(--primary-color), #ec4899)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
          Crea tu tienda online en segundos
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '2.5rem' }}>
          La plataforma multi-tenant definitiva. Administra tu inventario y ofrece una experiencia de compra premium a tus clientes.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/dashboard" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
            Ir al Dashboard
          </Link>
        </div>

        <div style={{ marginTop: '5rem', width: '100%' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>Mira nuestras tiendas de demostración</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <Link to="/tienda/electro-tech" style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', minWidth: '250px', transition: 'box-shadow 0.2s' }} onMouseOver={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-md)'} onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}>
              <h3 style={{ color: '#3b82f6', marginBottom: '0.5rem' }}>ElectroTech</h3>
              <p style={{ color: 'var(--text-muted)' }}>Tienda de tecnología</p>
            </Link>
            <Link to="/tienda/moda-elegante" style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', minWidth: '250px', transition: 'box-shadow 0.2s' }} onMouseOver={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-md)'} onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}>
              <h3 style={{ color: '#ec4899', marginBottom: '0.5rem' }}>Moda Elegante</h3>
              <p style={{ color: 'var(--text-muted)' }}>Boutique de ropa</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
