import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../product/Product";
import Cart from "../Cart/Cart";

import { addToDb, getShoppingCart } from "../../../utilities/fakedb";

//
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(cart)

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

       
  useEffect(() => {
    const storedCart = getShoppingCart()
    const saveCart = []

    for (const id in storedCart) {
      const addedProduct = products.find(product => product.id === id)
      if (addedProduct) {
        const quantity = storedCart[id]
        addedProduct.quantity = quantity
        saveCart.push(addedProduct)
      }
      console.log('added product', addedProduct)
      setCart(saveCart)
      
    }
  },[products])
  

  const handleAddToCart = (product) => {
    // console.log("add to cart", product);
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
