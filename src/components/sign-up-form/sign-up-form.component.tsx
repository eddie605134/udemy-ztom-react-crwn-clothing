import { SignUpContainer } from './sign-up-form.style';
import { useState, FormEvent, ChangeEvent} from 'react';
import { AuthError, AuthErrorCodes } from 'firebase/auth'
import { useDispatch } from 'react-redux';

// import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../firebase/firebase.utils.js'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

import { signUpStart } from '../../store/user/user.action'

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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setFormFields({
      ...FormFields,
      [name]: value
    })
  };

  const handleSumbit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (password !== confirmPassword) {
      alert('passwords do not match');
      return
    }

    try {
      dispatch(signUpStart(email, password, displayName))
      resetFormFields()
    } catch (error) {
      console.log(error);
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('can not same email')
      } else {
        console.log(error);
      }
    }
  }

  return (
    <SignUpContainer>
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
    </SignUpContainer>
  );
};

export default SignUpForm;
