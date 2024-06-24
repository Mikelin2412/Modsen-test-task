import styled from 'styled-components';

export const CardBody = styled.div`
  padding: 16px 13px;
  display: flex;
  gap: 16px;
  background-color: #fff;
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
  font-family: 'Inter', sans-serif;

  @media screen and (max-width: 867px) {
    max-width: 130px;
  }
`;

export const ArtName = styled.p`
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
