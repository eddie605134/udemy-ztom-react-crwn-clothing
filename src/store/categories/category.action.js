import { createAction } from '../../utils/reducer.util'
import { CATEGORIES_ACTION_TYPE } from './category.type'

export const setCategories = (categoriesArray) => 
  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray)
