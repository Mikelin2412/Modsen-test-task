import React from 'react';
import { MainWrapper, Title, HighlightedWord, Input, SubtitleSmall, Subtitle } from './style';
import Pagination from '@components/pagination';

const Home: React.FunctionComponent = () => {
  return (
    <MainWrapper>
      <Title>
        Let&apos;s Find Some <HighlightedWord>Art</HighlightedWord> Here!
      </Title>
      <Input type="text" placeholder="Search art, artist, work..." />
      <SubtitleSmall>Topics for you</SubtitleSmall>
      <Subtitle>Our special gallery</Subtitle>
      <Pagination></Pagination>
      <SubtitleSmall>Here some more</SubtitleSmall>
      <Subtitle>Other works for you</Subtitle>
    </MainWrapper>
  );
};

export default Home;
