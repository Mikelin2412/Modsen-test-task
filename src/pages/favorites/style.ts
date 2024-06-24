import styled from 'styled-components';

export const FavWrapper = styled.div`
  max-width: 1280px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin-top: 120px;
  font-size: ${(props) => props.theme.sizes.h1};
  font-weight: ${(props) => props.theme.weights.bold};
  text-align: center;
  max-width: 684px;
  color: #393939;

  @media screen and (max-width: 867px) {
    margin-top: 60px;
    font-size: ${(props) => props.theme.sizes.h3};
    font-weight: ${(props) => props.theme.weights.bold};
  }
`;

export const HighlightedWord = styled.h1`
  font-size: ${(props) => props.theme.sizes.h1};
  font-weight: ${(props) => props.theme.weights.bold};
  color: #f17900;

  @media screen and (max-width: 867px) {
    font-size: ${(props) => props.theme.sizes.h3};
    font-weight: ${(props) => props.theme.weights.bold};
  }
`;

export const Bookmark = styled.img`
  width: 74px;
  height: 74px;

  @media screen and (max-width: 867px) {
    width: 32px;
    height: 32px;
  }
`;

export const SubtitleSmall = styled.h5`
  margin-top: 120px;
  font-size: ${(props) => props.theme.sizes.h5};
  font-weight: ${(props) => props.theme.weights.regular};
  color: #e0a449;

  @media screen and (max-width: 867px) {
    margin-top: 40px;
  }
`;

export const Subtitle = styled.h3`
  margin-bottom: 40px;
  font-size: ${(props) => props.theme.sizes.h3};
  font-weight: ${(props) => props.theme.weights.regular};
  color: #393939;
`;
