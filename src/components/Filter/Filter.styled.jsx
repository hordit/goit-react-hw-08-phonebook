import styled from 'styled-components';

export const DivWrapper = styled.div``;
export const FinedLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${p => p.theme.colors.white};
`;
export const InputFilter = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 3px;
  color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.activeNavLink};
  border-radius: 4px;
  outline: none;
  background-color: transparent;
`;
