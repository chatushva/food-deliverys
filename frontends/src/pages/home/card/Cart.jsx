import React,{useContext} from 'react'
import './Cart.css'
import { StoreContext } from '../../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {cartItems,food_list,removeFromCart, getTotalCartAmount,url}=useContext(StoreContext);
  const navigate=useNavigate();  
  return (
    <div>
      <div className='cart'>
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>price</p>
            <p>quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item,index)=>
          {
            if(cartItems[item._id]>0)
            {
              return (
                <div key={index}>
                  <div className="cart-items-title cart-items-cart">
                    <img src={url+"/image/"+item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price*cartItems[item._id]}</p>
                    <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
                  </div>
                  <hr />
                </div>
              )
            } 
          })} 
        </div>
      </div>
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
              <p>{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{ getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
            <hr />
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>if u have a promo code enter here</p>
            <div className="promo-input">
              <input type="text" placeholder='promocode'/>
              <button>submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
