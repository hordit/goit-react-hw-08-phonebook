import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  min-height: 60px;
  padding: 10px 20px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.backgroundColor.appBar};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  @media (max-width: 540px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
  margin-bottom: -60px; 
`;

export const StyledDivContainer = styled.div`
display: flex; 
align-items: center;
justify-content: center;
`
