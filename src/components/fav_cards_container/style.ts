import styled from 'styled-components';

export const FavCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 16px;
  margin-bottom: ${(props) => props.theme.margins.xxl};
  width: 100%;
`;
