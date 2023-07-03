import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Box } from '@mui/material';
import {
  CustomButtonSub,
  CustomForm,
  CustomTextField,
} from 'components/CustomElements/CustomForm';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <CustomForm onSubmit={handleSubmit} autoComplete="off">
      <CustomTextField
        label="Username"
        name="name"
        variant="outlined"
        size="small"
        fullWidth
        margin="normal"
      />
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
      <Box display="flex" justifyContent="center" mt={2}>
        <CustomButtonSub type="submit" variant="contained" color="primary">
          Register
        </CustomButtonSub>
      </Box>
    </CustomForm>
  );
};

export default RegisterForm;
