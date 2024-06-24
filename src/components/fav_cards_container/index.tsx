import React, { useState, useEffect } from 'react';
import { FavCardsWrapper } from './style';
import Card from '@components/info_card';
import { LocalStorageFavProps } from '@utils/interfaces';
import useFavorites from '@utils/hooks/useFavorites';

const FavCardsContainer: React.FC = () => {
  const [favorites, setFavorites] = useState<LocalStorageFavProps[]>([]);
  const { handleRemoveFromFavorites } = useFavorites();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  return (
    <>
      {favorites.length ? (
        <FavCardsWrapper>
          {favorites.map((el: LocalStorageFavProps, i: number) => (
            <Card
              key={i}
              id={el.id}
              artName={el.artName}
              artistName={el.artistName}
              imageUrl={el.imageUrl}
              handleFunction={handleRemoveFromFavorites}
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
