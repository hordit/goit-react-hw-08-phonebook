import styled from 'styled-components';
import backImagePhonebook from '../../images/backgroundPhonebook.jpg';
import { Box } from '@mui/material';

export const MainContainer = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  background: url(${backImagePhonebook});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
`;

export const SectionContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
  max-width: 400px;
  background-color: transparent;
  border-radius: 4px;
  margin: 0 8px;

  &:first-child {
    margin-left: 0;
    align-items: center;
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 640px) {
    margin: 8px 0;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
      align-items: center;
    }
  }
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
`;

export const PhonebookTitle = styled.h1`
  font-size: 24px;
  margin: 20px auto;
  color: white;
`;
