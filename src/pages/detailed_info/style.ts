/* eslint-disable max-lines */
import FavoritesButton from '@components/fav_button';
import styled from 'styled-components';

export const DetailWrapper = styled.div`
  margin-top: ${(props) => props.theme.margins.l};
  margin-bottom: ${(props) => props.theme.margins.l};
  margin-left: ${(props) => props.theme.margins.s};
  margin-right: ${(props) => props.theme.margins.s};
  max-width: 1280px;
  display: flex;
  gap: 30px;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    margin-top: ${(props) => props.theme.margins.xxl};
    margin-bottom: ${(props) => props.theme.margins.xxl};
    margin-left: ${(props) => props.theme.margins.m};
    margin-right: ${(props) => props.theme.margins.m};
    gap: 80px;
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 497px;
  height: auto;

  @media (max-width: ${(props) => props.theme.media.tablet}) {
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
  font-size: ${(props) => props.theme.fonts.sizes.h3};
  font-weight: ${(props) => props.theme.fonts.weights.regular};

  @media (max-width: ${(props) => props.theme.media.tablet}) {
    font-size: ${(props) => props.theme.fonts.sizes.h4};
  }
`;

export const ArtistName = styled.h4`
  margin-bottom: ${(props) => props.theme.margins.xs};
  font-size: ${(props) => props.theme.fonts.sizes.h4};
  font-weight: ${(props) => props.theme.fonts.weights.regular};
  color: ${(props) => props.theme.colors.detailedWords};

  @media (max-width: ${(props) => props.theme.media.tablet}) {
    font-size: ${(props) => props.theme.fonts.sizes.h5};
  }
`;

export const Date = styled.h5`
  font-size: ${(props) => props.theme.fonts.sizes.h5};
  font-weight: ${(props) => props.theme.fonts.weights.bold};
`;

export const Overview = styled.h3`
  margin-bottom: 32px;
  font-size: ${(props) => props.theme.fonts.sizes.h3};
  font-weight: ${(props) => props.theme.fonts.weights.regular};

  @media (max-width: ${(props) => props.theme.media.tablet}) {
    margin-top: ${(props) => props.theme.margins.m};
    font-size: ${(props) => props.theme.fonts.sizes.h4};
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
  font-size: ${(props) => props.theme.fonts.sizes.h5};
  font-weight: ${(props) => props.theme.fonts.weights.regular};
  color: ${(props) => props.theme.colors.detailedWords};

  @media (max-width: ${(props) => props.theme.media.tablet}) {
    font-size: ${(props) => props.theme.fonts.sizes.h6};
  }
`;

export const ParamValue = styled.h5`
  font-size: ${(props) => props.theme.fonts.sizes.h5};
  font-weight: ${(props) => props.theme.fonts.weights.regular};
  color: #393939;

  @media (max-width: ${(props) => props.theme.media.tablet}) {
    font-size: ${(props) => props.theme.fonts.sizes.h6};
  }
`;
