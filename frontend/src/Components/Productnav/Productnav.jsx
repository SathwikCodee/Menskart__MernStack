import React from 'react'
import './Productnav.css'
import arrow_icon from '../../homeslickimg/rightarrowshop.png';

const Productnav = (props) => {
    const {product} = props;
  return (
    <div className='productnav'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Productnav
