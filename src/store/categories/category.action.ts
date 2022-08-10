import { createAction, Action, ActionWithPayload, withMather } from '../../utils/reducer.util'
import { CATEGORIES_ACTION_TYPE, Category } from './category.type'

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START>
export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, Category[]>
export type FetchCategoriesError = ActionWithPayload<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, Error>
export type CategoryAction = FetchCategoriesStart | FetchCategoriesSuccess | FetchCategoriesError

// import { getCategoriesAndDocuments } from '../../firebase/firebase.utils.js'
// export const setCategories = (categoriesArray) => 
//   createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray)


export const fetchCategoriesStart = withMather((): FetchCategoriesStart =>
createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START)) 

export const fetchCategoriesSuccess = withMather((categoriesArray: Category[]): FetchCategoriesSuccess =>
createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArray))

export const fetchCategoriesFailed = withMather((error: Error): FetchCategoriesError =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error))

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
