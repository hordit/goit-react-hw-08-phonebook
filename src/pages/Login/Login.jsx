import LoginForm from 'components/LoginForm/LoginForm';
import { ContentContainer, MainContainer } from './Login.styled';
import { CustomNavLink } from 'components/CustomElements/CustomForm';

const Login = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <h2>Log In</h2>
        <LoginForm />
        <p>
          Are you not yet registered?
          <CustomNavLink to="/register">Sign up</CustomNavLink>
        </p>
      </ContentContainer>
    </MainContainer>
  );
};

export default Login;
