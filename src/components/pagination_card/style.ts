import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
  width: 387px;
  height: 514px;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  left: calc(100% / 2 - 334px / 2);
  bottom: 0;
  width: 334px;
  height: 132px;
  margin: auto;
  padding: 17px 24px;
  background-color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const Image = styled.img`
  width: 387px;
  height: 444px;
`;

export const ArtName = styled.p`
  margin-top: 4px;
  font-size: 17.54px;
  font-weight: ${(props) => props.theme.weights.medium};
  color: #393939;
`;

export const Artist = styled.p`
  margin: 1px 0 12px;
  font-size: 15.35px;
  font-weight: ${(props) => props.theme.weights.regular};
  color: #e0a449;
`;

export const Public = styled.p`
  font-size: 15.35px;
  font-weight: ${(props) => props.theme.weights.medium};
  color: #393939;
`;

export const FavoritesButton = styled.button<{ isFavorite: boolean }>`
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
