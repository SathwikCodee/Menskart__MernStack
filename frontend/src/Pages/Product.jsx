import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Productnav from '../Components/Productnav/Productnav'
import Homefooter from '../Components/Home-footer/Homefooter'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import './Product.css'
import { useEffect } from 'react'



const Product = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div className='product'>
      <Productnav product={product}/>
      <ProductDisplay product={product}/>
      <Homefooter/>
    </div>
  )
}

export default Product
