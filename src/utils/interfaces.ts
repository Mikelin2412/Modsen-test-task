export interface IArtworks {
  pagination: object;
  data: IArtworkData[];
  info: object;
  config: object;
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
  image?: string;
  image_id?: string;
  place_of_origin?: string;
}

export interface LocalStorageFavProps {
  id: number;
  artName: string;
  artistName: string;
  imageUrl: string;
}
