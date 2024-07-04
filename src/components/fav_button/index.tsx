import React from 'react';
import { FavButton } from './style';
import { IButton } from '@utils/interfaces';
import { ICONS } from '@constants/static';

const FavoritesButton: React.FC<IButton> = ({ handleFunction, isFavorite, className }) => {
  return (
    <FavButton onClick={handleFunction} isFavorite={isFavorite} className={className}>
      <img src={ICONS.bookmark.orange.path} alt={ICONS.bookmark.orange.name} />
    </FavButton>
  );
};

export default React.memo(FavoritesButton);
