import React, { useState, useEffect, useCallback } from 'react';
import { CardsWrapper, SortButtonsWrapper } from './style';
import Card from '@components/info_card';
import { IArtworkData, IArtworks } from '@utils/interfaces';
import Loader from '@components/loader';
import useFetch from '@utils/hooks/useFetch';
import { ALL_ARTWORKS_URL, IMAGES_URL } from '@constants/environment';
import { SORT_VALUES } from '@constants/sort_values';
import { ARTWORKS_LIMIT } from '@constants/constants';
import LocalStorageService from '@utils/classes/local_storage';

const CardsContainer: React.FC = () => {
  const [arts, setArts] = useState<IArtworkData[]>([]);
  const [sortOrder, setSortOrder] = useState<string>(SORT_VALUES[0].value);
  const { data, loading, error } = useFetch<IArtworks>(
    `${ALL_ARTWORKS_URL}?page=21&limit=${ARTWORKS_LIMIT}`,
  );

  useEffect(() => {
    if (data && !loading && !error) {
      const transformedData = data.data.map((art: IArtworkData) => {
        const imageUrl = `${IMAGES_URL}${art.image_id}/full/843,/0/default.jpg`;
        return { ...art, image: imageUrl };
      });
      setArts(transformedData);
    }
  }, [data, loading, error]);

  const sortArts = (arts: IArtworkData[], order: string) => {
    return [...arts].sort((a, b) => {
      return order === 'title'
        ? a.title.localeCompare(b.title)
        : a.artist_title.localeCompare(b.artist_title);
    });
  };

  const handleFavorites = useCallback((artwork: IArtworkData) => {
    const isFavorite = LocalStorageService.checkIsFavorite(artwork);
    if (!isFavorite) {
      LocalStorageService.setFavorite(artwork);
    } else {
      LocalStorageService.removeFromFavorites(artwork);
    }
  }, [arts]);

  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <>
      <SortButtonsWrapper>
        <label htmlFor="sortOrder">Sort by: </label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          {SORT_VALUES.map((el) => (
            <option key={el.id} value={el.value}>
              {el.optionName}
            </option>
          ))}
        </select>
      </SortButtonsWrapper>
      {loading ? (
        <Loader />
      ) : (
        <CardsWrapper>
          {sortArts(arts, sortOrder).map((art) => (
            <Card
              key={art.id}
              id={art.id}
              artName={art.title}
              artistName={art.artist_title}
              imageUrl={art.image ?? ''}
              handleFunction={handleFavorites}
            />
          ))}
        </CardsWrapper>
      )}
    </>
  );
};

export default CardsContainer;
