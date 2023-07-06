import { Box, Button, TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CustomTextField = styled(TextField)`
  & .MuiOutlinedInput-notchedOutline {
    border-color: #3e7ca9;
  }
  &::placeholder {
    color: #3e7ca9;
  }
`;

export const CustomBox = styled(Box)`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

export const CustomButtonSub = styled(Button)`
   && {
    color: #3e7ca9;
    background-color: transparent;
    box-shadow: 1px 1px 8px rgba(62, 124, 169);
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      color: #01191f;
      background-color: #3e7ca9;
    }
  }
`;

export const CustomNavLink = styled(NavLink)`
  color: #3e7ca9;
  text-decoration: underline;
  padding: 5px;

  &:hover {
    color: #01191f;
  }
`;