import { FONTS } from '@constants/static';
import styled from 'styled-components';

export const CardBody = styled.div`
  padding: ${(props) => props.theme.paddings.s} 13px;
  display: flex;
  gap: 16px;
  background-color: ${(props) => props.theme.colors.cardBody};
  cursor: pointer;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
`;

export const InfoWrapper = styled.div`
  padding-top: 4px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const InfoBlock = styled.div`
  max-width: 220px;
  font-family: ${FONTS.Inter.name}, sans-serif;

  @media screen and (max-width: ${(props) => props.theme.media.tablet}) {
    max-width: 130px;
  }
`;

export const ArtName = styled.p`
  font-size: 17.54px;
  font-weight: ${(props) => props.theme.fonts.weights.medium};
  color: ${(props) => props.theme.colors.font};
`;

export const Artist = styled.p`
  margin: 1px 0 12px;
  font-size: 15.35px;
  font-weight: ${(props) => props.theme.fonts.weights.regular};
  color: ${(props) => props.theme.colors.detailedWords};
`;

export const Public = styled.p`
  font-size: 15.35px;
  font-weight: ${(props) => props.theme.fonts.weights.medium};
  color: ${(props) => props.theme.colors.font};
`;

export const FavoritesButton = styled.button`
  width: 59px;
  height: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 100%;
  background-color: #f9f9f9;
  cursor: pointer;
`;
