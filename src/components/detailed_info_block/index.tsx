import React from 'react';
import {
  ArtName,
  DetailInfo,
  ArtistName,
  Date,
  Overview,
  ParamsWrapper,
  ParamName,
  ParamValue,
} from './style';

interface DetailedInfoBlockProps {
  title: string;
  artist_title: string;
  date_display?: string;
  artist_display?: string;
  dimensions?: string;
  credit_line?: string;
  place_of_origin?: string;
}

const DetailedInfoBlock: React.FC<DetailedInfoBlockProps> = ({
  title,
  artist_title,
  date_display,
  artist_display,
  dimensions,
  credit_line,
  place_of_origin,
}) => {
  console.log('Info block');

  return (
    <DetailInfo>
      <div>
        <ArtName>{title ?? 'N/A'}</ArtName>
        <ArtistName>{artist_title ?? 'N/A'}</ArtistName>
        <Date>{date_display ?? 'N/A'}</Date>
      </div>
      <div>
        <Overview>Overview</Overview>
        <ParamsWrapper>
          <ParamName>
            Artist display:
            <ParamValue>{artist_display ?? 'N/A'}</ParamValue>
          </ParamName>
          <ParamName>
            Dimensions:<ParamValue>{dimensions ?? 'N/A'}</ParamValue>
          </ParamName>
          <ParamName>
            Credit Line:
            <ParamValue>{credit_line ?? 'N/A'}</ParamValue>
          </ParamName>
          <ParamName>
            Repository:
            <ParamValue>{place_of_origin ?? 'N/A'}</ParamValue>
          </ParamName>
        </ParamsWrapper>
      </div>
    </DetailInfo>
  );
};

export default React.memo(DetailedInfoBlock);
