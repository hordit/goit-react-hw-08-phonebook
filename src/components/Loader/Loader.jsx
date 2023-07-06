import React from 'react';
import { CircleLoader } from 'react-spinners';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = ({ color, size }) => (
  <LoaderContainer>
    <CircleLoader color={color} size={size} />
  </LoaderContainer>
);

export default Loader;
