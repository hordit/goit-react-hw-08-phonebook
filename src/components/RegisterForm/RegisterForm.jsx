import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { CustomBox, CustomButtonSub, CustomForm, CustomTextField } from 'components/CustomElements/CustomForm';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import axios from 'axios';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .matches(/^(?=.*[a-zA-Z].*[a-zA-Z])(?=.*\d).{6,}$/, 'Password must contain at least 6 characters, including 2 letters')
      .required('Password is required'),
  });

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
  
    try {
      await validationSchema.validate({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      });
  
      const checkEmailResponse = await axios.get(`/users?email=${form.elements.email.value}`);
  
      if (checkEmailResponse.status === 200) {
        toast.error('Email already exists');
        return;
      }
  
      const formData = {
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      };
  
      const resultAction = await dispatch(register(formData));
  
      if (register.fulfilled.match(resultAction)) {
        toast.success('Registration successful');
        form.reset();
      } else {
        toast.error('Registration failed');
      }
    } catch (error) {
      toast.error('Email already exists');
    }
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
      <CustomBox>
        <CustomButtonSub type="submit" variant="contained" color="primary">
          Register
        </CustomButtonSub>
      </CustomBox>
    </CustomForm>
  );
};

export default RegisterForm;
