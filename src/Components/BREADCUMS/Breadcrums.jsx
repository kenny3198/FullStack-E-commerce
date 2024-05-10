import React from 'react'
import "./Breadcrums.css"
import Arrow_icon from "../Assets/breadcrum_arrow.png"
const Breadcrums = ({product}) => {
  return (
    <div className='breadcrums'>
        HOME <img src={Arrow_icon} alt="" />
         SHOP <img src={Arrow_icon} alt="" />
         {product.category} <img src={Arrow_icon} alt="" />
         {product.name}
    </div>
  )
}

export default Breadcrums