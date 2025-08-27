import React, { useState } from 'react';

const Checkout = () => {
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        address: '',
        paymentMethod: 'Credit Card'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle checkout process (e.g., API call)
        console.log('Checkout information:', userInfo);
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={userInfo.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={userInfo.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Address:</label>
                    <textarea name="address" value={userInfo.address} onChange={handleChange} required />
                </div>
                <div>
                    <label>Payment Method:</label>
                    <select name="paymentMethod" value={userInfo.paymentMethod} onChange={handleChange}>
                        <option value="Credit Card">Credit Card</option>
                        <option value="PayPal">PayPal</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                </div>
                <button type="submit">Complete Purchase</button>
            </form>
        </div>
    );
};

export default Checkout;