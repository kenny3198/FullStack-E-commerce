import React from 'react'
import './RelatedProduct.css'
import data_product from '../Assets/data'
import Items from '../ITEMS/Items'
const RelatedProduct = () => {
  return (
    <div className='RelatedProducts'>
        <h1>Related Product</h1>
        <hr />
        <div className="RelatedProduct-items">
         {data_product.map((item, i) => {
            return <Items key={i} name={item.name} image={item.image} 
            new_price={item.new_price} old_price={item.old_price}/>
         })}
        </div>
    </div>
  )
}

export default RelatedProduct