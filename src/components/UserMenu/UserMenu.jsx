import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import CustomButton from 'components/CustomElements/CustomButton';
import { UserMenuContainer, WelcomUser } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuContainer>
      <WelcomUser>Welcome, {user.name}!</WelcomUser>
      <CustomButton onClick={() => dispatch(logOut())}>
        Logout
      </CustomButton>
    </UserMenuContainer>
  );
};

export default UserMenu;
