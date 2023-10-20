import React from 'react'
import "./Home.css"
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image' src="https://m.media-amazon.com/images/I/6187BbSa1-L._SR1500,300_.jpg" alt="" />
            
            <div className='home_row'>
                <Product 
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"  
                    price={29.99}  
                    image="https://m.media-amazon.com/images/I/41Ag4WE7uyL._AC_UY218_.jpg"
                    rating={5}
                    />
                <Product 
                    id="49538094"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price={239.0}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61xUnNQ0j8L._AC_UY218_.jpg"
                />
            </div>
            <div className='home_row'>
                <Product 
                    id="4903850"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    price={199.99}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/91SZVWfPjdL._AC_UY218_.jpg"
                />
                <Product 
                    id="23445930"
                    title="Amazon Echo (5th Generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41F4LmKQeoL._AC_UY218_.jpg"
                />
                <Product 
                    id="3254354345"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81rxOSprYqL._AC_UY218_.jpg"
                />
            </div>
            <div className='home_row'>
                <Product 
                    id="90829332"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={1094.98}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81XGC6ZNPNL._AC_UY218_.jpg"
                />
            </div>
        </div>
    </div>
  )
}

export default Home;
