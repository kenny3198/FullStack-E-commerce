import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContex'
const ProductDisplay = ({product}) => {
  const {addToCart} = useContext(ShopContext) 
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" /> 
        </div>
        </div>
        <div className="productdisplay-right">
         <h1>{product.name}</h1>
         <div className="product-display-right-stars">
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_dull_icon} alt="" /> 
        <p>(122)</p>
         </div>
 <div className="productDisplay-right-prices">
  <div className='productDisplay-right-price-old'>${product.old_price}</div>
    <div className='productDisplay-right-price-new'>${product.new_price}</div>
      </div>
       <div className='productDisplay-right-description'>
            A light weight, usually knitted, pullover shirt,
             close fitting and a round a neckline and short 
             sleeves worn as undershirt or outer garment
          </div>
<div className="productDisplay-right-size">
  <h1>Select size</h1>
  <div className="productDisplay-right-sizes">
    <div>S</div>
    <div>M</div>
    <div>L</div>
    <div>XL</div>
    <div>XXL</div>
  </div>
</div>
<button onClick={() => {addToCart(product.id)}}>ADD TO CART </button>
<p className='productDisplay-right-category'>
  <span>Category :</span> Women, T-Shirt, Crop Top.
</p>
<p className='productDisplay-right-category'>
  <span>Tags :</span> Mordern, Latest.
</p>
   </div>
  </div>
    
    
  )
}

export default ProductDisplay