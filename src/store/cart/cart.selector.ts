import { createSelector } from 'reselect'
import { CartState } from './cart.reducer'
import { RootState } from '../store'

const selectCartReducer = (state: RootState): CartState => state.cart

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
)

export const selectCartIsOpen = createSelector(
  [selectCartReducer],
  (cart) => {
    return cart.isCartOpen
  }
)

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cur) => acc + cur.quantity, 0)
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cur) => acc + cur.price*cur.quantity, 0)
)