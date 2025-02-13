export interface Property {
  id: number;
  title: string;
  price: number;
  location: string | Array<any>;
  type: string;
  purpose: string;
  rooms: number;
  baths: number;
  area: number;
  coverPhoto: string | any;
  photos: string[];
  description: string;
  amenities: string[];
}