import React from 'react';
import { FooterContainer, FooterBar, MuseumLogo, ModsenLogo } from './style';
import { LOGOS } from '@constants/static';

const Footer: React.FunctionComponent = () => {
  return (
    <FooterContainer>
      <FooterBar>
        <MuseumLogo src={LOGOS.museum.dark.path} alt={LOGOS.museum.dark.name} />
        <ModsenLogo src={LOGOS.modsen.path} alt={LOGOS.modsen.name} />
      </FooterBar>
    </FooterContainer>
  );
};

export default React.memo(Footer);
