import { useAuth } from 'hooks';
import { NavWrapper } from './Navigation.styled';
import CustomButton from 'components/CustomElements/CustomButton';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavWrapper>
      <CustomButton component={NavLink} to="/">Home</CustomButton>
      {isLoggedIn && <CustomButton component={NavLink} to="/contacts">Contacts</CustomButton>}
    </NavWrapper>
  );
};

export default Navigation;
