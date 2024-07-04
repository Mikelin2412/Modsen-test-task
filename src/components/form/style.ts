import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FieldContainer = styled.div`
  position: relative;
`;

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

export const StyledField = styled(Field)`
  width: 100%;
  padding: 23.5px 16px;
  border: none;
  border-radius: 16px;
  background-color: ${(props) => props.theme.colors.input};
  font-size: ${(props) => props.theme.fonts.sizes.span};
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.detailedWords};
    box-shadow: 0 0 5px rgba(224, 164, 73, 0.5);
  }
`;

export const StyledForm = styled(Form)`
  margin-top: 72px;
  max-width: 762px;
  width: 100%;
`;
