import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [products, setProduct] = useState([])
  const [cart, setCart] = useState([])
  // console.log(cart)

    useEffect(() => {
        fetch(
          "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
        )
          .then((res) => res.json())
          .then((data) => setProduct(data));
    }, [])
     const handleAddToCart = (product) => {
         console.log("add to cart", product);
         const newCart = [...cart, product];
         setCart(newCart);
     };
    
    return (
      <div className="shop-container">
        <div className="product-container">
          {products.map((product) => (
            <Product
              product={product}
              handleAddToCart={handleAddToCart}
              key={product.id}></Product>
          ))}
        </div>
        <div className="cart-container">
      <Cart cart={cart} ></Cart>
        </div>
      </div>
    );
};

export default Shop;