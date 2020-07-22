import React from 'react'

const USD = 27;
const EUR = 29;
const currency = 'UA';

export function getCurrencySymbol() {
    switch (currency) {
        case 'UA':
        default:
            return 'грн';
        case 'USD':
            return '$';
        case 'EUR':
            return '€';
    }
}

export function getCurrencyPrice(price) {
    switch (currency) {
        case 'UA':
        default:
            return Math.floor(price);
        case 'USD':
            return Math.floor(price / USD);
        case 'EUR':
            return Math.floor(price / EUR);
    }
}

const Currency = (changeCurrency) => {
    return(
        <div>
            <button value='usd' onClick={changeCurrency}>USD</button>
        </div>
    )
}

export {Currency}