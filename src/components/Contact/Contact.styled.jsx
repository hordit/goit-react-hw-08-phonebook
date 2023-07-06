import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const P = styled.p`
  padding-right: 15px;
`;

export const ButtonDelete = styled.button`
  color: ${p => p.theme.colors.white};
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;
