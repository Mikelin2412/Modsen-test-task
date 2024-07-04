/* eslint-disable max-lines */
import FavoritesButton from '@components/fav_button';
import styled from 'styled-components';

export const DetailWrapper = styled.div`
  margin-top: ${(props) => props.theme.margins.l};
  margin-bottom: ${(props) => props.theme.margins.l};
  margin-left: ${(props) => props.theme.margins.s};
  margin-right: ${(props) => props.theme.margins.s};
  max-width: 1280px;
  display: flex;
  gap: 30px;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    margin-top: ${(props) => props.theme.margins.xxl};
    margin-bottom: ${(props) => props.theme.margins.xxl};
    margin-left: ${(props) => props.theme.margins.m};
    margin-right: ${(props) => props.theme.margins.m};
    gap: 80px;
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 497px;
  height: auto;

  @media (max-width: ${(props) => props.theme.media.tablet}) {
    max-width: 600px;
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledFavoritesButton = styled(FavoritesButton)`
  position: absolute;
  top: 16px;
  right: 16px;
`;
