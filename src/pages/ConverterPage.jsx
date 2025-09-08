import React, { useState, useEffect } from 'react';
import { FiRefreshCw, FiCalendar, FiBell } from 'react-icons/fi';
import './ConverterPage.css';
import Footer from "../components/Footer";

export default function ConverterPage() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('NGN');
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [exchangeRate, setExchangeRate] = useState(0);
    const [lastUpdated, setLastUpdated] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const currencies = ["USD", "EUR", "JPY", "GBP", "NGN"];

    const descriptions = {
        USD: "United States Dollar",
        EUR: "Euro",
        JPY: "Japanese Yen",
        GBP: "British Pound",
        NGN: "Nigerian Naira"
    };

    const [currencyDescription, setCurrencyDescription] = useState(descriptions[toCurrency]);

    const swapCurrencies = () => {
        const temp = fromCurrency;
        setFromCurrency(toCurrency);
        setToCurrency(temp);
    };

    useEffect(() => {
        const fetchExchangeRate = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
                const data = await res.json();

                if (data.result === "success" && data.rates[toCurrency]) {
                    const rate = data.rates[toCurrency];
                    setExchangeRate(rate);
                    setConvertedAmount((amount * rate).toFixed(2));
                    setLastUpdated(new Date().toLocaleString());
                } else {
                    setExchangeRate(0);
                    setConvertedAmount(0);
                }
            } catch (err) {
                console.error("Error fetching exchange rate:", err);
                setExchangeRate(0);
                setConvertedAmount(0);
            } finally {
                setIsLoading(false);
            }
        };

        fetchExchangeRate();
    }, [fromCurrency, toCurrency]);

    useEffect(() => {
        if (exchangeRate && !isNaN(exchangeRate)) {
            setConvertedAmount((amount * exchangeRate).toFixed(2));
        }
    }, [amount, exchangeRate]);

    useEffect(() => {
        setCurrencyDescription(descriptions[toCurrency]);
    }, [toCurrency]);

    const formatCurrency = (value, currencyCode) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currencyCode,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value);
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="converter-page">
            {/* Header */}
            <header className="converter-header">
                <button className="back-button" onClick={() => window.history.back()}>Back</button>
                <h1>CuCo Currency Converter</h1>
            </header>

            {/* Main content */}
            <div className="converter-content">
                {/* Converter Card */}
                <div className="converter-card">
                    <h2>Convert Currency</h2>

                    <label>Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                    />

                    <div className="currency-row">
                        <div className="currency-select">
                            <label>From</label>
                            <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                                {currencies.map(c => <option key={c} value={c}>{c} - {descriptions[c]}</option>)}
                            </select>
                        </div>

                        <button className="swap-button" onClick={swapCurrencies}><FiRefreshCw /></button>

                        <div className="currency-select">
                            <label>To</label>
                            <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                                {currencies.map(c => <option key={c} value={c}>{c} - {descriptions[c]}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className="result-section">
                        {isLoading ? <p>Loading...</p> : (
                            <>
                                <p className="converted">{formatCurrency(convertedAmount, toCurrency)}</p>
                                <p className="rate">1 {fromCurrency} = {exchangeRate.toFixed(6)} {toCurrency}</p>
                                <p className="last-updated">Last updated: {lastUpdated}</p>
                            </>
                        )}
                    </div>
                </div>

                {/* Side Panel */}
                <aside className="side-panel">
                    <p><strong>Selected Currency:</strong> {toCurrency} - {currencyDescription}</p>
                    <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
                    <button className="print-button" onClick={handlePrint}>Print</button>

                    <div className="extra-buttons">
                        <button><FiCalendar /> View Historical Rates</button>
                        <button><FiBell /> Set Rate Alert</button>
                    </div>
                </aside>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
