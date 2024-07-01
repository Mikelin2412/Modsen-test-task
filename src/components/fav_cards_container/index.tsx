import React, { useCallback, useState } from 'react';
import { FavCardsWrapper } from './style';
import Card from '@components/info_card';
import { IArtworkData } from '@utils/interfaces';
import LocalStorageService from '@utils/classes/local_storage';

const FavCardsContainer: React.FC = () => {
  const [favorites, setFavorites] = useState<IArtworkData[]>(LocalStorageService.getFavorites());

  const handleRemoveFavorites = useCallback((favItem: IArtworkData) => {
    LocalStorageService.removeFromFavorites(favItem);
    setFavorites(LocalStorageService.getFavorites());
  }, [favorites]);

  return (
    <>
      {favorites.length ? (
        <FavCardsWrapper>
          {favorites.map((el: IArtworkData) => (
            <Card
              key={el.id}
              id={el.id}
              artName={el.title}
              artistName={el.artist_title}
              imageUrl={el.image}
              handleFunction={handleRemoveFavorites}
            />
          ))}
        </FavCardsWrapper>
      ) : (
        <h1>Your Favorites List Is Empty!</h1>
      )}
    </>
  );
};

export default FavCardsContainer;
