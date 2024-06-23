import React, { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/header';
import Footer from '@components/footer';
import { GlobalStyles, MainContent, fontStyles } from '@utils/global_styles';
import { ThemeProvider } from 'styled-components';
import useFetch from '@utils/hooks/useFetch';
import { IArtworks } from '@utils/interfaces';

export const ArtsProvider = createContext<IArtworks | null>(null);

const Layout: React.FunctionComponent = () => {
  const { data } = useFetch<IArtworks>('https://api.artic.edu/api/v1/artworks');

  return (
    <>
      <ArtsProvider.Provider value={data}>
        <ThemeProvider theme={fontStyles}>
          <GlobalStyles />
          <Header />
          <MainContent>
            <Outlet />
          </MainContent>
          <Footer />
        </ThemeProvider>
      </ArtsProvider.Provider>
    </>
  );
};

export default Layout;
