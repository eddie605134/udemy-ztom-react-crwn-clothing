import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context'

import CartItem from '../cart-item/cart-item.component'
import Button from '../button/button.component'
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems
} from './cart-dropdown.style'

const CartDropdown = () => {

  const { cartItems, setIsCartOpen } = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
    setIsCartOpen(false)
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length 
            ? cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))
            : (
              <EmptyMessage>Your cart is empty</EmptyMessage>
            )
        }
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Checkout</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown