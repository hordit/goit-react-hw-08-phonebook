import styled from 'styled-components';

export const StyledMain = styled.main`
  position: relative;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// export const StyledVideo = styled.video`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   z-index: -1;
// `;

export const StyledH1 = styled.h1`
  color: ${p => p.theme.colors.white};
  font-size: 50px;
  font-weight: 400;
`;

export const StyledText = styled.p`
padding: 20px;
  color: ${p => p.theme.colors.white};
  font-size: 30px;
`;
