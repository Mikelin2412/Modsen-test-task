/* eslint-disable max-lines */
import styled from 'styled-components';
import FavoritesButton from '@components/fav_button';

export const DetailWrapper = styled.div`
  margin: 60px 20px;
  max-width: 1280px;
  display: flex;
  gap: 30px;
  flex-direction: column;

  @media (min-width: 876px) {
    margin: 120px 40px;
    gap: 80px;
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 497px;
  height: auto;

  @media (max-width: 876px) {
    max-width: 600px;
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledFavoritesButton = styled(FavoritesButton)`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ArtName = styled.h3`
  margin-bottom: 32px;
  font-size: ${(props) => props.theme.sizes.h3};
  font-weight: ${(props) => props.theme.weights.regular};

  @media (max-width: 876px) {
    font-size: ${(props) => props.theme.sizes.h4};
  }
`;

export const ArtistName = styled.h4`
  margin-bottom: 16px;
  font-size: ${(props) => props.theme.sizes.h4};
  font-weight: ${(props) => props.theme.weights.regular};
  color: #e0a449;

  @media (max-width: 876px) {
    font-size: ${(props) => props.theme.sizes.h5};
  }
`;

export const Date = styled.h5`
  font-size: ${(props) => props.theme.sizes.h5};
  font-weight: ${(props) => props.theme.weights.bold};
`;

export const Overview = styled.h3`
  margin-bottom: 32px;
  font-size: ${(props) => props.theme.sizes.h3};
  font-weight: ${(props) => props.theme.weights.regular};

  @media (max-width: 876px) {
    margin-top: 40px;
    font-size: ${(props) => props.theme.sizes.h4};
  }
`;

export const ParamsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ParamName = styled.h5`
  display: flex;
  gap: 5px;
  font-size: ${(props) => props.theme.sizes.h5};
  font-weight: ${(props) => props.theme.weights.regular};
  color: #e0a449;

  @media (max-width: 876px) {
    font-size: ${(props) => props.theme.sizes.h6};
  }
`;

export const ParamValue = styled.h5`
  font-size: ${(props) => props.theme.sizes.h5};
  font-weight: ${(props) => props.theme.weights.regular};
  color: #393939;

  @media (max-width: 876px) {
    font-size: ${(props) => props.theme.sizes.h6};
  }
`;
