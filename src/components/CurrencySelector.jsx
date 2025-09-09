import React from "react";

export default function CurrencySelector({ label, value, onChange, currencies, descriptions }) {
    return (
        <div className="currency-select">
            <label>{label}</label>
            <select value={value} onChange={(e) => onChange(e.target.value)}>
                {currencies.map((c) => (
                    <option key={c} value={c}>
                        {c} - {descriptions[c]}
                    </option>
                ))}
            </select>
        </div>
    );
}
