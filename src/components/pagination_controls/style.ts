import styled from 'styled-components';

interface PageButtonProps {
  isActive?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PageButton = styled.button<PageButtonProps>`
  background-color: ${(props) => (props.isActive ? '#007bff' : '#f0f0f0')};
  color: ${(props) => (props.isActive ? '#fff' : '#000')};
  border: 1px solid #ddd;
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.isActive ? '#0056b3' : '#ddd')};
  }
`;
