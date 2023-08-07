import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart
    console.log(cart)

    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    // console.log(props.cart)
    return (
        <div className='cart'>
           <h4>order summary</h4>
            <p>selected item: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping: </p>
            <p>Tax: </p>
            <h6>Grand Total:</h6>
      </div>
    );
};

export default Cart;