/* eslint-disable max-lines */
import { SORT_VALUES } from '../constants/sort_values';
import { IArtworkData } from '../utils/interfaces';
import { generatePagesForPagination, sortArts } from '../utils/libs/libs';

const mockArtworks: IArtworkData[] = [
  {
    id: 1,
    title: 'Ccc',
    artist_title: 'Ccc',
    image: 'https://www.artic.edu/iiif/2/image_id/full/843,/0/default.jpg',
  },
  {
    id: 2,
    title: 'Bbb',
    artist_title: 'Bbb',
    image: 'https://www.artic.edu/iiif/2/image_id/full/843,/0/default.jpg',
  },
  {
    id: 3,
    title: 'Aaa',
    artist_title: 'Aaa',
    image: 'https://www.artic.edu/iiif/2/image_id/full/843,/0/default.jpg',
  },
];

describe('pagination pages', () => {
  test('first page', () => {
    const currentPage = 1;
    const totalPages = 20;
    const maxVisiblePages = 5;
    expect(
      generatePagesForPagination(currentPage, totalPages, maxVisiblePages),
    ).toEqual([1, 2, 3, 4, 5]);
  });

  test('last page', () => {
    const currentPage = 20;
    const totalPages = 20;
    const maxVisiblePages = 5;
    expect(
      generatePagesForPagination(currentPage, totalPages, maxVisiblePages),
    ).toEqual([16, 17, 18, 19, 20]);
  });

  test('middle page', () => {
    const currentPage = 10;
    const totalPages = 20;
    const maxVisiblePages = 5;
    expect(
      generatePagesForPagination(currentPage, totalPages, maxVisiblePages),
    ).toEqual([8, 9, 10, 11, 12]);
  });

  test('max visible pages greater then total pages', () => {
    const currentPage = 2;
    const totalPages = 3;
    const maxVisiblePages = 5;
    expect(
      generatePagesForPagination(currentPage, totalPages, maxVisiblePages),
    ).toEqual([1, 2, 3]);
  });

  test('max visible pages less then total pages', () => {
    const currentPage = 3;
    const totalPages = 5;
    const maxVisiblePages = 5;
    expect(
      generatePagesForPagination(currentPage, totalPages, maxVisiblePages),
    ).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('sort artworks', () => {
  test('sort by artwork name', () => {
    expect(sortArts(mockArtworks, SORT_VALUES[0].value)).toEqual(
      [...mockArtworks].reverse(),
    );
  });

  test('sort by artist name', () => {
    expect(sortArts(mockArtworks, SORT_VALUES[1].value)).toEqual(
      [...mockArtworks].reverse(),
    );
  });

  test('sort when art.length = 0', () => {
    const emptyArtworks: IArtworkData[] = [];
    expect(sortArts(emptyArtworks, SORT_VALUES[0].value)).toEqual([]);
  });

  test('sort when artwork name is empty string', () => {
    const mockCopy = [...mockArtworks];
    mockCopy[0].title = '';
    expect(sortArts(mockArtworks, SORT_VALUES[0].value)).toEqual(
      mockCopy.reverse(),
    );
  });
});
