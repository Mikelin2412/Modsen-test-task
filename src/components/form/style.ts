import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FieldContainer = styled.div`
  position: relative;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  background: white;
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
    background: #f0f0f0;
  }
`;

export const StyledField = styled(Field)`
  width: 100%;
  padding: 23.5px 16px;
  border: none;
  border-radius: 16px;
  background-color: rgba(57, 57, 57, 5%);
  font-size: 14px;
  &:focus {
    outline: none;
    border-color: #e0a449;
    box-shadow: 0 0 5px rgba(224, 164, 73, 0.5);
  }
`;

export const StyledForm = styled(Form)`
  margin-top: 72px;
  max-width: 762px;
  width: 100%;
`;
