import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'

import { signOutUser } from '../../firebase/firebase.utils.js'

import ShopIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { 
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink
} from './navigation.styles.jsx'

const Navigation = () => {

  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (<>
    <NavigationContainer>
      <LogoContainer to='/'>
        <CrwnLogo className="logo" />
      </LogoContainer>
      
      <NavLinks>
        <NavLink to='/shop'>shop</NavLink>
        {
          currentUser 
            ? <NavLink as="span" onClick={signOutUser}>sign out</NavLink>
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