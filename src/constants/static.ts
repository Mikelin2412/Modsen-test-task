import inter_font from '@assets/fonts/Inter/Inter-VariableFont_slnt,wght.ttf';
import lexend_deca_font from '@assets/fonts/Lexend_Deca/LexendDeca-VariableFont_wght.ttf';
import bookmark_yellow from '@assets/icons/bookmark.svg';
import bookmark_orange from '@assets/icons/bookmark-orange.svg';
import home from '@assets/icons/home.svg';
import search from '@assets/icons/search.svg';
import modsen_logo from '@assets/logos/modsen-logo.png';
import museum_logo_dark from '@assets/logos/museum-logo-dark.svg';
import museum_logo_light from '@assets/logos/museum-logo-light.svg';

export const ICONS = {
  bookmark: {
    yellow: {
      name: 'bookmark-yellow',
      path: bookmark_yellow,
    },
    orange: {
      name: 'bookmark-orange',
      path: bookmark_orange,
    },
  },
  home: {
    name: 'home',
    path: home,
  },
  search: {
    name: 'search',
    path: search,
  },
};

export const LOGOS = {
  modsen: {
    name: 'modsen-logo',
    path: modsen_logo,
  },
  museum: {
    dark: {
      name: 'museum-logo-dark',
      path: museum_logo_dark,
    },
    light: {
      name: 'museum-logo-light',
      path: museum_logo_light,
    },
  },
};

export const FONTS = {
  Inter: {
    name: 'Inter',
    path: inter_font,
  },
  Lexend_deca: {
    name: 'Lexend Deca',
    path: lexend_deca_font,
  },
};
