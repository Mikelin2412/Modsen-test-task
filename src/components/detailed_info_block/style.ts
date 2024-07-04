import styled from 'styled-components';

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
