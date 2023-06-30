import styled from 'styled-components';

export const Header = styled.header`
top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: ${p => p.theme.colors.white};
  background-color: #0c1a3f;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
