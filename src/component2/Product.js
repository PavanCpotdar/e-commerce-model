import React from 'react'
import { addItemToCard } from '../store/CardReducer'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'


function Product({ product }) {
    const dispatch = useDispatch();
  
    return (
        <>
            <div className='productCard' >
                <Link to={`/product/${product.id}`}>
                <img src={product.image} alt="Image" className='productImage' />
                <p className='productTitle' >title : {product.title}</p>
                </Link>
                <button className='productButton' onClick={() => dispatch(addItemToCard(product))}>Add cart</button>
                <button className='productButton'>Add WishList</button>
            </div>
        </>
    )
}

export default Product
