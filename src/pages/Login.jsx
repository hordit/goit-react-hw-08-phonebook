import LoginForm from 'components/LoginForm/LoginForm';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <main>
      <h2>Log In</h2>
      <LoginForm />
      <p>
        Are you not yet registered?
        <NavLink to="/register">Sign up</NavLink>
      </p>
    </main>
  );
};

export default Login;
