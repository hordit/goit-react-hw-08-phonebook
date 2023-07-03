import RegisterForm from 'components/RegisterForm/RegisterForm';
import { NavLink } from 'react-router-dom';
import {
  ContentContainer,
  MainContainer,
} from './Register.styled';

const Register = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <h2>Registration</h2>
        <RegisterForm />
        <p>
          Have you already signed up?
          <NavLink to="/login">Sign in</NavLink>
        </p>
      </ContentContainer>
    </MainContainer>
  );
};

export default Register;
