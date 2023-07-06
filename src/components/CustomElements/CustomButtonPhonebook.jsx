import React from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const StyledButton = styled(Button)(() => ({
  boxShadow:
    '0px 0px 8px 2px rgba(235, 241, 241, 0.7), 0px 0px 8px 2px rgba(209, 216, 216, 0.7)',

  color: '#fff',
  borderRadius: '4px',
  padding: '5px 20px',
  '&:hover': {
    boxShadow:
      '0px 0px 8px 2px rgba(235, 241, 241, 0.7), 0px 0px 8px 2px rgba(209, 216, 216, 0.7)',
    backgroundColor: '#032c4b',
  },
}));

const CustomButtonPhonebook = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default CustomButtonPhonebook;
