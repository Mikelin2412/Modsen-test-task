import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@components/header';
import Footer from '@components/footer';
import { GlobalStyles } from '@utils/global_styles';

const Layout: React.FunctionComponent = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout
