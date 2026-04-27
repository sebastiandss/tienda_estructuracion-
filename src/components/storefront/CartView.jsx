import React, { useState } from 'react';
import CartArticles from './CartArticles';
import CartOrderSummary from './CartOrderSummary';
import { useStore } from '../../context/StoreContext';

const CartView = () => {
  const { cartItems, totalCartItems } = useStore();
  const [selectedShipping, setSelectedShipping] = useState('standard');

  return (
    <div className="cart-view-wrap">
      <div className="cart-view-header">
        <h1 className="cart-view-title">Mi carrito</h1>
        <span className="cart-view-count">{totalCartItems} {totalCartItems === 1 ? 'artículo' : 'artículos'}</span>
      </div>

      <div className="cart-view-layout">
        <CartArticles
          selectedShipping={selectedShipping}
          onShippingChange={setSelectedShipping}
        />
        <CartOrderSummary selectedShipping={selectedShipping} />
      </div>
    </div>
  );
};

export default CartView;
