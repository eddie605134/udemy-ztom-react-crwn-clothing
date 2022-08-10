import { ProductCardContainer, Footer } from './product-card.style';
// import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
// import { CartContext } from '../../contexts/cart.context'
import { addItemToCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'

const ProductCard = ({product}) => {
  const dispatch = useDispatch()
  const { name, price, imageUrl } = product
  const cartItems = useSelector(selectCartItems)

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product))
  
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to card</Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
