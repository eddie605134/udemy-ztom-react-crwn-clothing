import './App.css';


import Home from './routes/home/home.component.jsx'
import Navigation from './routes/navigation/navigation.component.jsx'
import Authentication from './routes/authentication/authentication.component.jsx'
import CheckOut from './routes/checkout/checkout.component.jsx'
import Shop from './routes/shop/shop.component.jsx'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

// import { getCurrentUser } from './firebase/firebase.utils.js'
import { checkCurrentUserSession } from './store/user/user.action'

const App = () => {

  const dispatch = useDispatch()

  // 用useEffect加原生firebase寫法
  // useEffect(() => {
  //   const unsubcribe = onAuthStateChangedListener((user) => {
  //     if (user) createUserDocumentFromAuth(user)
  //     dispatch(setCurrentUser(user))
  //   })

  //   return unsubcribe
  // }, [dispatch]);
  useEffect(() => {
    dispatch(checkCurrentUserSession())
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={ <Navigation /> }>
        <Route index element={<Home/>} />
        <Route path='shop/*' element={<Shop/>} />
        <Route path='auth' element={<Authentication/>} />
        <Route path='checkout' element={<CheckOut/>} />
      </Route>
    </Routes>
  );
}

export default App;
