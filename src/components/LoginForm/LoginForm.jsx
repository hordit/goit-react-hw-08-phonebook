import {
  CustomBox,
  CustomButtonSub,
  CustomForm,
  CustomTextField,
} from 'components/CustomElements/CustomForm';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handlesubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <CustomForm onSubmit={handlesubmit} autoComplete="off">
      <CustomTextField
        label="Email"
        name="email"
        variant="outlined"
        size="small"
        fullWidth
        margin="normal"
      />
      <CustomTextField
        label="Password"
        name="password"
        type="password"
        variant="outlined"
        size="small"
        fullWidth
        margin="normal"
      />
      <CustomBox>
        <CustomButtonSub type="submit" variant="contained" color="primary">
          Log In
        </CustomButtonSub>
      </CustomBox>
    </CustomForm>
  );
};

export default LoginForm;
