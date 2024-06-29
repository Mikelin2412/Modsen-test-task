import React, { useState, useEffect } from 'react';
import { FavCardsWrapper } from './style';
import Card from '@components/info_card';
import { LocalStorageFavProps } from '@utils/interfaces';
import useFavorites from '@utils/hooks/useFavorites';

const FavCardsContainer: React.FC = () => {
  const [favorites, setFavorites] = useState<LocalStorageFavProps[]>([]);
  const { handleSaveToFavorites } = useFavorites();

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem('favorites') || '[]',
    );
    setFavorites(storedFavorites);
  }, []);

  return (
    <>
      {favorites.length ? (
        <FavCardsWrapper>
          {favorites.map((el: LocalStorageFavProps) => (
            <Card
              key={el.id}
              id={el.id}
              artName={el.artName}
              artistName={el.artistName}
              imageUrl={el.imageUrl}
              handleFunction={() =>
                handleSaveToFavorites(
                  el.id,
                  el.artName,
                  el.artistName,
                  el.imageUrl,
                )
              }
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
