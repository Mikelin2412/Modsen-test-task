import styled from 'styled-components';

interface PageButtonProps {
  isActive?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${(props) => props.theme.margins.s};

  @media screen and (max-width: ${(props) => props.theme.media.tablet}) {
    justify-content: center;
  }
`;

export const PageButton = styled.button<PageButtonProps>`
  background-color: ${(props) =>
    props.isActive
      ? props.theme.colors.highlightedWords
      : props.theme.colors.mainBackground};
  color: ${(props) =>
    props.isActive ? props.theme.colors.fontLight : props.theme.colors.font};
  font-size: ${(props) => props.theme.fonts.sizes.pagination};
  font-weight: ${(props) => props.theme.fonts.weights.semi_bold};
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  margin: 0 3px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.isActive
        ? props.theme.colors.highlightedWords
        : props.theme.colors.paginationHover};
    cursor: ${(props) => (props.isActive ? 'default' : 'pointer')};
  }

  @media screen and (max-width: ${(props) => props.theme.media.tablet}) {
    padding: 5px 10px;
  }
`;
