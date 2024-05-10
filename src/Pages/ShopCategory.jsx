import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContex'
import './CSS/ShopCategory.css'
import Drop_down from '../Components/Assets/dropdown_icon.png';
import Items from '../Components/ITEMS/Items'
const shopCategory = ({banner, category}) => {
  const { all_product } = useContext(ShopContext)
  return (
    <div className='shop-category'>
       <img className='shopcategory-banner' src={banner} alt="" />
       <div className='shop-category-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={Drop_down} alt="" />
        </div>
       </div>
       <div className="shopcategory-product">
        {all_product?.map((item, i) => {
        if (category === item.category) {
          return <Items key={i} id={item.id} name={item.name} image={item.image}
          new_price={item.new_price} old_price={item.old_price}/>
        } else {
        return null
        }
        })}
       </div> 
       <div className="shopcategory-loadmore">
        Explore More 
       </div>
      </div>
  )
}

export default shopCategory;