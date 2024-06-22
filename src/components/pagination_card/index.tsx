import React, { useState, useEffect } from 'react';
import { CardWrapper, InfoWrapper, ArtName, Artist, Public, FavoritesButton, Image } from './style';
import bookmark from '@assets/icons/bookmark-orange.svg';
import { LocalStorageFavProps } from '@utils/interfaces';

const PaginationCard: React.FC<LocalStorageFavProps> = ({ artName, artistName, imageUrl }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const existingFavorites = localStorage.getItem('favorites');
    const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];
    const isAlreadyFavorite = favorites.some(
      (item: LocalStorageFavProps) =>
        item.artName === artName && item.artistName === artistName && item.imageUrl === imageUrl,
    );
    setIsFavorite(isAlreadyFavorite);
  }, [artName, artistName, imageUrl]);

  const handleSaveToFavorites = () => {
    const favoriteItem = { artName, artistName, imageUrl };
    const existingFavorites = localStorage.getItem('favorites');
    const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];

    const isAlreadyFavorite = favorites.some(
      (item: LocalStorageFavProps) =>
        item.artName === artName && item.artistName === artistName && item.imageUrl === imageUrl,
    );

    if (!isAlreadyFavorite) {
      favorites.push(favoriteItem);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
    } else {
      const updatedFavorites = favorites.filter(
        (item: LocalStorageFavProps) =>
          item.artName !== artName || item.artistName !== artistName || item.imageUrl !== imageUrl,
      );
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    }
  };


  return (
    <CardWrapper>
      <Image src={imageUrl} alt={artName} />
      <InfoWrapper>
        <div>
          <ArtName>{artName}</ArtName>
          <Artist>{artistName}</Artist>
          <Public>Public</Public>
        </div>
        <FavoritesButton onClick={handleSaveToFavorites} isFavorite={isFavorite}>
          <img src={bookmark} alt="bookmark" />
        </FavoritesButton>
      </InfoWrapper>
    </CardWrapper>
  );
};

export default PaginationCard;
