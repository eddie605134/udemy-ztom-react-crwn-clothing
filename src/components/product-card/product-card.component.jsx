import './product-card.style.scss';
// import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
// import { CartContext } from '../../contexts/cart.context'
import { addItemToCart } from '../../store/cart/cart.action.js'
import { selectCartItems } from '../../store/cart/cart.selector.js'

const ProductCard = ({product}) => {
  const dispatch = useDispatch()
  const { name, price, imageUrl } = product
  const cartItems = useSelector(selectCartItems)

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product))
  
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to card</Button>
    </div>
  );
};

export default ProductCard;
