import { createContext, useReducer } from 'react'
import { createAction } from '../utils/reducer.util.js'

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItems = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

  if (existingCartItems) {
    return cartItems.map(cartItem => cartItem.id === productToAdd.id 
      ? {...cartItem, quantity: cartItem.quantity + 1}
      : cartItem
    )
  }

  return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItems = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)

  if (existingCartItems.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map((cartItem) => 
    cartItem.id === cartItemToRemove.id
    ? {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem
  )
}

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0
})

const CART_ACTION_TYPES = {
  SET_CART_ITEM: 'SET_CART_ITEM',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
}

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0
}

const cartReducer = (state, action) => {
  const { type, payload } = action
  
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEM:
      return {
        ...state,
        ...payload
      }
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload
      }
  
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`)
  }
}


export const CartProvider = ({children}) => {
  const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] = useReducer(cartReducer, INITIAL_STATE)

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((acc, cur) => acc + cur.quantity, 0)
    const newCartTotal = newCartItems.reduce((acc, cur) => acc + cur.price*cur.quantity, 0)

    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEM, {
      cartItems: newCartItems, 
      cartCount: newCartCount,
      cartTotal: newCartTotal
    }))
  }

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool))
  }


  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    updateCartItemsReducer(newCartItems)
  }
  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove)
    updateCartItemsReducer(newCartItems)
  }
  const clearItemFromCart = (cartItemToRemove) => {
    const newCartItems = clearCartItem(cartItems, cartItemToRemove)
    updateCartItemsReducer(newCartItems)
  }
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems, 
    addItemToCart, 
    removeItemFromCart,
    clearItemFromCart,
    cartCount,
    cartTotal
  }
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}