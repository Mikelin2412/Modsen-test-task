import { styled, createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend+Deca:wght@100..900&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Lexend Deca', sans-serif;
  }

  #root {
    margin: 0 auto;
    min-height: 100vh;
    background-color: #FAFAFA;

    display: flex;
    flex-direction: column;
  }
`;

export const MainContent = styled.main`
  margin: auto;
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
