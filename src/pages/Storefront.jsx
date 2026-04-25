import React from 'react';
import { StoreProvider, useStore } from '../context/StoreContext';
import Header from '../components/storefront/Header';
import Sidebar from '../components/storefront/Sidebar';
import ProductList from '../components/storefront/ProductList';
import DetailPanel from '../components/storefront/DetailPanel';
import CartPanel from '../components/storefront/CartPanel';
import MobileNav from '../components/storefront/MobileNav';
import ToastContainer from '../components/storefront/ToastContainer';
import SavedGrid from '../components/storefront/SavedGrid';

const StorefrontContent = () => {
  const { setShowSortMenu, currentView } = useStore();
  
  return (
    <div onClick={() => setShowSortMenu(false)}>
      <Header />
      <Sidebar />
      <main className="main">
        {currentView === 'saved' ? (
          <SavedGrid />
        ) : (
          <div className="layout-wrap">
            <ProductList />
            <DetailPanel />
          </div>
        )}
      </main>
      <MobileNav />
      <CartPanel />
      <ToastContainer />

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}} />
    </div>
  );
};

const Storefront = () => {
  return (
    <StoreProvider>
      <StorefrontContent />
    </StoreProvider>
  );
};

export default Storefront;
