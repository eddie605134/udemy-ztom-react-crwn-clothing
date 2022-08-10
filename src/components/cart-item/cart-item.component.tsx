import { FC } from 'react'
import { CartItemContainer, ItemDetails } from './cart-item.style'
import { cartItem as cartItem } from '../../store/cart/cart.type'

export type CartItemProps = {
  cartItem: cartItem
}

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">{quantity} x ${price}</span>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem