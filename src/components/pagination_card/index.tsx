import React from 'react';
import { CardWrapper, InfoWrapper, ArtName, Artist, Public, FavoritesButton, Image } from './style';
import bookmark from '@assets/icons/bookmark-orange.svg';

interface Props {
  artName: string;
  artistName: string;
  imageUrl: string;
}

const PaginationCard: React.FC<Props> = ({ artName, artistName, imageUrl }) => {
  return (
    <CardWrapper>
      <Image src={imageUrl} alt={artName} />
      <InfoWrapper>
        <div>
          <ArtName>{artName}</ArtName>
          <Artist>{artistName}</Artist>
          <Public>Public</Public>
        </div>
        <FavoritesButton>
          <img src={bookmark} alt="bookmark" />
        </FavoritesButton>
      </InfoWrapper>
    </CardWrapper>
  );
};

export default PaginationCard;
