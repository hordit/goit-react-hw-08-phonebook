import CustomButton from 'components/CustomElements/CustomButton';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <CustomButton component={NavLink} to="/register">Register</CustomButton>
      <CustomButton component={NavLink} to="/login">Log In</CustomButton>
    </div>
  );
};

export default AuthNav;
