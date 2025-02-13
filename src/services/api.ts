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
        sort: 'price-desc',
        rentFrequency: 'monthly',
        categoryExternalID: '4',
      }
    }); 
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching properties:', error);
    return [];
  }
};