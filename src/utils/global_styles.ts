import { styled, createGlobalStyle } from 'styled-components';
import lexendDeca from '@assets/fonts/Lexend_Deca/LexendDeca-VariableFont_wght.ttf';
import inter from '@assets/fonts/Inter/Inter-VariableFont_slnt,wght.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Lexend Deca';
    src: url(${lexendDeca}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${inter}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  #root {
    margin: 0 auto;
    min-height: 100vh;
    background-color: #FAFAFA;

    display: flex;
    flex-direction: column;
    font-family: 'Lexend Deca', sans-serif;
  }
`;

export const MainContent = styled.main`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const fontStyles = {
  sizes: {
    h1: '64px',
    h3: '32px',
    h4: '24px',
    h5: '16px',
    p: '16px',
    span: '14px',
  },
  weights: {
    bold: 700,
    semi_bold: 600,
    medium: 500,
    regular: 400,
  },
};
