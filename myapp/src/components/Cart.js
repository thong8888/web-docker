import React from 'react';

const Cart = ({ items, onRemove }) => {
    const totalAmount = items.reduce((total, item) => total + item.price, 0);

    return (
        <div className="cart">
            <h2>Your Shopping Cart</h2>
            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <span>{item.name}</span>
                            <span>${item.price.toFixed(2)}</span>
                            <button onClick={() => onRemove(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ${totalAmount.toFixed(2)}</h3>
            <button onClick={() => alert('Proceeding to checkout...')}>Proceed to Checkout</button>
        </div>
    );
};

export default Cart;