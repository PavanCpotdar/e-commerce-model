import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../component2/CartItem'

function Cart() {
  const cartItems = useSelector(state => state.cardReducer);
  return (
    <>
      <div className='container'>
      <table>
        <thead>
        <th>Picture</th>
        <th>Title</th>
        <th>Quantity</th>
        <th>Delete</th>
        <th>Price</th>
        </thead>
        <tbody>
        {cartItems.length > 0 ? cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />):<p>No item are added to cart</p>}
       {cartItems?.length > 0 &&  <tr>
          <td></td>
          <td></td>
          <td></td>
          <td><h4>Total</h4></td>
          <td> ${cartItems.reduce((accumulator, cartItem) => (accumulator + cartItem.price*cartItem.quantity), 0)}</td>
        </tr>}
        </tbody>
        </table>
        
      </div>
     
      <div >
        {
        
        <span className='totalCartAmountRow'>
         
          </span>
        }
      </div>
    </>
  )
}

export default Cart
