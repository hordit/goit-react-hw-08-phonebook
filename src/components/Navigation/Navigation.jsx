import { useAuth } from 'hooks';
import { NavWrapper, StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavWrapper>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </NavWrapper>
  );
};

export default Navigation;
