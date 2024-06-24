import React from 'react';
import { FavWrapper, Title, HighlightedWord, Bookmark, SubtitleSmall, Subtitle } from './style';
import bookmark from '@assets/icons/bookmark-orange.svg';
import FavCardsContainer from '@components/fav_cards_container';

const Favorites: React.FunctionComponent = () => {
  return (
    <FavWrapper>
      <Title>Here Are Your</Title>
      <HighlightedWord>
        <Bookmark src={bookmark} alt="bookmark" />
        Favorites
      </HighlightedWord>
      <SubtitleSmall>Saved by you</SubtitleSmall>
      <Subtitle>Your favorites list</Subtitle>
      <FavCardsContainer />
    </FavWrapper>
  );
};

export default Favorites;
