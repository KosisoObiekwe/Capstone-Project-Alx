import React from "react";

export default function ConversionResult({ isLoading, convertedAmount, fromCurrency, toCurrency, exchangeRate, lastUpdated, formatCurrency }) {
    return (
        <div className="result-section">
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <p className="converted">{formatCurrency(convertedAmount, toCurrency)}</p>
                    <p className="rate">1 {fromCurrency} = {exchangeRate.toFixed(6)} {toCurrency}</p>
                    <p className="last-updated">Last updated: {lastUpdated}</p>
                </>
            )}
        </div>
    );
}
