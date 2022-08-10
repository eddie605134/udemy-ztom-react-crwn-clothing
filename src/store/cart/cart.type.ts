import { CategoryItem } from '../categories/category.type'

export enum CART_ACTION_TYPES {
  SET_CART_ITEM = 'SET_CART_ITEM',
  SET_IS_CART_OPEN = 'SET_IS_CART_OPEN',
  SET_CART_COUNT = 'SET_CART_COUNT',
  SET_CART_TOTAL = 'SET_CART_TOTAL',
}

export type cartItem = CategoryItem & {
  quantity: number;
}