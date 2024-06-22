import React, { useState, useEffect } from 'react';
import { FavCardsWrapper } from './style';
import Card from '@components/info_card';
import { LocalStorageFavProps } from '@utils/interfaces';

const FavCardsContainer: React.FC = () => {
  const [favorites, setFavorites] = useState<LocalStorageFavProps[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const handleRemove = (index: number) => {
    const newFavorites = [...favorites];
    newFavorites.splice(index, 1);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  return (
    <FavCardsWrapper>
      {favorites.map((el: LocalStorageFavProps, i: number) => (
        <Card
          key={i}
          artName={el.artName}
          artistName={el.artistName}
          imageUrl={el.imageUrl}
          handleFunction={() => handleRemove(i)}
        />
      ))}
    </FavCardsWrapper>
  );
};

export default FavCardsContainer;
