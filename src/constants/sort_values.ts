import { IArtworkData } from '@utils/interfaces';

export const SORT_VALUES = [
  {
    id: '1',
    value: 'title' as keyof IArtworkData,
    optionName: 'Title',
    type: 'string',
  },
  {
    id: '2',
    value: 'artist_title' as keyof IArtworkData,
    optionName: 'Artist Name',
    type: 'string',
  },
];
