import React from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'
import { useState } from 'react'

const AddProduct = () => {
  
  const [image,setImage]= useState(false);
  const [productDetails,setProductDetails]= useState({
    name:"",
    image:"",
    category:"women",
    new_price:"",
    old_price:"",
  })
  
  const imageHandler=(e)=>{
    setImage(e.target.files[0]) // for recent changed pic
  }

  const changeHandler=(e)=>{
    setProductDetails({...productDetails,[e.target.name]:e.target.value}) // for recent changed pic
  }

  const Add_product= async () =>{
    console.log(productDetails)

    let responseData;
    let product = productDetails;

    let formData = new FormData()
    formData.append('product',image);

    await fetch('http://localhost:4000/upload',{
      method:'POST',
      headers:{
        Accept:'application/json'
      },
      body:formData,
    }).then((resp)=>resp.json()).then((data)=>{responseData=data})
      //we will get parsed data    we will save it to responseData
      //here we get promise

    if (responseData.success){
      //we will gwt imagw url from multer storage
      product.image=responseData.image_url;
      console.log(product)

      await fetch('http://localhost:4000/addproduct',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(product),
      }).then((resp)=>resp.json()).then((data)=>{
        data.success?alert("product added"):alert("Failed")
      })
    }
  }   

  return (
 
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type Here'/>
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
            <p>Price</p>
            <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type Here'/>
        </div>
        <div className="addproduct-itemfield">
            <p>Offer Price</p>
            <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type Here'/>
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select value={productDetails.category} onChange={changeHandler}  name="category" className='add-product-selector'>
          <option value="TopWear" >TopWear</option>
          <option value="BottomWear" >BottomWear</option>
          <option value="HomeWear" >HomeWear</option>
          <option value="FootWear" >FootWear</option>
          <option value="EyeWear" >EyeWear</option>
          <option value="Accesories" >Accesories</option>
        </select>

      </div>

      <div className="addproduct-itemfield">
        <label htmlFor='file-input'>
          <img src={image?URL.createObjectURL(image):upload_area} alt="upload area" className='add-product-thumbnail-img'/>
        </label>
        <input  onChange={imageHandler} type="file" name='image' id="file-input" hidden/>
      </div>  
      <button onClick={()=>{Add_product()}} className='addproduct-btn'>ADD</button>
    </div> 
  )
}

export default AddProduct
