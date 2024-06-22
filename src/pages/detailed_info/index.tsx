import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IArtworkData } from '@utils/interfaces';

const DetailedInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id)
  const [art, setArt] = useState<IArtworkData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchArtDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP Error! Status code: ${response.status}`);
        }
        const result = await response.json();
        const artDetails = result.data;
        const imageUrl = `https://www.artic.edu/iiif/2/${artDetails.image_id}/full/843,/0/default.jpg`;
        setArt({ ...artDetails, image: imageUrl });
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchArtDetails();
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <div>
      {art && (
        <>
          <img src={art.image} alt={art.title} />
          <h1>{art.title}</h1>
          <h2>{art.artist_title}</h2>
          <p>{art.date_display}</p>
          <p>{art.dimensions}</p>
        </>
      )}
    </div>
  );
};

export default DetailedInfo;
