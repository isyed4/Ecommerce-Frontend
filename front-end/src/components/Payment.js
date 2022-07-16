import React from 'react'

function Payment() {



  return (
    <div className="payment">
        <div className="payment__container">
            <h1> Checkout </h1>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                    <p></p>
                </div>
            </div>

            <div className='payment__section'>
                <div className="payment__title">
                    <h3>Review Items and Delivery</h3>
                </div>
                <div className="payment__items">

                </div>
            </div>

            <div className='payment__section'>
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">

                </div>
            </div>

        </div>


    </div>
  )
}

export default Payment