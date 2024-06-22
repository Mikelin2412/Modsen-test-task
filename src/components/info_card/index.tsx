import React from 'react';
import { CardBody, Image, InfoWrapper, ArtName, Artist, Public, FavoritesButton } from './style';
import bookmark from '@assets/icons/bookmark-orange.svg';

interface CardProps {
  artName: string;
  artistName: string;
  imageUrl: string;
  handleFunction: () => void;
}

const Card: React.FC<CardProps> = ({ artName, artistName, imageUrl, handleFunction }) => {
  return (
    <CardBody>
      <Image src={imageUrl} alt={artName} />
      <InfoWrapper>
        <div>
          <ArtName>{artName}</ArtName>
          <Artist>{artistName}</Artist>
          <Public>Public</Public>
        </div>
        <FavoritesButton onClick={handleFunction}>
          <img src={bookmark} alt="bookmark" />
        </FavoritesButton>
      </InfoWrapper>
    </CardBody>
  );
};

export default Card;
