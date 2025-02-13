import axios from 'axios';
import type { Property } from '../types/property';

const api = axios.create({
  baseURL: 'https://bayut.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
});

export const getProperties = async (purpose: string = 'for-rent'): Promise<Property[]> => {
  try {
    const response = await api.get('/properties/list', {
      params: {
        locationExternalIDs: '5002,6020',
        purpose,
        hitsPerPage: '25',
        page: '0',
        lang: 'en',
        sort: 'city-level-score',
        rentFrequency: 'monthly',
      }
    });
    return response.data.hits.map((property: any) => ({
      id: property.id,
      title: property.title,
      price: property.price,
      location: property.location[0].name,
      type: property.category[0].name,
      purpose: property.purpose,
      rooms: property.rooms,
      baths: property.baths,
      area: property.area,
      coverPhoto: property.coverPhoto.url,
      photos: property.photos.map((photo: any) => photo.url),
      description: property.description,
      amenities: property.amenities.map((amenity: any) => amenity.text)
    }));
  } catch (error) {
    console.error('Error fetching properties:', error);
    return [];
  }
};