import React from 'react';
import { Heading, TopBar, Logo, NavList, NavElement, Span } from './style';
import logo from '@assets/logos/museum-logo-light.svg';
import bookmark from '@assets/icons/bookmark.svg';
import home from '@assets/icons/home.svg';
import { Link, useLocation } from 'react-router-dom';
import { FAVORITES_ROUTE, HOME_ROUTE } from '@constants/user_routes';

const Header: React.FunctionComponent = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <Heading>
      <TopBar>
        <Logo src={logo} alt="logo" />
        <nav>
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
        </nav>
      </TopBar>
    </Heading>
  );
};

export default Header;
