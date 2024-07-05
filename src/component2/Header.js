import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import cart from './../assets/cart1.png'

function Header() {
    const cartItemCount =useSelector((state)=>state.cardReducer
);
  return (
    <nav>
        

        <Link to='/'> <h3>E company</h3></Link>
       
       <Link to='/cart'> {cartItemCount?
       <div className='cartImageDiv'>
            <span className='cartCount'>{cartItemCount?.length>0 ? cartItemCount?.reduce((acc,current)=>acc+current.quantity,0): " "}</span>
         <img className="cartImage" src={cart} alt="img" />
         </div> :""}
         </Link>
       
    </nav>
  )
}

export default Header
