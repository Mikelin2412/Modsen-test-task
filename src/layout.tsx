import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/header';
import Footer from '@components/footer';
import { GlobalStyles, MainContent } from '@utils/global_styles';

const Layout: React.FunctionComponent = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </>
  );
};

export default Layout;
