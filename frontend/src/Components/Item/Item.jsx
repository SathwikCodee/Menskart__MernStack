import React from 'react'
import './Item.css'
import {Link} from 'react-router-dom';

const Item = (props) => {
  return (

    <div className="image-card">

      <div className="image-card-box">
      <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
      </div>
      <div className="image-card-content">
        <h3>{props.name}</h3>
        <p>₹{props.new_price}</p>
        <p style={{textDecoration:"line-through",color:"red"}}>₹{props.old_price}</p>
      </div>

    </div>
  )
}

export default Item
