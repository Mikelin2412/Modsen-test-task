/* eslint-disable max-lines */
import LocalStorageService from '../utils/classes/local_storage';
import { IArtworkData } from '../utils/interfaces';
import LocalStorageMock from './locale_storage.mock';

global.localStorage = new LocalStorageMock();

describe('LocalStorageService', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  const mockArtworks: IArtworkData[] = [
    {
      id: 1,
      title: 'Artwork name',
      artist_title: 'Artist name',
      image: 'https://www.artic.edu/iiif/2/image_id/full/843,/0/default.jpg',
    },
    {
      id: 2,
      title: 'Artwork name 2',
      artist_title: 'Artist name 2',
      image: 'https://www.artic.edu/iiif/2/image_id/full/843,/0/default.jpg',
    },
  ];

  const unsavedArtwork = {
    id: 3,
    title: 'Artwork name 3',
    artist_title: 'Artist name 3',
    image: 'https://www.artic.edu/iiif/2/image_id/full/843,/0/default.jpg',
  };

  describe('setFavorite', () => {
    test('should add a favorite artwork to localStorage', () => {
      LocalStorageService.setFavorite(mockArtworks[0]);
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      expect(favorites).toEqual([mockArtworks[0]]);
    });

    test('should add to existing favorites', () => {
      localStorage.setItem('favorites', JSON.stringify(mockArtworks));
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      expect(favorites).toEqual([...mockArtworks]);
    });
  });

  describe('getFavorites', () => {
    test('should return an empty array if there are no favorites', () => {
      const favorites = LocalStorageService.getFavorites();
      expect(favorites).toEqual([]);
    });

    test('should return all favorites from localStorage', () => {
      localStorage.setItem('favorites', JSON.stringify(mockArtworks));
      const savedFavorites = LocalStorageService.getFavorites();
      expect(savedFavorites).toEqual([...mockArtworks]);
    });
  });

  describe('removeFromFavorites', () => {
    test('should remove a favorite from localStorage', () => {
      localStorage.setItem('favorites', JSON.stringify(mockArtworks));
      LocalStorageService.removeFromFavorites(mockArtworks[0]);
      const savedFavorites = JSON.parse(
        localStorage.getItem('favorites') || '[]',
      );
      expect(savedFavorites).toEqual([mockArtworks[1]]);
    });

    test('should not remove if the favorite does not match', () => {
      localStorage.setItem('favorites', JSON.stringify(mockArtworks));
      LocalStorageService.removeFromFavorites(unsavedArtwork);
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      expect(favorites).toEqual([...mockArtworks]);
    });
  });

  describe('checkIsFavorite', () => {
    test('should return true if the item is in favorites', () => {
      localStorage.setItem('favorites', JSON.stringify(mockArtworks));
      const isFavorite = LocalStorageService.checkIsFavorite(mockArtworks[0]);
      expect(isFavorite).toBe(true);
    });

    test('should return false if the item is not in favorites', () => {
      localStorage.setItem('favorites', JSON.stringify(mockArtworks));
      const isFavorite = LocalStorageService.checkIsFavorite(unsavedArtwork);
      expect(isFavorite).toBe(false);
    });
  });
});
