import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import './App.css'

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const updateQuantity = (id, delta) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleCheckout = () => {
        setCartItems([]);
    };

    return (
        <Router>
            <Header cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} onSearch={handleSearch} />
            <Routes>
                <Route path="/" element={<ProductList searchQuery={searchQuery} />} />
                <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} onUpdateQuantity={updateQuantity} onRemoveItem={removeItem} />} />
                <Route path="/checkout" element={<Checkout onCheckout={handleCheckout}/>} />
            </Routes>
        </Router>
    );
}

export default App;
