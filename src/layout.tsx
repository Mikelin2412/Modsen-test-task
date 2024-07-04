import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/header';
import Footer from '@components/footer';
import { GlobalStyles, MainContent, theme } from '@utils/global_styles';
import { ThemeProvider } from 'styled-components';
import ErrorBoundary from '@utils/errors/error_boundaries';
import Loader from '@components/loader';

const Layout: React.FunctionComponent = () => {
  return (
    <>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
          <MainContent>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </MainContent>
          <Footer />
        </ThemeProvider>
      </ErrorBoundary>
    </>
  );
};

export default Layout;
