import { CategoryItem } from '../categories/category.type'
import { createAction, withMather, ActionWithPayload } from '../../utils/reducer.util'
import { CART_ACTION_TYPES, cartItem } from './cart.type'

const addCartItem = (cartItems: cartItem[], productToAdd: CategoryItem) => {
  const existingCartItems = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

  if (existingCartItems) {
    return cartItems.map(cartItem => cartItem.id === productToAdd.id 
      ? {...cartItem, quantity: cartItem.quantity + 1}
      : cartItem
    )
  }

  return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems: cartItem[], cartItemToRemove: CategoryItem) => {
  const existingCartItems = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)

  if (existingCartItems?.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map((cartItem: cartItem) => 
    cartItem.id === cartItemToRemove.id
    ? {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem
  )
}

const clearCartItem = (cartItems: cartItem[], cartItemToClear: CategoryItem) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>
export type SetCartItem = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEM, cartItem[]>

export const setIsCartOpen = withMather((bool: boolean): SetIsCartOpen=> 
createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool))

export const setCartItems = withMather(
  (cartItems: cartItem[]): SetCartItem => createAction(CART_ACTION_TYPES.SET_CART_ITEM, cartItems)
)

export const addItemToCart = (cartItems: cartItem[], productToAdd: CategoryItem): SetCartItem => {
  const newCartItems = addCartItem(cartItems, productToAdd)
  return setCartItems(newCartItems)
}
export const removeItemFromCart = (cartItems: cartItem[], cartItemToRemove: CategoryItem): SetCartItem => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove)
  return setCartItems(newCartItems)
}
export const clearItemFromCart = (cartItems: cartItem[], cartItemToRemove: CategoryItem): SetCartItem => {
  const newCartItems = clearCartItem(cartItems, cartItemToRemove)
  return setCartItems(newCartItems)
}
