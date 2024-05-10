import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import BoxDescription from '../Components/BOXDESCRIPTION/BoxDescription';
import Breadcrums from '../Components/BREADCUMS/Breadcrums';
import ProductDisplay from '../Components/PRODUCTDISPLAY/ProductDisplay';
import RelatedProduct from '../Components/RELATEDPRODUCT/RelatedProduct';
import { ShopContext } from '../Context/ShopContex'

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId))
  
  return (
    <div>
    <Breadcrums product={product} />
    <ProductDisplay product={product}/>
    <BoxDescription />
    <RelatedProduct/>
    </div>
  )
}

export default Product
