import React, { useState, useEffect } from 'react';
import { CardsWrapper } from './style';
import Card from '@components/info_card';
import { IArtworkData, IArtworks } from '@utils/interfaces';
import Loader from '@components/loader';
import useFetch from '@utils/hooks/useFetch';

const CardsContainer: React.FC = () => {
  const [arts, setArts] = useState<IArtworkData[] | null>([]);
  const [artsLimit] = useState(12);
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

  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <CardsWrapper>
          {arts.map((art) => (
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
