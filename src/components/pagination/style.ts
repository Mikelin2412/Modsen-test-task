import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  margin-top: ${(props) => props.theme.margins.m};
  display: flex;
  flex-direction: column;
`;

export const PaginationBody = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  @media screen and (max-width: ${(props) => props.theme.media.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;
