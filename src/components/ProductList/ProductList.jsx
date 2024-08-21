import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import cafe1 from '../../assets/cafe1.jpg';
import cafe2 from '../../assets/cafe2.jpg';
import cafe3 from '../../assets/cafe3.jpg';
import cafe4 from '../../assets/cafe4.jpg';
import cafe5 from '../../assets/cafe5.jpg';
import cafe6 from '../../assets/cafe6.jpg';
import cafe7 from '../../assets/cafe7.jpg';
import cafe8 from '../../assets/cafe8.jpg';

function ProductList({ searchQuery }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4; // Quantidade de itens por página

    const mockProducts = [
        { id: 1, name: "Café 1", description: "Café Brasileiro", price: 9.99, imageUrl: cafe1 },
        { id: 2, name: "Café 2", description: "Café Colombiano", price: 12.99, imageUrl: cafe2 },
        { id: 3, name: "Café 3", description: "Café Etíope", price: 14.99, imageUrl: cafe3 },
        { id: 4, name: "Café 4", description: "Café Italiano", price: 11.99, imageUrl: cafe4 },
        { id: 5, name: "Café 5", description: "Café Arábico", price: 13.99, imageUrl: cafe5 },
        { id: 6, name: "Café 6", description: "Café Turco", price: 10.99, imageUrl: cafe6 },
        { id: 7, name: "Café 7", description: "Café Francês", price: 15.99, imageUrl: cafe7 },
        { id: 8, name: "Café 8", description: "Café Cubano", price: 16.99, imageUrl: cafe8 },
    ];

    const filteredProducts = mockProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const getCurrentPageProducts = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">Product List</h1>
            <div className="row">
                {getCurrentPageProducts().map(product => (
                    <div key={product.id} className="col-md-6 mb-4">
                        <div className="card h-100 bg-secondary text-white">
                            <Link to={`/product/${product.id}`}>
                                <img
                                    src={product.imageUrl}
                                    className="card-img-top"
                                    alt={product.name}
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                            </Link>
                            <div className="card-body bg-secondary text-white">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text font-weight-bold">${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-between mt-4 mb-2">
                <button onClick={handlePreviousPage} className="btn btn-dark" disabled={currentPage === 1}>
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={handleNextPage} className="btn btn-dark" disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default ProductList;
