import { createAction } from '../../utils/reducer.util'
import { CATEGORIES_ACTION_TYPE } from './category.type'

// import { getCategoriesAndDocuments } from '../../firebase/firebase.utils.js'
export const setCategories = (categoriesArray) => 
  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray)


export const fetchCategoriesStart = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START, categoriesArray)

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArray)

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error)

// thunk 寫法  
// export const fetchCategoriesAsync = () => async (dispatch) => {
//   dispatch(fetchCategoriesStart())
//   try {
//     const categoriesArry = await getCategoriesAndDocuments()
//     dispatch(fetchCategoriesSuccess(categoriesArry))
//   } catch (error) {
//     dispatch(fetchCategoriesFailed(error))
//   }
  
// }
