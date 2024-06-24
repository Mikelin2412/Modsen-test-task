import React, { useState, useEffect } from 'react';
import {
  Heading,
  TopBar,
  Logo,
  NavList,
  NavElement,
  Span,
  BurgerMenu,
  MobileMenu,
  NavWrapper,
} from './style';
import logo from '@assets/logos/museum-logo-light.svg';
import bookmark from '@assets/icons/bookmark.svg';
import home from '@assets/icons/home.svg';
import { Link, useLocation } from 'react-router-dom';
import { FAVORITES_ROUTE, HOME_ROUTE } from '@constants/user_routes';

const Header: React.FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <Heading>
      <TopBar>
        <Logo src={logo} alt="logo" />
        <NavWrapper>
          <NavList>
            {location.pathname !== HOME_ROUTE ? (
              <Link to={HOME_ROUTE}>
                <NavElement>
                  <img src={home} alt="home" />
                  <Span>Home</Span>
                </NavElement>
              </Link>
            ) : null}
            <Link to={FAVORITES_ROUTE}>
              <NavElement>
                <img src={bookmark} alt="bookmark" />
                <Span>Your favorites</Span>
              </NavElement>
            </Link>
          </NavList>
        </NavWrapper>
        {isMenuOpen && (
          <MobileMenu>
              <NavList>
                {location.pathname !== HOME_ROUTE ? (
                  <Link to={HOME_ROUTE}>
                    <NavElement onClick={toggleMenu}>
                      <img src={home} alt="home" />
                      <Span>Home</Span>
                    </NavElement>
                  </Link>
                ) : null}
                <Link to={FAVORITES_ROUTE}>
                  <NavElement onClick={toggleMenu}>
                    <img src={bookmark} alt="bookmark" />
                    <Span>Your favorites</Span>
                  </NavElement>
                </Link>
              </NavList>
          </MobileMenu>
        )}
        <BurgerMenu onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </BurgerMenu>
      </TopBar>
    </Heading>
  );
};

export default Header;
