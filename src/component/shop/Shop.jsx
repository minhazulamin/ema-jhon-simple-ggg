import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../product/Product';
const Shop = () => {
    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch(
          "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
        )
          .then((res) => res.json())
          .then((data) => setProduct(data));
    }, [])
    
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        product={product}
                    key={product.id}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                    <h4>order summary</h4>
            </div>
        </div>
    );
};

export default Shop;