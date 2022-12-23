import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal';
function Checkout() {
  return (
    <div
      className="checkout">
        <div className='checkout__left'>
            <img
               className='checkout__ad'
               src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/LPAOffers/April/Prime/Store/V2/LPA501_1500x250.jpg" alt="" />
               <div>
                <h2 className='checkout__title'>Your Shopping Basket</h2>
                {/*bitem*/}
                 {/*bitem*/}
                  {/*bitem*/}
                   {/*bitem*/}
               </div>
        
        </div>
        <div className='checkout__right'>
          <Subtotal />
          <h2>The Subtotal will go here..</h2>
        </div>
    </div>
  )
}

export default Checkout
