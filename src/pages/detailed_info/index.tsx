import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { IArtworkData, IArtworkFromAPI } from '@utils/interfaces';
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
import Loader from '@components/loader';
import useFetch from '@utils/hooks/useFetch';
import { ALL_ARTWORKS_URL, IMAGES_URL } from '@constants/environment';
import LocalStorageService from '@utils/classes/local_storage';

const DetailedInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [art, setArt] = useState<IArtworkData | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const { data, loading, error } = useFetch<IArtworkFromAPI>(
    `${ALL_ARTWORKS_URL}${id}`,
  );

  useEffect(() => {
    if (data && !loading && !error) {
      const {
        id,
        title,
        artist_title,
        image_id,
        date_display,
        artist_display,
        dimensions,
        credit_line,
        place_of_origin,
      } = data.data;
      const imageUrl = `${IMAGES_URL}${image_id}/full/843,/0/default.jpg`;
      setArt({
        id,
        title,
        artist_title,
        image_id,
        date_display,
        artist_display,
        dimensions,
        credit_line,
        place_of_origin,
        image: imageUrl,
      });
      setIsFavorite(
        LocalStorageService.checkIsFavorite({
          id,
          title,
          artist_title,
          image: imageUrl,
        }),
      );
    }
  }, [id, data, loading, error]);

  const handleFavorites = useCallback(() => {
    if (art) {
      if (isFavorite) {
        LocalStorageService.removeFromFavorites({
          id: art.id,
          title: art.title,
          artist_title: art.artist_title,
          image: art.image,
        });
      } else {
        LocalStorageService.setFavorite({
          id: art.id,
          title: art.title,
          artist_title: art.artist_title,
          image: art.image,
        });
      }

      setIsFavorite(!isFavorite);
    }
  }, [id, art, isFavorite]);

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
              handleFunction={handleFavorites}
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
                  Artist display:
                  <ParamValue>
                    {art.artist_display ?? 'N/A'}
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
