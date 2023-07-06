import styled from 'styled-components';
import backImage from '../../images/background.jpg';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url(${backImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ContentContainer = styled.div`
  max-width: 400px;
  padding: 20px;
  border: 1px solid #3e7ca9;
  border-radius: 4px;
  background-color: #fefefe29;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;
