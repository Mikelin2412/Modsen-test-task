import React, { useCallback, useState } from 'react';
import {
  CardWrapper,
  InfoWrapper,
  ArtName,
  Artist,
  Public,
  Image,
  InfoBody,
} from './style';
import { IArtworkData, CardProps } from '@utils/interfaces';
import FavoritesButton from '@components/fav_button';
import { useNavigate } from 'react-router-dom';
import { DETAILED_INFO_ROUTE } from '@constants/user_routes';
import LocalStorageService from '@utils/classes/local_storage';

const PaginationCard: React.FC<CardProps> = ({
  id,
  artName,
  artistName,
  imageUrl,
}) => {
  const artwork: IArtworkData = {
    id,
    title: artName,
    artist_title: artistName,
    image: imageUrl,
  };

  const [isFavorite, setIsFavorite] = useState(
    LocalStorageService.checkIsFavorite(artwork),
  );
  const navigate = useNavigate();

  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      if (!(event.target as HTMLElement).closest('button')) {
        navigate(DETAILED_INFO_ROUTE + `/${id}`);
      }
    },
    [id, DETAILED_INFO_ROUTE],
  );

  const handleFavorites = useCallback(() => {
    if (!isFavorite) {
      LocalStorageService.setFavorite(artwork);
    } else {
      LocalStorageService.removeFromFavorites(artwork);
    }

    setIsFavorite(!isFavorite);
  }, [isFavorite, id, artName, artistName, imageUrl]);

  return (
    <CardWrapper onClick={handleClick}>
      <Image src={imageUrl} alt={artName} />
      <InfoWrapper>
        <InfoBody>
          <ArtName>{artName ?? 'N/A'}</ArtName>
          <Artist>{artistName ?? 'N/A'}</Artist>
          <Public>Public</Public>
        </InfoBody>
        <FavoritesButton
          handleFunction={handleFavorites}
          isFavorite={isFavorite}
        />
      </InfoWrapper>
    </CardWrapper>
  );
};

export default PaginationCard;
