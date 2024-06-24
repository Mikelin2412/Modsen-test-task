import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;

  align-self: flex-end;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const FooterBar = styled.div`
  margin: 20px 50px;
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MuseumLogo = styled.img`
  width: 206px;
  height: 63px;

  @media screen and (max-width: 867px) {
    width: 100px;
    height: 100%;
  }
`;

export const ModsenLogo = styled.img`
  width: 164px;
  height: 59px;

  @media screen and (max-width: 867px) {
    width: 100px;
    height: 100%;
  }
`;
