import { IArtworkData, LocalStorageFavProps } from '@utils/interfaces';

class LocalStorageService {
  static setFavorite(favorite: IArtworkData): void {
    const isFavorite = this.checkIsFavorite(favorite);
    if (isFavorite) {
      const favorites = this.getFavorites();
      localStorage.setItem(
        'favorites',
        JSON.stringify([...favorites, favorite]),
      );
    }
  }

  static getFavorites(): LocalStorageFavProps[] {
    const existingFavorites = localStorage.getItem('favorites');
    return existingFavorites ? JSON.parse(existingFavorites) : [];
  }

  static removeFromFavorites(favorite: IArtworkData): void {
    const favorites = this.getFavorites();
    const updatedFavorites = favorites.filter(
      (elem) =>
        elem.id !== favorite.id ||
        elem.artName !== favorite.title ||
        elem.artistName !== favorite.artist_title ||
        elem.imageUrl !== favorite.image,
    );
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }

  static checkIsFavorite(favorite: IArtworkData): boolean {
    const favorites = this.getFavorites();
    return favorites.some(
      (item: LocalStorageFavProps) =>
        item.artName === favorite.title &&
        item.artistName === favorite.artist_title &&
        item.imageUrl === favorite.image,
    );
  }
}

export default LocalStorageService;
