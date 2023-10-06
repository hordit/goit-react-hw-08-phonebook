import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
import { Header, StyledDivContainer } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <StyledDivContainer>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </StyledDivContainer>
    </Header>
  );
};

export default AppBar;
