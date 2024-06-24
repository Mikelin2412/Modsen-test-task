import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 387px;
  width: 100%;
  height: 514px;
  cursor: pointer;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  bottom: 0;
  max-width: 334px;
  width: 100%;
  height: 132px;
  padding: 17px 24px;
  background-color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  font-family: 'Inter', sans-serif;
`;

export const InfoBody = styled.div`
  max-width: 200px;
`;

export const Image = styled.img`
  width: 100%;
  height: 444px;
  object-fit: cover;
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
  font-weight: ${(props) => props.theme.weights.bold};
  color: #393939;
`;
