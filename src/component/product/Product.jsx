import React from 'react';
import './product.css';

const Product = (props) => {
  console.log(props.product);
  const {name,img,price,seller,ratings} = props.product
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className='product-info'>
        <h6 className="product-name">{name}</h6>
        <p>price: ${price}</p>
        <p>Manufacturer:{seller}</p>
        <p>Rating: {ratings}stars</p>
          </div>
          <button className='btn-cart'>Add to Cart</button>
    </div>
  );
};

export default Product;