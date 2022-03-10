import {
  ALL_COUNTRIES,
  ALPHA_CODES,
  BASE_API_URL,
  REGIONAL_BLOCK
} from '../constants/api';
import { Country } from '../models/Country';
import { Region } from '../models/Region';

const fetchAbsolute = async (url: string): Promise<Response> =>
  fetch(`${BASE_API_URL}${url}`);

export const getAllCountries = async (): Promise<Country[]> => {
  try {
    const response = await fetchAbsolute(
      `${ALL_COUNTRIES}?fields=name,population,region,capital,alpha3Code,flags`
    );
    return response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getSpecificCountry = async (
  alphaCode: string
): Promise<Country | null> => {
  try {
    const response = await fetchAbsolute(`${ALPHA_CODES}${alphaCode}`);
    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getCountriesByRegion = async (
  region: Region
): Promise<Country[]> => {
  try {
    const response = await fetchAbsolute(
      `${REGIONAL_BLOCK}${region}?fields=name,population,region,capital,alpha3Code,flags`
    );
    return response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
