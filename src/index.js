import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'
// import { UserProvider } from './contexts/user.context.jsx'
// import { CategoriesProvider } from './contexts/categories.context.jsx'
// import { CartProvider } from './contexts/cart.context.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe.util'
import { store, persistor } from './store/store'

import App from './App';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          {/* <UserProvider> */}
            {/* <CategoriesProvider> */}
            {/* <CartProvider> */}
            <Elements stripe={stripePromise }>
              <App />
            </Elements>
            {/* </CartProvider> */}
            {/* </CategoriesProvider> */}
          {/* </UserProvider> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
