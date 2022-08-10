import { useDispatch, useSelector } from 'react-redux'
import { selectCartCount, selectCartIsOpen } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action'
// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context'
import {
  ShoppongIcon,
  CartIconContainer,
  ItemCount
} from './cart-icon.style'

const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)
  const dispatch = useDispatch()
  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectCartIsOpen)
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))
  
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppongIcon />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon