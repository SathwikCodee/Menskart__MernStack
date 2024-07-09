import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_cart from '../../homeslickimg/cart_cross_icon.png';
import up from '../../homeslickimg/up.png';
import down from '../../homeslickimg/down.png';
import { Link } from 'react-router-dom';
import empty from '../../homeslickimg/empty-cart.png'

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart, plus, minus } = useContext(ShopContext);

  
  const cartItemsData = cartItems || {};

  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItemsData[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className='cartitems-format cartitems-format-main'>
                <img src={e.image} alt='' className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <div className='tot-quantity'>
                  <img className='plus-mius inc' src={down} onClick={() => minus(e.id)} alt='' />
                  <h1>{cartItemsData[e.id]}</h1>
                  <img className='plus-mius dec' src={up} onClick={() => plus(e.id)} alt='' />
                </div>
                <p>{e.new_price * cartItemsData[e.id]}</p>
                <img className='plus-mius' src={remove_cart} onClick={() => removeFromCart(e.id)} alt='' />
              </div>
              <hr />
            </div>
          );
        } else {
          return null;
        }
      })}
      {Object.values(cartItemsData).some((quantity) => quantity > 0) ? (
        <div className='cartitems-down'>
          <div className='cartitems-total'>
            <h1>Cart Total</h1>
            <div>
              <div className='cartitems-total-item'>
                <p>Sub-Total</p>
                <p>₹{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className='cartitems-total-item'>
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className='cartitems-total-item'>
                <h3>Total</h3>
                <h3>₹{getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className='cartitems-promocode'>
            <p>If you have a promo code, Enter it here.</p>
            <div className='cartitems-promobox'>
              <input type='text' placeholder='Enter Promo-Code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      ) : (
        <div className='empty'>
            <img src={empty} alt="" />
            <h5>Your cart is empty !!</h5>
            
            <h1 className='shop-now'> <Link to='/shop' style={{textDecoration: 'none',color:'white',fontFamily:'cursive'}}>SHOP NOW</Link></h1>
        </div>
        
      )}
    </div>
  );
};

export default CartItems;
