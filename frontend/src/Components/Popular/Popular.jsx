import React from 'react'
import './Popular.css'
import Item from '../Item/Item'
import categories from '../../assets/category'


const Popular = (props) => {
  return (
    <div className='popular'>
      <div className='under'><h1>{props.name} <hr/></h1></div>
      <div className="popular-item">
        {categories.map((item,i)=>{
          if (props.category===item.category){
            return <Item key={i} id = {item.id} name = {item.name} image={item.image} new_price = {item.new_price} old_price = {item.old_price} />
          }
          else{
            return null;
          }
        })}

      </div>
    </div>
  )
}

export default Popular
