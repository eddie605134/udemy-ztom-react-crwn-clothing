import { takeLatest, all, call, put } from 'typed-redux-saga/macro'

import { getCategoriesAndDocuments } from '../../firebase/firebase.utils'

import { fetchCategoriesSuccess, fetchCategoriesFailed, fetchCategoriesStart } from './category.action'

import { CATEGORIES_ACTION_TYPE } from './category.type'


export function* fetchCategoriesAsync() {
  try {
    const categoriesArry = yield* call(getCategoriesAndDocuments)
    yield* put(fetchCategoriesSuccess(categoriesArry))
  } catch (error) {
    yield* put(fetchCategoriesFailed(error as Error))
  }
}

export function* onFetchCategories () {
  yield* takeLatest(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga () {
  yield* all([
    call(onFetchCategories)
  ])
} 