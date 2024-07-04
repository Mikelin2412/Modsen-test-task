import { IArtworkData } from '@utils/interfaces';

class LocalStorageService {
  static setFavorite(favorite: IArtworkData): void {
    const favorites = this.getFavorites();
    localStorage.setItem('favorites', JSON.stringify([...favorites, favorite]));
  }

  static getFavorites(): IArtworkData[] {
    const existingFavorites = localStorage.getItem('favorites');
    return existingFavorites ? JSON.parse(existingFavorites) : [];
  }

  static removeFromFavorites(favorite: IArtworkData): void {
    const favorites = this.getFavorites();
    const updatedFavorites = favorites.filter(
      (elem) =>
        elem.id !== favorite.id ||
        elem.title !== favorite.title ||
        elem.artist_title !== favorite.artist_title ||
        elem.image !== favorite.image,
    );
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }

  static checkIsFavorite(favorite: IArtworkData): boolean {
    const favorites = this.getFavorites();
    return favorites.some(
      (item: IArtworkData) =>
        item.title === favorite.title &&
        item.artist_title === favorite.artist_title &&
        item.image === favorite.image,
    );
  }
}

export default LocalStorageService;
