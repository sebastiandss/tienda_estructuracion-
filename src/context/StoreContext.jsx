import React, { createContext, useState, useMemo, useEffect, useContext } from 'react';
import { stores } from '../data/mockData';

const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  const store = stores.find(s => s.id === 'tech-store');
  
  const [currentView, setCurrentView] = useState('catalog');
  const [activeProduct, setActiveProduct] = useState(store.products[1]);
  const [activeTab, setActiveTab] = useState('Todo');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todo');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const [savedItems, setSavedItems] = useState(new Set());
  const [selectedColor, setSelectedColor] = useState(0);
  const [sortOption, setSortOption] = useState('default');
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    setSelectedColor(0);
  }, [activeProduct]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(price);
  };

  const showToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  const categoriesCounts = useMemo(() => {
    return store.products.reduce((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1;
      return acc;
    }, {});
  }, [store.products]);

  const handleAddToCart = (e, product) => {
    if(e) e.stopPropagation();
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? {...item, quantity: item.quantity + 1} : item);
      }
      return [...prev, {product, quantity: 1}];
    });
    showToast(`${product.name} agregado al carrito`);
  };

  const updateQuantity = (id, delta) => {
    setCartItems(prev => {
      return prev.map(item => {
        if (item.product.id === id) {
          const newQuantity = item.quantity + delta;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const toggleFavorite = (e, id) => {
    e.stopPropagation();
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(id)) { 
        next.delete(id); 
        showToast('Eliminado de favoritos', 'info');
      } else { 
        next.add(id); 
        showToast('Agregado a favoritos'); 
      }
      return next;
    });
  };

  const toggleSaved = (e, id) => {
    if(e) e.stopPropagation();
    setSavedItems(prev => {
      const next = new Set(prev);
      if (next.has(id)) { 
        next.delete(id); 
        showToast('Eliminado de guardados', 'info');
      } else { 
        next.add(id); 
        showToast('Guardado para después'); 
      }
      return next;
    });
  };

  let viewProducts = store.products;
  if (currentView === 'favorites') {
    viewProducts = viewProducts.filter(p => favorites.has(p.id));
  } else if (currentView === 'saved') {
    viewProducts = viewProducts.filter(p => savedItems.has(p.id));
  }

  let filteredProducts = viewProducts;
  if (selectedCategory !== 'Todo') {
    filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-asc') return a.price - b.price;
    if (sortOption === 'price-desc') return b.price - a.price;
    if (sortOption === 'name-asc') return a.name.localeCompare(b.name);
    return 0;
  });

  const value = {
    store, currentView, setCurrentView, activeProduct, setActiveProduct, activeTab, setActiveTab,
    searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, cartItems, setCartItems,
    isCartOpen, setIsCartOpen, favorites, setFavorites, savedItems, setSavedItems,
    selectedColor, setSelectedColor, sortOption, setSortOption, showSortMenu, setShowSortMenu,
    toasts, showToast, formatPrice, categoriesCounts, handleAddToCart, updateQuantity,
    totalCartItems, cartTotal, toggleFavorite, toggleSaved, sortedProducts
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};
