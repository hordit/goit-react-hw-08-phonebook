import React from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const StyledButton = styled(Button)(() => ({
  color: '#319AA0',
  fontSize: '13px',
  padding: '5px 20px',
  marginRight: '10px',

  '&:hover': {
    backgroundColor: '#01191F',
    color: '#319AA0',
    borderRadius: '4px',
    padding: '5px 20px',
  },
  
  '&.active': {
    backgroundColor: '#319AA0',
    color: '#01191F',
    borderRadius: '4px',
    padding: '5px 20px',
  },

  '@media (max-width: 540px)': {
    fontSize: '12px',
    padding: '5px 8px',
    marginRight: '10px',
  }
}));

const CustomButton = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default CustomButton;
