import { Outlet } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
// import { useContext } from 'react';
// import { UserContext } from '../../contexts/user.context'
// import { CartContext } from '../../contexts/cart.context'
import { selectorCurrentUser } from '../../store/user/user.selector'
import { selectCartIsOpen } from '../../store/cart/cart.selector'
import { signOutStart } from '../../store/user/user.action'

// import { signOutUser } from '../../firebase/firebase.utils.js'

import ShopIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { 
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink
} from './navigation.styles'

const Navigation = () => {

  // const { currentUser } = useContext(UserContext)

  const currentUser = useSelector(selectorCurrentUser)
  // const { isCartOpen } = useContext(CartContext)
  const isCartOpen = useSelector(selectCartIsOpen)

  const dispatch = useDispatch()

  const signOutUser = () => dispatch(signOutStart())


  return (<>
    <NavigationContainer>
      <LogoContainer to='/'>
        <CrwnLogo className="logo" />
      </LogoContainer>
      
      <NavLinks>
        <NavLink to='/shop'>shop</NavLink>
        {
          currentUser 
            ? <NavLink as="span" onClick={ signOutUser }>sign out</NavLink>
            : <NavLink to='/auth'>sign in</NavLink>
        }
        <ShopIcon></ShopIcon>
      </NavLinks>
      { isCartOpen && <CartDropdown /> }
    </NavigationContainer>
    <Outlet></Outlet>
  </>)
}

export default Navigation