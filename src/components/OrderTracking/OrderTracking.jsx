import React from 'react';
import './OrderTracking.css'; // Importando o arquivo CSS para estilos

function OrderTracking({ currentStep }) {
    return (
        <div className="order-tracking">
            <div className={`step ${currentStep === 1 ? 'active' : 'inactive'}`}>
                <div className="circle">1</div>
                <div className="label">Cart</div>
            </div>
            <div className="connector"></div>
            <div className={`step ${currentStep === 2 ? 'active' : 'inactive'}`}>
                <div className="circle">2</div>
                <div className="label">Checkout</div>
            </div>
        </div>
    );
}

export default OrderTracking;
