import React from 'react';
import { Heading, TopBar, Logo, NavList, NavElement, Span } from './style';
import logo from '@assets/logos/museum-logo-light.svg';
import bookmark from '@assets/icons/bookmark.svg';

const Header: React.FunctionComponent = () => {
  return (
    <Heading>
      <TopBar>
        <Logo src={logo} alt="logo" />
        <nav>
          <NavList>
            <NavElement>
              <img src={bookmark} alt="bookmark" />
              <Span>Your favorites</Span>
            </NavElement>
          </NavList>
        </nav>
      </TopBar>
    </Heading>
  );
};

export default Header;
