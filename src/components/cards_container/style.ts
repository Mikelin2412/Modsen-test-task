import { FONTS } from '@constants/static';
import styled from 'styled-components';

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 16px;
  margin-bottom: ${(props) => props.theme.margins.xxl};
  width: 100%;
`;

export const SortButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  label {
    margin-right: 10px;
  }

  select {
    font-family: ${FONTS.Inter.name}, sans-serif;
    background-color: ${(props) => props.theme.colors.select};
    border: none;
    border-radius: 12px;
    padding: 10px;
    font-size: ${(props) => props.theme.fonts.sizes.p};
    cursor: pointer;
  }
`;
