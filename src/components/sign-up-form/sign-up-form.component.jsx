import './sign-up-form.style.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../firebase/firebase.utils.js'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

import { signUpStart } from '../../store/user/user.action.js'

const defaultFormField = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [FormFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = FormFields;
  const dispatch = useDispatch();


  const resetFormFields = () => {
    setFormFields(defaultFormField)
  }

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormFields({
      ...FormFields,
      [name]: value
    })
  };

  const handleSumbit = async (event) => {
    event.preventDefault();
    
    if (password !== confirmPassword) {
      alert('passwords do not match');
      return
    }

    try {
      dispatch(signUpStart(email, password, displayName))
      resetFormFields()
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('can not same email')
      } else {
        console.log(error.message);
      }
    }
  }

  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>sign up with your email and password</span>
      <form onSubmit={handleSumbit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
