import { FC } from 'react'
import { Link } from 'react-router-dom'

import ProductCard from '../product-card/product-card.component'

import { CategoryPreviewContainer } from './category-preview.style'
import { CategoryItem } from '../../store/categories/category.type'

export type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
}

const CategoryPreview: FC<CategoryPreviewProps> = ({title, products}) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link className="title" to={title}>{title.toLowerCase()}</Link>
      </h2>
      <div className="preview">
        {
          products
            .filter((_, idx) => idx < 4)
            .map((product) => <ProductCard key={product.id} product={product}></ProductCard>)
        }
      </div>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview