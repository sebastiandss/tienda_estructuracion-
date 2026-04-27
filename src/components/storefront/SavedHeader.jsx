import React from 'react';

const SavedHeader = ({ count }) => {
  return (
    <div className="saved-header">
      <h2 className="saved-title">Guardados</h2>
      <span className="saved-count">
        {count} {count === 1 ? 'artículo' : 'artículos'}
      </span>
    </div>
  );
};

export default SavedHeader;
