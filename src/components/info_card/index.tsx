import React, { useCallback, useState } from 'react';
import {
  CardBody,
  Image,
  InfoWrapper,
  InfoBlock,
  ArtName,
  Artist,
  Public,
} from './style';
import FavoritesButton from '@components/fav_button';
import { IArtworkData, CardProps } from '@utils/interfaces';
import { useNavigate } from 'react-router-dom';
import { DETAILED_INFO_ROUTE } from '@constants/user_routes';
import LocalStorageService from '@utils/classes/local_storage';

const Card: React.FC<CardProps> = ({
  id,
  artName,
  artistName,
  imageUrl,
  handleFunction,
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

  const handleNavigate = (event: React.MouseEvent) => {
    if (!(event.target as HTMLElement).closest('button')) {
      navigate(DETAILED_INFO_ROUTE + `/${id}`);
    }
  };

  const handleFavorites = useCallback(() => {
    if (handleFunction) {
      handleFunction(artwork);
    }

    setIsFavorite(!isFavorite);
  }, [isFavorite, id, artName, artistName, imageUrl]);

  return (
    <CardBody onClick={handleNavigate}>
      <Image src={imageUrl} alt={artName} />
      <InfoWrapper>
        <InfoBlock>
          <ArtName>{artName ?? 'N/A'}</ArtName>
          <Artist>{artistName ?? 'N/A'}</Artist>
          <Public>Public</Public>
        </InfoBlock>
        <FavoritesButton
          handleFunction={handleFavorites}
          isFavorite={isFavorite}
        />
      </InfoWrapper>
    </CardBody>
  );
};

export default Card;
