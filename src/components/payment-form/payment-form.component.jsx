import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { 
  PaymentFormContainer, 
  FormContainer, 
  PaymentButton } from './payment-form.style'
import { useSelector } from 'react-redux';

import { selectorCurrentUser } from '../../store/user/user.selector';
import { selectCartTotal } from '../../store/cart/cart.selector'

const PaymentForm = () => {
  const stripe = useStripe()
  const element = useElements()
  const amount = useSelector(selectCartTotal) 
  const currentUser = useSelector(selectorCurrentUser) 
  const [ isProcessingPayment, setIsProcessingPayment ] = useState(false)

  const paymentHandler = async (e) => {
    e.preventDefault()
    
    if (!stripe || !element) {
      return
    }

    setIsProcessingPayment(true)

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: amount * 100 })
    }).then(res => res.json());

    const { paymentIntent: { client_secret } } = response

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: element.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest'
        }
      }
    })

    setIsProcessingPayment(false)

    if (paymentResult.error) {
      alert('error')
    } else {
      if (paymentResult.paymentIntent === 'succeeded') {
        alert('success')
      }
    }
  }

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <PaymentButton 
          isLoading={isProcessingPayment} 
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay now 
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
