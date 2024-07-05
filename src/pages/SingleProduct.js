import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function SingleProduct() {
    let { productId } = useParams();
    const productList = useSelector(state => state.productList);
    
    console.log(productList.filter(element=>element.id==productId));
    const productdetails = productList.filter(element=>element.id==productId);
    console.log(productdetails)
  return (
    <>
     <div className='productContainer'>
        <div className='productImage'>
            <img src={productdetails[0].image}/>
        </div>
        <div className='productDetails'>
            <h2>{productdetails[0].title}</h2>
            <h2>{productdetails[0].descriptio}</h2>
            {/* <h2>{productdetails[0].rating
            }</h2> */}
            <h2>${productdetails[0].price
            }</h2>
            
        </div>
     </div>
    </>
  )
}

export default SingleProduct
