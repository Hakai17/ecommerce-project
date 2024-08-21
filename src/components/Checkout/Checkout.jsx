import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import OrderTracking from '../OrderTracking/OrderTracking';
import 'react-toastify/dist/ReactToastify.css';

function Checkout({ onCheckout }) {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        paymentMethod: 'credit_card'
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle checkout logic here
        toast.success('Pedido Realizado!');
        onCheckout(); // Clear cart
        navigate('/'); // Redirect to the home page
    };

    return (
        <div className="container mt-4 bg-secondary rounded">
            <h1 className="mb-4 text-center">Checkout</h1>
            <OrderTracking currentStep={2} />
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
                    <select
                        className="form-select"
                        id="paymentMethod"
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleChange}
                        required
                    >
                        <option value="credit_card">Credit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="bank_transfer">Bank Transfer</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-dark mb-4">Complete Checkout</button>
            </form>
        </div>
    );
}

export default Checkout;
