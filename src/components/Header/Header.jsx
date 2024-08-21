import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { FaCoffee, FaShoppingCart } from 'react-icons/fa';

function Header({ cartCount, onSearch }) {
    return (
        <header className="bg-dark text-white py-3">
            <div className="container d-flex justify-content-between align-items-center">
                <Link to="/" className="text-white text-decoration-none d-flex align-items-center">
                    <FaCoffee size={30} />
                    <span className="ms-2">Coffee Shop</span>
                </Link>
                <div className="d-flex align-items-center">
                    <SearchBar onSearch={onSearch} />
                    <Link to="/cart" className="text-white position-relative ms-3">
                        <FaShoppingCart size={30} />
                        {cartCount > 0 && (
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cartCount}
                                <span className="visually-hidden">items in cart</span>
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
