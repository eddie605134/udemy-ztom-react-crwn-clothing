import './authentication.styles.scss'
import SigUpForm from '../../components/sign-up-form/sign-up-form.component';
import SigInForm from '../../components/sign-in-form/sign-in-form.component';

const Authentication = () => {
  return (<div className="authentication-container">
    <SigInForm />
    <SigUpForm />
  </div>)
}

export default Authentication