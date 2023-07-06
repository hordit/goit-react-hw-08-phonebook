import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 20px;
  color: ${p => p.theme.colors.white};
`;

export const InputStyled = styled(Field)`
  width: 100%;
  padding: 8px;
  margin-top: 3px;
  color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.activeNavLink};
  border-radius: 4px;
  outline: none;
  background-color: transparent;
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: red;
`;
