import React from 'react';
import { useStore } from '../../context/StoreContext';
import SavedHeader from './SavedHeader';
import SavedEmptyState from './SavedEmptyState';
import SavedCard from './SavedCard';

const SavedGrid = () => {
  const { savedItems, store, formatPrice, handleAddToCart, toggleSaved, setCurrentView } = useStore();

  const savedProducts = store.products.filter(p => savedItems.has(p.id));

  return (
    <div className="saved-grid-wrap">
      <SavedHeader count={savedProducts.length} />

      {savedProducts.length === 0 ? (
        <SavedEmptyState onExplore={() => setCurrentView('catalog')} />
      ) : (
        <div className="saved-grid">
          {savedProducts.map(product => (
            <SavedCard 
              key={product.id}
              product={product}
              formatPrice={formatPrice}
              handleAddToCart={handleAddToCart}
              toggleSaved={toggleSaved}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedGrid;
