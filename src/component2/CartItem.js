import React from 'react';
import deleteIcon from './../assets/icon-delete.png';
import plus from './../assets/icons8-plus-24.png';
import minus from './../assets/icons8-minus-24.png';
import { useDispatch } from 'react-redux';
import { decreaseCartItem, deleteCartItem, increaseCartItem } from '../store/CardReducer';

function CartItem({ cartItem }) {
  const dispatch = useDispatch();

  console.log("object",)
  return (
    <>
      <tr>
        <td> <img src={cartItem.image} className='cartItemImage' /></td>
        <td> <span>{cartItem.title}</span></td>
        <td>
          { cartItem.quantity===1 ?
            <img onClick={() => dispatch(decreaseCartItem(cartItem))} src={deleteIcon} alt='Delete Icon' className='cartDeleteIcon' /> :
            <img onClick={() => dispatch(decreaseCartItem(cartItem))} src={minus} alt='Delete Icon' className='cartDeleteIcon' /> 
            }
         

          <span className='quantitySpan'>{cartItem.quantity} </span>
          <img onClick={() => dispatch(increaseCartItem(cartItem))} src={plus} alt='Delete Icon' className='cartDeleteIcon' /> 
          </td>
        <td><img onClick={() => dispatch(deleteCartItem(cartItem))} src={deleteIcon} alt='Delete Icon' className='cartDeleteIcon' /></td>
        <td>${cartItem.price * cartItem.quantity
        }</td>
      </tr>

      {/* <div className='cartItem'>


      <img src={cartItem.image} className='cartItemImage' />
        <span>{cartItem.title}</span>



        <span><button onClick={() => dispatch(decreaseCartItem(cartItem))} >-</button><span className='quantitySpan'>{cartItem.quantity} </span><button onClick={() => dispatch(increaseCartItem(cartItem))} >+</button> </span>

        <img onClick={() => dispatch(deleteCartItem(cartItem))} src={deleteIcon} alt='Delete Icon' className='cartDeleteIcon' />
        <span>${cartItem.price}</span>

      </div> */}

    </>
  )
}

export default CartItem
