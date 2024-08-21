import React from 'react';
import { Link } from 'react-router-dom';
import OrderTracking from '../OrderTracking/OrderTracking';


function Cart({ cartItems, onUpdateQuantity, onRemoveItem }) {
    const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleQuantityChange = (id, delta) => {
        onUpdateQuantity(id, delta);
    };

    const handleRemoveItem = (id) => {
        onRemoveItem(id);
    };

    return (
        <div className="container mt-4 bg-secondary rounded">
            <h1 className="mb-4 text-center">Cart</h1>
            <OrderTracking currentStep={1} />
            {cartItems.length > 0 ? (
                <ul className="list-group">
                    {cartItems.map((item) => (
                        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <h5>{item.name}</h5>
                                <p className="mb-0">${item.price.toFixed(2)}</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <button onClick={() => handleQuantityChange(item.id, -1)} className="btn btn-secondary btn-sm" disabled={item.quantity <= 1}>-</button>
                                <span className="mx-2">{item.quantity}</span>
                                <button onClick={() => handleQuantityChange(item.id, 1)} className="btn btn-secondary btn-sm">+</button>
                                <button onClick={() => handleRemoveItem(item.id)} className="btn btn-danger btn-sm ms-2">Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your cart is empty.</p>
            )}
            {cartItems.length > 0 && (
                <div className="mt-4">
                    <h4>Total: ${totalAmount.toFixed(2)}</h4>
                    <Link to="/checkout" className="btn btn-dark text-white mb-4">Proceed to Checkout</Link>
                </div>
            )}
        </div>
    );
}

export default Cart;
