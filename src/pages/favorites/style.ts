import styled from 'styled-components';

export const FavWrapper = styled.div`
  max-width: 1280px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin-top: ${(props) => props.theme.margins.xxl};
  font-size: ${(props) => props.theme.fonts.sizes.h1};
  font-weight: ${(props) => props.theme.fonts.weights.bold};
  text-align: center;
  max-width: 684px;
  color: ${(props) => props.theme.colors.font};

  @media screen and (max-width: ${(props) => props.theme.media.tablet}) {
    margin-top: ${(props) => props.theme.margins.l};
    font-size: ${(props) => props.theme.fonts.sizes.h3};
    font-weight: ${(props) => props.theme.fonts.weights.bold};
  }
`;

export const HighlightedWord = styled.h1`
  font-size: ${(props) => props.theme.fonts.sizes.h1};
  font-weight: ${(props) => props.theme.fonts.weights.bold};
  color: ${(props) => props.theme.colors.highlightedWords};

  @media screen and (max-width: ${(props) => props.theme.media.tablet}) {
    font-size: ${(props) => props.theme.fonts.sizes.h3};
    font-weight: ${(props) => props.theme.fonts.weights.bold};
  }
`;

export const Bookmark = styled.img`
  width: 74px;
  height: 74px;

  @media screen and (max-width: ${(props) => props.theme.media.tablet}) {
    width: 32px;
    height: 32px;
  }
`;

export const SubtitleSmall = styled.h5`
  margin-top: ${(props) => props.theme.margins.xxl};
  font-size: ${(props) => props.theme.fonts.sizes.h5};
  font-weight: ${(props) => props.theme.fonts.weights.regular};
  color: ${(props) => props.theme.colors.detailedWords};

  @media screen and (max-width: ${(props) => props.theme.media.tablet}) {
    margin-top: ${(props) => props.theme.margins.m};
  }
`;

export const Subtitle = styled.h3`
  margin-bottom: ${(props) => props.theme.margins.m};
  font-size: ${(props) => props.theme.fonts.sizes.h3};
  font-weight: ${(props) => props.theme.fonts.weights.regular};
  color: ${(props) => props.theme.colors.font};
`;
