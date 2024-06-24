import React from 'react';
import { CardWrapper, InfoWrapper, ArtName, Artist, Public, Image } from './style';
import { LocalStorageFavProps } from '@utils/interfaces';
import FavoritesButton from '@components/fav_button';
import useFavorites from '@utils/hooks/useFavorites';
import { useNavigate } from 'react-router-dom';
import { DETAILED_INFO_ROUTE } from '@constants/user_routes';

const PaginationCard: React.FC<LocalStorageFavProps> = ({ id, artName, artistName, imageUrl }) => {
  const { isFavorite, handleSaveToFavorites } = useFavorites(id, artName, artistName, imageUrl);

  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent) => {
    if (!(event.target as HTMLElement).closest('button')) {
      navigate(DETAILED_INFO_ROUTE + `/${id}`);
    }
  };

  return (
    <CardWrapper onClick={handleClick}>
      <Image src={imageUrl} alt={artName} />
      <InfoWrapper>
        <div>
          <ArtName>{artName ?? 'N/A'}</ArtName>
          <Artist>{artistName ?? 'N/A'}</Artist>
          <Public>Public</Public>
        </div>
        <FavoritesButton
          handleFunction={() =>
            handleSaveToFavorites(id, artName, artistName, imageUrl)
          }
          isFavorite={isFavorite}
        />
      </InfoWrapper>
    </CardWrapper>
  );
};

export default PaginationCard;
