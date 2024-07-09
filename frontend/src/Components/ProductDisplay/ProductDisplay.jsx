import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import { useState } from 'react'

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState(null);
    const [itemAdded, setItemAdded] = useState(false);

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
        setItemAdded(false); 
      };
    
    const handleAddToCart = () => {
    if (localStorage.getItem('auth-token')) {
        if(selectedSize){
            addToCart(product.id, selectedSize);
            setItemAdded(true);
        }
        else{
            alert("PLEASE LOGIN FIRST!!!")
        }
    }else{
        alert("PLEASE LOGIN FIRST!!!")
    }
    };

  return (
    <div className='productdisplay'>
        <div className="productdisplay-right">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-left">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">₹{product.old_price}</div>
                <div className="productdisplay-right-price-new">₹{product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">In React, useParams is a hook provided by the React Router library, and it's used to access the parameters (often called route parameters) in the URL</div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div className={`bg ${selectedSize === 'S' && 'selected'}`} onClick={() => handleSizeSelect('S')}>S</div>
                    <div className={`bg ${selectedSize === 'M' && 'selected'}`} onClick={() => handleSizeSelect('M')}>M</div>
                    <div className={`bg ${selectedSize === 'L' && 'selected'}`} onClick={() => handleSizeSelect('L')}>L</div>
                    <div className={`bg ${selectedSize === 'XL' && 'selected'}`} onClick={() => handleSizeSelect('XL')}>XL</div>
                    <div className={`bg ${selectedSize === 'XXL' && 'selected'}`} onClick={() => handleSizeSelect('XXL')}>XXL</div>
                    
                </div>
                {!selectedSize && <p className="select-size-message">Please select a size</p>}
            </div>
            <button onClick={handleAddToCart} disabled={itemAdded}>
                {itemAdded ? 'Item Added' : 'ADD TO CART'}
            </button>
        </div>
        
    </div>
  )
}

export default ProductDisplay
