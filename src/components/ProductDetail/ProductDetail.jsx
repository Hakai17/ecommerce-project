import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import cafe1 from '../../assets/cafe1.jpg';
import cafe2 from '../../assets/cafe2.jpg';
import cafe3 from '../../assets/cafe3.jpg';
import cafe4 from '../../assets/cafe4.jpg';
import cafe5 from '../../assets/cafe5.jpg';
import cafe6 from '../../assets/cafe6.jpg';
import cafe7 from '../../assets/cafe7.jpg';
import cafe8 from '../../assets/cafe8.jpg';

const products = [
    { id: 1, name: "Café 1", description: "Café Brasileiro", price: 9.99, imageUrl: cafe1 },
    { id: 2, name: "Café 2", description: "Café Colombiano", price: 12.99, imageUrl: cafe2 },
    { id: 3, name: "Café 3", description: "Café Etíope", price: 14.99, imageUrl: cafe3 },
    { id: 4, name: "Café 4", description: "Café Italiano", price: 11.99, imageUrl: cafe4 },
    { id: 5, name: "Café 5", description: "Café Arábico", price: 13.99, imageUrl: cafe5 },
    { id: 6, name: "Café 6", description: "Café Turco", price: 10.99, imageUrl: cafe6 },
    { id: 7, name: "Café 7", description: "Café Francês", price: 15.99, imageUrl: cafe7 },
    { id: 8, name: "Café 8", description: "Café Cubano", price: 16.99, imageUrl: cafe8 },
];

function ProductDetail({ addToCart }) {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    const handleBuyNow = () => {
        addToCart(product);
        toast.success(`${product.name} adicionado ao carrinho!`);
    };

    return (
        <div className="container mt-4 mb-4">
            {product ? (
                <div className="card">
                    <img
                        src={product.imageUrl}
                        className="card-img-top"
                        alt={product.name}
                        style={{ height: '400px', objectFit: 'cover' }}
                    />
                    <div className="card-body bg-secondary text-white">
                        <h1 className="card-title">{product.name}</h1>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text font-weight-bold">${product.price.toFixed(2)}</p>
                        <button onClick={handleBuyNow} className="btn bg-dark text-white">Add to Cart</button>
                    </div>
                </div>
            ) : (
                <p>Product not found.</p>
            )}
        </div>
    );
}

export default ProductDetail;
