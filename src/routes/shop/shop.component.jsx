import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'

import { getCategoriesAndDocuments } from '../../firebase/firebase.utils.js'
import { setCategories } from '../../store/categories/category.action.js'

import './shop.style.scss'

const Shop = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments()
      dispatch(setCategories(categoriesArray))
    }

    getCategoriesMap()
  }, [dispatch]);
  return (
    <Routes>
      <Route index element={ <CategoriesPreview /> }></Route>
      <Route path=":category" element={ <Category /> }></Route>
    </Routes>
  )   
}

export default Shop 