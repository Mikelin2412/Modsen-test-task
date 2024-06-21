import React from 'react';
import { CardWrapper, InfoWrapper, ArtName, Artist, Public, FavoritesButton, Image } from './style';
import bookmark from '@assets/icons/bookmark-orange.svg';

interface Props {
  artName: string;
  artistName: string;
  imageUrl: string;
}

const PaginationCard: React.FC<Props> = ({ artName, artistName, imageUrl }) => {
  const handleSaveToFavorites = () => {
    const favoriteItem = { artName, artistName, imageUrl };
    const existingFavorites = localStorage.getItem('favorites');
    const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];
    favorites.push(favoriteItem);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  return (
    <CardWrapper>
      <Image src={imageUrl} alt={artName} />
      <InfoWrapper>
        <div>
          <ArtName>{artName}</ArtName>
          <Artist>{artistName}</Artist>
          <Public>Public</Public>
        </div>
        <FavoritesButton onClick={handleSaveToFavorites}>
          <img src={bookmark} alt="bookmark" />
        </FavoritesButton>
      </InfoWrapper>
    </CardWrapper>
  );
};

export default PaginationCard;
