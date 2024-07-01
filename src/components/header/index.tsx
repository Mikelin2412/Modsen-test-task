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
import { Link, useLocation } from 'react-router-dom';
import { FAVORITES_ROUTE, HOME_ROUTE } from '@constants/user_routes';
import { ICONS, LOGOS } from '@constants/static';

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
        <Logo src={LOGOS.museum.light.path} alt={LOGOS.museum.light.name} />
        <NavWrapper>
          <NavList>
            {location.pathname !== HOME_ROUTE ? (
              <Link to={HOME_ROUTE}>
                <NavElement>
                  <img src={ICONS.home.path} alt={ICONS.home.name} />
                  <Span>Home</Span>
                </NavElement>
              </Link>
            ) : null}
            <Link to={FAVORITES_ROUTE}>
              <NavElement>
                <img
                  src={ICONS.bookmark.yellow.path}
                  alt={ICONS.bookmark.yellow.name}
                />
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
                    <img src={ICONS.home.path} alt={ICONS.home.name} />
                    <Span>Home</Span>
                  </NavElement>
                </Link>
              ) : null}
              <Link to={FAVORITES_ROUTE}>
                <NavElement onClick={toggleMenu}>
                  <img
                    src={ICONS.bookmark.yellow.path}
                    alt={ICONS.bookmark.yellow.name}
                  />
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
