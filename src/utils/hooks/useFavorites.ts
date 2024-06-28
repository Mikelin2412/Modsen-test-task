import { LocalStorageFavProps } from '@utils/interfaces';
import { useEffect, useState } from 'react';

const useFavorites = (
  id?: number,
  artName?: string,
  artistName?: string,
  imageUrl?: string,
) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const existingFavorites = localStorage.getItem('favorites');
    const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];
    const isAlreadyFavorite = favorites.some(
      (item: LocalStorageFavProps) =>
        item.artName === artName &&
        item.artistName === artistName &&
        item.imageUrl === imageUrl,
    );
    setIsFavorite(isAlreadyFavorite);
  }, [id, artName, artistName, imageUrl]);

  const handleSaveToFavorites = (
    id: number,
    artName: string,
    artistName: string,
    imageUrl: string,
  ) => {
    const favoriteItem = { id, artName, artistName, imageUrl };
    const existingFavorites = localStorage.getItem('favorites');
    const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];

    const isAlreadyFavorite = favorites.some(
      (item: LocalStorageFavProps) =>
        item.id === id &&
        item.artName === artName &&
        item.artistName === artistName &&
        item.imageUrl === imageUrl,
    );

    if (!isAlreadyFavorite) {
      favorites.push(favoriteItem);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
    } else {
      const updatedFavorites = favorites.filter(
        (item: LocalStorageFavProps) =>
          item.id !== id ||
          item.artName !== artName ||
          item.artistName !== artistName ||
          item.imageUrl !== imageUrl,
      );
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    }
  };

  return {
    isFavorite,
    setIsFavorite,
    handleSaveToFavorites,
  };
};

export default useFavorites;
