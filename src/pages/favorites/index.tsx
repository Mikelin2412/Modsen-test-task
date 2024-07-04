import React from 'react';
import { FavWrapper, Title, HighlightedWord, Bookmark, SubtitleSmall, Subtitle } from './style';
import FavCardsContainer from '@components/fav_cards_container';
import { ICONS } from '@constants/static';

const Favorites: React.FunctionComponent = () => {
  return (
    <FavWrapper>
      <Title>Here Are Your</Title>
      <HighlightedWord>
        <Bookmark
          src={ICONS.bookmark.orange.path}
          alt={ICONS.bookmark.orange.name}
        />
        Favorites
      </HighlightedWord>
      <SubtitleSmall>Saved by you</SubtitleSmall>
      <Subtitle>Your favorites list</Subtitle>
      <FavCardsContainer />
    </FavWrapper>
  );
};

export default Favorites;
