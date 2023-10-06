import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const WelcomUser = styled.h4`
  display: flex;
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 540px) {
    font-size: 15px; 
  }
`;
