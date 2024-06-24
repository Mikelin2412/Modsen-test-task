/* eslint-disable max-lines */
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

  @media (max-width: 867px) {
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  width: 206px;
  height: 63px;

  @media screen and (max-width: 867px) {
    width: 100px;
    height: 100%;
  }
`;

export const NavWrapper = styled.nav`
  @media screen and (max-width: 867px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 16px;

  @media (max-width: 867px) {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`;

export const NavElement = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 18px;
  color: #fff;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 867px) {
    width: 75vw;
    padding: 30px 50px;
    border-radius: 16px;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const Span = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: ${(props) => props.theme.sizes.p};
  font-weight: ${(props) => props.theme.weights.regular};
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const BurgerMenu = styled.div`
  display: none;

  @media screen and (max-width: 867px) {
    padding: 5.25px 3px;
    width: 24px;
    height: 24px;
    position: relative;
    display: flex;
    align-items: center;
    z-index: 2000;
    transition: all 0.3s;
  }

  & span {
    position: absolute;
    content: '';
    width: 18px;
    height: 1.5px;
    background-color: #fff;
  }

  & span:first-child {
    width: 12.75px;
    top: 5.25px;
  }

  & span:last-child {
    width: 12.75px;
    bottom: 5.25px;
  }
`;
