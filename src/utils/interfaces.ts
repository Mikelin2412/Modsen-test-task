export interface IArtworks {
  pagination: {
    total_pages: number;
    limit: number;
  };
  data: IArtworkData[];
  info: object;
  config: object;
}

export interface IArtworkFromAPI extends Omit<IArtworks, 'data'> {
  data: IArtworkData;
}

export interface IArtworkData {
  id: number;
  title: string;
  artist_title: string;
  artwork_type_title?: string;
  artist_display?: string;
  date_display?: string;
  dimensions?: string;
  credit_line?: string;
  image: string;
  image_id?: string;
  place_of_origin?: string;
}

export interface CardProps {
  id: number;
  artName: string;
  artistName: string;
  imageUrl: string;
  handleFunction?: (artwork: IArtworkData) => void;
}

export interface PaginationControlsProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export interface IButton {
  isFavorite: boolean;
  handleFunction: () => void;
  className?: string;
}
