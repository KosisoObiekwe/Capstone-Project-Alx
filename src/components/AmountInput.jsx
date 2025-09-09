import React from "react";

export default function AmountInput({ amount, setAmount }) {
    return (
        <div>
            <label>Amount</label>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
            />
        </div>
    );
}
