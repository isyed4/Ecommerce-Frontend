import React from 'react'
import Subtotal from './Subtotal';

function Checkout(props) {
  return (
    <div className="checkout">
        <div>
         <h2 className="checkout__title">Your Shopping Cart</h2>
         <ul>
             <li></li>
             <li></li>
             <li></li>
             <img src="" alt="" />
         </ul>
        </div>

    <div >
        <h2 className="checkout__right"> <Subtotal/> </h2>
    </div>

    </div>
  )
}

export default Checkout;