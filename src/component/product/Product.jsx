import React from 'react';
import './product.css';
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
//   console.log(props);
    const { name, img, price, seller, ratings } = props.product
    
   const handleAddToCart = props.handleAddToCart

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>price: ${price}</p>
        <p>Manufacturer:{seller}</p>
        <p>Rating: {ratings}stars</p>
      </div>
      <button
        className="btn-cart"
        onClick={() => handleAddToCart(props.product)}>
        Add to Cart
         <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;