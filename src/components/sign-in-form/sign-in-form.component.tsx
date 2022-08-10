import { SignUpContainer, ButtonsContainer } from './sign-in-form.style';
import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
// import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../firebase/firebase.utils.js'

import { googleSignInStart, emailSignInStart } from '../../store/user/user.action'

import FormInput from '../form-input/form-input.component'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'

/*
  Redirect的用法
  const logGoogleRedirect = async () => {
    const { user } = await signInWithGoogleRedirect()
  }

  useEffect(() => {
    async function getR(params) {
        const respone = await getRedirectResult(auth)
      if (respone) {
        const userDocRef = await createUserDocumentFromAuth(respone.user)
        console.log(userDocRef);
      }
    }

    getR()
  }, [])
  */

const defaultFormField = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [FormFields, setFormFields] = useState(defaultFormField);
  const { email, password } = FormFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormField)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const {name, value} = event.target
    setFormFields({
      ...FormFields,
      [name]: value
    })
  };

  const signInWithGoogle = async () => {
    // await signInWithGooglePopup()
    dispatch(googleSignInStart())
  }

  const handleSumbit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    try {
      dispatch(emailSignInStart(email, password)) 
      resetFormFields()
    } catch (error) {
      console.log(error)
      // switch (error.code) {
      //   case 'auth/wrong-password':
      //     alert('incorrect password')
      //     break;
      //   case 'auth/user-not-found':
      //     alert('invalid email or password')
      //     break;
      //   default:
      //     console.log(error.message)
      //     break;
      // }
    }
  }

  return (
    <SignUpContainer>
      <h2>Already have an account</h2>
      <span>sign up with your email and password</span>
      <form onSubmit={handleSumbit}>
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
        <ButtonsContainer>
          <Button buttonType={BUTTON_TYPE_CLASSES.base} type="submit">Sign in</Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign in</Button>
        </ButtonsContainer>
        
      </form>
    </SignUpContainer>
  );
};

export default SignInForm;
