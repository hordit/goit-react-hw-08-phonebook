import { CustomTextField } from 'components/CustomElements/CustomForm';
import styled from 'styled-components';

export const CustomTextFieldStyled = styled(CustomTextField)`
  &:hover,
  &:focus {
    input {
      border-color: white;
    }
    label.Mui-focused {
      color: white;
    }
  }
`;
