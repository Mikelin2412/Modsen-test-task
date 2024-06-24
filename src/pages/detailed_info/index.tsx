import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IArtworkData } from '@utils/interfaces';
import { extractNationality } from '@utils/libs/libs';
import {
  DetailWrapper,
  DetailInfo,
  Image,
  ArtName,
  ArtistName,
  Date,
  Overview,
  ParamName,
  ParamValue,
  ParamsWrapper,
  ImageWrapper,
  StyledFavoritesButton,
} from './style';
import useFavorites from '@utils/hooks/useFavorites';
import { LocalStorageFavProps } from '@utils/interfaces';
import Loader from '@components/loader';

const DetailedInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [art, setArt] = useState<IArtworkData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { isFavorite, setIsFavorite, handleSaveToFavorites } = useFavorites();

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

  useEffect(() => {
    if (art) {
      const existingFavorites = localStorage.getItem('favorites');
      const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];
      const isAlreadyFavorite = favorites.some(
        (item: LocalStorageFavProps) =>
          item.artName === art.title &&
          item.artistName === art.artist_title &&
          item.imageUrl === art.image,
      );
      setIsFavorite(isAlreadyFavorite);
    }
  }, [art]);

  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <DetailWrapper>
      {loading ? <Loader /> : null}
      {art && (
        <>
          <ImageWrapper>
            <Image src={art.image} alt={art.title} />
            <StyledFavoritesButton
              handleFunction={() =>
                handleSaveToFavorites(
                  art.id,
                  art.title,
                  art.artist_title,
                  art.image,
                )
              }
              isFavorite={isFavorite}
            />
          </ImageWrapper>
          <DetailInfo>
            <div>
              <ArtName>{art.title ?? 'N/A'}</ArtName>
              <ArtistName>{art.artist_title ?? 'N/A'}</ArtistName>
              <Date>{art.date_display ?? 'N/A'}</Date>
            </div>
            <div>
              <Overview>Overview</Overview>
              <ParamsWrapper>
                <ParamName>
                  Artist nationality:
                  <ParamValue>
                    {extractNationality(art.artist_display) ?? 'N/A'}
                  </ParamValue>
                </ParamName>
                <ParamName>
                  Dimensions:<ParamValue>{art.dimensions ?? 'N/A'}</ParamValue>
                </ParamName>
                <ParamName>
                  Credit Line:
                  <ParamValue>{art.credit_line ?? 'N/A'}</ParamValue>
                </ParamName>
                <ParamName>
                  Repository:
                  <ParamValue>{art.place_of_origin ?? 'N/A'}</ParamValue>
                </ParamName>
              </ParamsWrapper>
            </div>
          </DetailInfo>
        </>
      )}
    </DetailWrapper>
  );
};

export default DetailedInfo;
