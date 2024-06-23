import styled from 'styled-components';

export const FavButton = styled.button<{ isFavorite: boolean }>`
  width: 59px;
  height: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 100%;
  background-color: ${(props) => (props.isFavorite ? 'rgba(251, 215, 178, 30%)' : '#F9F9F9')};
  cursor: pointer;
`;
