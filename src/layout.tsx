import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/header';
import Footer from '@components/footer';
import { GlobalStyles, MainContent, fontStyles } from '@utils/global_styles';
import { ThemeProvider } from 'styled-components';
import ErrorBoundary from '@utils/errors/error_boundaries';

const Layout: React.FunctionComponent = () => {
  return (
    <>
      <ErrorBoundary>
        <ThemeProvider theme={fontStyles}>
          <GlobalStyles />
          <Header />
          <MainContent>
            <Outlet />
          </MainContent>
          <Footer />
        </ThemeProvider>
      </ErrorBoundary>
    </>
  );
};

export default Layout;
