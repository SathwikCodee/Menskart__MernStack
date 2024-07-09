import Homefooter from '../Components/Home-footer/Homefooter'
import React,{useContext} from 'react';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import './ShopCategory.css'
import { useEffect } from 'react';



const ShopCategory = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {all_product} = useContext(ShopContext);
  return (
    <div className='shopcategory'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className='shopcategory-products'>
        {all_product.map((item,i)=>{
          if (props.category===item.category){
            return <Item key={i} id = {item.id} name = {item.name} image={item.image} new_price = {item.new_price} old_price = {item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <Homefooter/>
    </div>
  )
}

export default ShopCategory
