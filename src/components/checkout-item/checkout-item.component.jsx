import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { CartContext } from '../../contexts/cart.context'

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart
} from '../../store/cart/cart.action.js'
import { selectCartItems } from '../../store/cart/cart.selector.js'

import './checkout-item.style.scss'

const CheckoutItem = ({cartItem}) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  // const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext)

  const { name, quantity, price, imageUrl} = cartItem

  const clearItemHandler = () => {
    dispatch(clearItemFromCart(cartItems, cartItem))
  }

  const addToCartHandler = () => dispatch(addItemToCart(cartItems, cartItem))
  const removeFromCartHandler = () => dispatch(removeItemFromCart(cartItems, cartItem))
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeFromCartHandler}>&#10094;</div>
        <span className="value">{quantity}</span> 
        <div className="arrow" onClick={addToCartHandler}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
    </div>
  )
}

export default  CheckoutItem