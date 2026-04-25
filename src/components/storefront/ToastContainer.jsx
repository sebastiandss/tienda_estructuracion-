import React from 'react';
import { useStore } from '../../context/StoreContext';

const ToastContainer = () => {
  const { toasts } = useStore();

  if (toasts.length === 0) return null;

  return (
    <div style={{position: 'fixed', bottom: '24px', right: '24px', zIndex: 1000, display: 'flex', flexDirection: 'column', gap: '8px'}}>
      {toasts.map(toast => (
        <div key={toast.id} style={{
          background: toast.type === 'success' ? 'var(--accent)' : '#1C1C1E',
          color: 'white', padding: '12px 24px', borderRadius: '8px', 
          boxShadow: '0 4px 15px rgba(0,0,0,0.15)', fontSize: '14px', fontWeight: 500,
          animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}>
          {toast.message}
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
