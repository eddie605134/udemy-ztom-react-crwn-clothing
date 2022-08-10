import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux'

// import { CartContext } from '../../contexts/cart.context'

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart
} from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'

import { 
  CheckoutItemContainer, 
  Quantity,
  ImageContainer,
  RemoveButton
} from './checkout-item.style'

import { cartItem as TCartItem } from '../../store/cart/cart.type'
export type CheckProps = {
  cartItem: TCartItem
}

const CheckoutItem: FC<CheckProps> = ({cartItem}) => {
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
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <span className="name">{name}</span>
      <Quantity>
        <div 
          className="arrow" 
          onClick={removeFromCartHandler}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span> 
        <div 
          className="arrow" 
          onClick={addToCartHandler}
        >
          &#10095;
        </div>
      </Quantity>
      <span className="price">{price}</span>
      <RemoveButton 
        onClick={clearItemHandler}
      >
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  )
}

export default  CheckoutItem