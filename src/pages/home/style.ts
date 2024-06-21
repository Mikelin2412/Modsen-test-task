import styled from 'styled-components';

export const MainWrapper = styled.div`
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
`;

export const HighlightedWord = styled.span`
  color: #f17900;
`;

export const Input = styled.input`
  margin-top: 72px;
  padding: 16px;
  width: 762px;
  background-color: rgba(57, 57, 57, 5%);
  border: none;
  border-radius: 16px;
`;

export const SubtitleSmall = styled.h5`
  margin-top: 120px;
  font-size: ${(props) => props.theme.sizes.h5};
  font-weight: ${(props) => props.theme.weights.regular};
  color: #e0a449;
`;

export const Subtitle = styled.h3`
  margin-bottom: 40px;
  font-size: ${(props) => props.theme.sizes.h3};
  font-weight: ${(props) => props.theme.weights.regular};
  color: #393939;
`;
