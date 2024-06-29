import styled from 'styled-components';

export const FavButton = styled.button<{ isFavorite: boolean }>`
  width: 59px;
  height: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 100%;
  background-color: ${(props) =>
    props.isFavorite
      ? props.theme.colors.favoriteButtonOn
      : props.theme.colors.favoriteButtonOff};
  cursor: pointer;
`;
