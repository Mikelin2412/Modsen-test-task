import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;

  align-self: flex-end;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.footer};
`;

export const FooterBar = styled.div`
  margin: ${(props) => props.theme.margins.s} 50px;
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MuseumLogo = styled.img`
  width: 206px;
  height: 63px;

  @media screen and (max-width: ${(props) => props.theme.media.tablet}) {
    width: 100px;
    height: 100%;
  }
`;

export const ModsenLogo = styled.img`
  width: 164px;
  height: 59px;

  @media screen and (max-width: ${(props) => props.theme.media.tablet}) {
    width: 100px;
    height: 100%;
  }
`;
