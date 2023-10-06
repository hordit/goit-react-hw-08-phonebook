import CustomButton from 'components/CustomElements/CustomButton';
import { NavLink } from 'react-router-dom';
import { StyledCustomButton } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <div>
      <CustomButton component={NavLink} to="/register">Register</CustomButton>
      <StyledCustomButton component={NavLink} to="/login">Log In</StyledCustomButton>
    </div>
  );
};

export default AuthNav;
