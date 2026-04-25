import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckoutHeader from '../components/checkout/CheckoutHeader';
import CheckoutForm from '../components/checkout/CheckoutForm';
import OrderSummary from '../components/checkout/OrderSummary';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Recuperar los items que el usuario tenía en el carrito
  const { cartItems = [], cartTotal = 0 } = location.state || {};
  
  const [isProcessing, setIsProcessing] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(price);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simular el tiempo de procesamiento con el banco
    setTimeout(() => {
      setIsProcessing(false);
      // Aquí en un escenario real limpiaríamos el carrito y mostraríamos una página de éxito
      alert('¡Pago simulado con éxito! Gracias por tu compra en merC.');
      navigate('/');
    }, 2000);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-page)', display: 'flex', flexDirection: 'column' }}>
      
      <CheckoutHeader />

      <div style={{ flex: 1, maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '40px 20px', display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <CheckoutForm cartItemsLength={cartItems.length} handlePayment={handlePayment} />
        <OrderSummary cartItems={cartItems} cartTotal={cartTotal} isProcessing={isProcessing} formatPrice={formatPrice} />
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
};

export default Checkout;
