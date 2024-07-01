/* eslint-disable max-lines */
import { FONTS } from '@constants/static';
import { createGlobalStyle, styled } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: ${FONTS.Lexend_deca.name};
    src: url(${FONTS.Lexend_deca.path}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: ${FONTS.Inter.name};
    src: url(${FONTS.Inter.path}) format('truetype');
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
    font-family: ${FONTS.Lexend_deca.name}, sans-serif;
  }
`;

export const MainContent = styled.main`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const theme = {
  fonts: {
    sizes: {
      h1: '64px',
      h3: '32px',
      h4: '24px',
      h5: '16px',
      p: '16px',
      span: '14px',
      pagination: '18px',
      header: '18px',
    },
    weights: {
      bold: 700,
      semi_bold: 600,
      medium: 500,
      regular: 400,
    },
  },
  colors: {
    mainBackground: '#fafafa',
    header: 'linear-gradient(-90deg, #343333 17%, #484848 59%, #282828 99%)',
    footer: '#ffffff',
    input: 'rgba(57, 57, 57, 5%)',
    highlightedWords: '#f17900',
    font: '#393939',
    fontLight: '#ffffff',
    cardBody: '#ffffff',
    dropdownMenu: '#ffffff',
    dropdownItemHover: '#f0f0f0',
    detailedWords: '#e0a449',
    cardsBorder: '#f0f1f1',
    paginationHover: '#f1f1f1',
    hiddenBackground: 'rgba(0, 0, 0, 0.5)',
    favoriteButtonOn: 'rgba(251, 215, 178, 100%)',
    favoriteButtonOff: '#F9F9F9',
    select: '#f1f1f1',

    loaderBackground: '#262626',
    loaderMainCube: '#f17900',
    loaderAdditionalCube: '#ffd4a8',
  },
  paddings: {
    m: '40px',
    s: '16px',
    xs: '8px',
  },
  margins: {
    xxl: '120px',
    xl: '96px',
    l: '60px',
    m: '40px',
    s: '20px',
    xs: '16px',
  },
  media: {
    desktop: '1440px',
    tablet: '867px',
    mobile: '390px',
  },
};
