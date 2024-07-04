import styled from 'styled-components';

export const DropdownMenu = styled.div`
  position: absolute;
  background: ${(props) => props.theme.colors.dropdownMenu};
  border: 1px solid #ddd;
  max-height: 200px;
  overflow-y: auto;
  width: 100%;
  z-index: 5;
`;

export const DropdownItem = styled.div`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.dropdownItemHover};
  }
`;
