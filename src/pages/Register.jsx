import RegisterForm from 'components/RegisterForm/RegisterForm';
import { NavLink } from 'react-router-dom';

const Register = () => {
  return (
    <main>
       <h2>Registration</h2>
      <RegisterForm />
      <p>
      Have you already signed up?
      <NavLink to='/login'>Sign in</NavLink>
      </p>
    </main>
  );
};

export default Register;
