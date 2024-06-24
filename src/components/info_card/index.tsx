import React from 'react';
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
import useFavorites from '@utils/hooks/useFavorites';
import { LocalStorageFavProps } from '@utils/interfaces';
import { useNavigate } from 'react-router-dom';
import { DETAILED_INFO_ROUTE } from '@constants/user_routes';

interface CardProps extends LocalStorageFavProps {
  handleFunction?: () => void;
}

const Card: React.FC<CardProps> = ({ id, artName, artistName, imageUrl }) => {
  const { isFavorite, handleSaveToFavorites } = useFavorites(
    id,
    artName,
    artistName,
    imageUrl,
  );

  const navigate = useNavigate();

  const handleNavigate = (event: React.MouseEvent) => {
    if (!(event.target as HTMLElement).closest('button')) {
      navigate(DETAILED_INFO_ROUTE + `/${id}`);
    }
  };

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
          handleFunction={() =>
            handleSaveToFavorites(id, artName, artistName, imageUrl)
          }
          isFavorite={isFavorite}
        />
      </InfoWrapper>
    </CardBody>
  );
};

export default Card;
