import React from 'react';
import { CardBody, Image, InfoWrapper, ArtName, Artist, Public } from './style';
import FavoritesButton from '@components/fav_button';
import { useLocation } from 'react-router-dom';
import useFavorites from '@utils/hooks/useFavorites';
import { LocalStorageFavProps } from '@utils/interfaces';
import { useNavigate } from 'react-router-dom';
import { DETAILED_INFO_ROUTE } from '@constants/user_routes';

interface CardProps extends LocalStorageFavProps{
  handleFunction?: () => void;
}

const Card: React.FC<CardProps> = ({ id, artName, artistName, imageUrl }) => {
  const location = useLocation();
  const { isFavorite, handleSaveToFavorites, handleRemoveFromFavorites } = useFavorites(id, artName, artistName, imageUrl);

  const navigate = useNavigate();

  const handleNavigate = (event: React.MouseEvent) => {
    if (!(event.target as HTMLElement).closest('button')) {
      navigate(DETAILED_INFO_ROUTE + `/${id}`);
    }
  };

  const handleClick = () => {
    if (location.pathname === '/favorites') {
      handleRemoveFromFavorites();
    } else {
      handleSaveToFavorites(id, artName, artistName, imageUrl);
    }
  };

  return (
    <CardBody onClick={handleNavigate}>
      <Image src={imageUrl} alt={artName} />
      <InfoWrapper>
        <div>
          <ArtName>{artName}</ArtName>
          <Artist>{artistName}</Artist>
          <Public>Public</Public>
        </div>
        <FavoritesButton handleFunction={handleClick} isFavorite={isFavorite} />
      </InfoWrapper>
    </CardBody>
  );
};

export default Card;
