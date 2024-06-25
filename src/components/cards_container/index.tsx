import React, { useState, useEffect } from 'react';
import { CardsWrapper, SortButtonsWrapper } from './style';
import Card from '@components/info_card';
import { IArtworkData, IArtworks } from '@utils/interfaces';
import Loader from '@components/loader';
import useFetch from '@utils/hooks/useFetch';

const CardsContainer: React.FC = () => {
  const [arts, setArts] = useState<IArtworkData[] | null>([]);
  const [artsLimit] = useState(12);
  const [sortOrder, setSortOrder] = useState<string>('title');
  const { data, loading, error } = useFetch<IArtworks>(
    `https://api.artic.edu/api/v1/artworks?page=21&limit=${artsLimit}`,
  );

  useEffect(() => {
    if (data && !loading && !error) {
      const transformedData = data.data.map((art: IArtworkData) => {
        const imageUrl = `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`;
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
          <option value="title">Title</option>
          <option value="artist_title">Artist Name</option>
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
              imageUrl={art.image}
            />
          ))}
        </CardsWrapper>
      )}
    </>
  );
};

export default CardsContainer;
