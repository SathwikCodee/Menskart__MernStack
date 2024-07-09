import React from 'react'
import { useEffect } from 'react'
import CartItems from '../Components/CartItems/CartItems';
import Homefooter from '../Components/Home-footer/Homefooter'
import './Cart.css'

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className='Cart'>
      <CartItems/>
      <Homefooter/>
    </div>
  )
}

export default Cart
