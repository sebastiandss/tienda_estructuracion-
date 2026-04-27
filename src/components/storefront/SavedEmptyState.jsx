import React from 'react';

const SavedEmptyState = ({ onExplore }) => {
  return (
    <div className="saved-empty">
      <span className="saved-empty-icon">🔖</span>
      <div className="saved-empty-text">Aún no tienes artículos guardados.</div>
      <button className="saved-empty-btn" onClick={onExplore}>
        Explorar catálogo
      </button>
    </div>
  );
};

export default SavedEmptyState;
