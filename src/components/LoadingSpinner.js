import React from 'react';
import '../assets/styles/LoadingSpinner.css';

const LoadingSpinner = (props) => {
    return (
        <div className="container--spinner">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            <div className="spinner-text">
                <span>Cargando...</span>
            </div>
        </div>
    )
}
export default LoadingSpinner;