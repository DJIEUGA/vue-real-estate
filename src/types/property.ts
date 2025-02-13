export interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  type: string;
  purpose: string;
  rooms: number;
  baths: number;
  area: number;
  coverPhoto: string;
  photos: string[];
  description: string;
  amenities: string[];
}