import React from 'react';
import { FavButton } from './style';
import bookmark from '@assets/icons/bookmark-orange.svg';

interface IButton {
  isFavorite: boolean;
  handleFunction: () => void;
  className?: string;
}

const FavoritesButton: React.FC<IButton> = ({ handleFunction, isFavorite, className }) => {
  return (
    <FavButton onClick={handleFunction} isFavorite={isFavorite} className={className}>
      <img src={bookmark} alt="bookmark" />
    </FavButton>
  );
};

export default FavoritesButton;
