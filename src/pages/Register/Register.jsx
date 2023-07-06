import RegisterForm from 'components/RegisterForm/RegisterForm';
import { ContentContainer, MainContainer } from './Register.styled';
import { CustomNavLink } from 'components/CustomElements/CustomForm';

const Register = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <h2>Registration</h2>
        <RegisterForm />
        <p>
          Have you already signed up?
          <CustomNavLink to="/login">Sign in</CustomNavLink>
        </p>
      </ContentContainer>
    </MainContainer>
  );
};

export default Register;
