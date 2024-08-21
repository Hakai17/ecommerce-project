import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const handleSearch = () => {
        if (isVisible) {
            onSearch(query); // Realiza a busca se a barra estiver visível
            setQuery(''); // Limpa o campo após a busca
        }
        setIsVisible(!isVisible); // Alterna a visibilidade da barra de pesquisa
    };

    return (
        <div className="d-flex align-items-center">
            {isVisible && (
                <input
                    type="text"
                    className="form-control me-2" // Adiciona margem à direita
                    placeholder="Search products..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            )}
            <button
                className="btn btn-outline-light"
                onClick={handleSearch}
                aria-label="Search"
            >
                <FaSearch /> {/* Ícone de pesquisa */}
            </button>
        </div>
    );
}

export default SearchBar;
