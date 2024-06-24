import styled from 'styled-components';

export const Heading = styled.header`
  width: 100%;
  background: linear-gradient(-90deg, #343333 17%, #484848 59%, #282828 99%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopBar = styled.div`
  margin: 30px 50px;
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 206px;
  height: 63px;

  @media screen and (max-width: 867px) {
    width: 100px;
    height: 100%;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 16px;
`;

export const NavElement = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: #fff;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Span = styled.span`
  font-size: ${(props) => props.theme.sizes.p};
  font-weight: ${(props) => props.theme.weights.regular};
`;
