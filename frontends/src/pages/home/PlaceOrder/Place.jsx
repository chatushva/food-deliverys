import React, { useContext } from 'react'
import './Place.css'
import { StoreContext } from '../../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Place = () => {
  const {getTotalCartAmount}=useContext(StoreContext)
  const navigate=useNavigate()
  return (
    <form action="" className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery information</p>
        <div className="multifields">
          <input type="text" placeholder='first name' />
          <input type="text" placeholder='last name' />
        </div>
        <input type="text" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className="multifields">
          <input type="text" placeholder='city' />
          <input type="text" placeholder='state' />
        </div>
        <div className="multifields">
          <input type="text" placeholder='zipcode' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-buttom">
          <div className="cart-total">
            <h2>cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>subtotal</p>
                <p>{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery fees</p>
                <p>${getTotalCartAmount()===0?0:2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
              </div>
              <hr />
            </div>
            <button onClick={() => navigate('/order')}>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Place
