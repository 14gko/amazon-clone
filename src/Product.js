import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product'>
        <div className='product_info'>
            <p>The lean startup</p>
            <p className='product_price'>
                <small>$</small>
                <strong>19.99</strong>
            </p>
            <div className='product_rating'>
                <p>⭐</p>
            </div>
        </div>

        <img src='https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/EVENTS/HALLOWEEN/GW/Cat_Cards/Cat_Card_1x_d_Halloween._SY304_CB598701678_.jpg' alt=''></img>
    
        <button>Add to Basket</button>
    </div>
  )
}

export default Product;
