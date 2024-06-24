import React, { useState, useEffect } from 'react';
import { CardsWrapper } from './style';
import Card from '@components/info_card';
import { IArtworkData } from '@utils/interfaces';
import Loader from '@components/loader';

const CardsContainer: React.FC = () => {
  const [arts, setArts] = useState<IArtworkData[] | null>(null);
  const [artsLimit] = useState(12);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async (limit: number) => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.artic.edu/api/v1/artworks?page=21&limit=${limit}`,
        );
        if (!response.ok) {
          throw new Error(`HTTP Error! Status code: ${response.status}`);
        }
        const result = await response.json();
        const transformedData = result.data.map((art: IArtworkData) => {
          const imageUrl = `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`;
          return { ...art, image: imageUrl };
        });
        setArts(transformedData);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData(artsLimit);
  }, [artsLimit]);

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
