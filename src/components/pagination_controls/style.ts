import styled from 'styled-components';

interface PageButtonProps {
  isActive?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  @media screen and (max-width: 867px) {
    justify-content: center;
  }
`;

export const PageButton = styled.button<PageButtonProps>`
  background-color: ${(props) => (props.isActive ? '#f17900' : '#fafafa')};
  color: ${(props) => (props.isActive ? '#fff' : '#000')};
  font-size: 18px;
  font-weight: ${(props) => props.theme.weights.semi_bold};
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  margin: 0 3px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.isActive ? '#f17900' : '#f1f1f1')};
    cursor: ${(props) => (props.isActive ? 'default' : 'pointer')};
  }

  @media screen and (max-width: 867px) {
    padding: 5px 10px;
  }
`;
