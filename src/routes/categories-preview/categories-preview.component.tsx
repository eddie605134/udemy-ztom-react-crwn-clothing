// import { useContext } from 'react'
// import { CategoriesContext } from '../../contexts/categories.context'
import { useSelector } from 'react-redux'

import { selectorCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/category.selector'

import CategoryPreview from '../../components/category-preview/category-preview.component'
import Spinner from '../../components/spinner/spinner.components'


const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext)
  const categoriesMap = useSelector(selectorCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)

  return (<>
    {
      isLoading 
        ? <Spinner/>
        : (
          Object.keys(categoriesMap).map(title => {
            const products = categoriesMap[title]
            return <CategoryPreview key={title} title={title} products={products}/>
          }))
    }
  </>
  )   
}

export default CategoriesPreview 