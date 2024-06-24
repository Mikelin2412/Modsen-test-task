import React from 'react';
import { FooterContainer, FooterBar, MuseumLogo, ModsenLogo } from './style';
import museumLogo from '@assets/logos/museum-logo-dark.svg';
import modsenLogo from '@assets/logos/modsen-logo.png';

const Footer: React.FunctionComponent = () => {
  return (
    <FooterContainer>
      <FooterBar>
        <MuseumLogo src={museumLogo} alt="museum-logo" />
        <ModsenLogo src={modsenLogo} alt="modsen-logo" />
      </FooterBar>
    </FooterContainer>
  );
};

export default Footer;
