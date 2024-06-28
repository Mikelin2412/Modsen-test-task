import styled from 'styled-components';

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 16px;
  margin-bottom: 120px;
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
    font-family: 'Inter', sans-serif;
    background-color: #f1f1f1;
    border: none;
    border-radius: 12px;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
  }
`;
