import {AuthenticationContainer} from './authentication.styles'
import SigUpForm from '../../components/sign-up-form/sign-up-form.component';
import SigInForm from '../../components/sign-in-form/sign-in-form.component';

const Authentication = () => {
  return (<AuthenticationContainer>
    <SigInForm />
    <SigUpForm />
  </AuthenticationContainer>)
}

export default Authentication