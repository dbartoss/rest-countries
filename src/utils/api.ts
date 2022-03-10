import { ALL_COUNTRIES, BASE_API_URL } from '../constants/api';
import { Country } from '../models/Country';

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
    const response = await fetchAbsolute(
      `/${alphaCode}?fields=name,population,region,capital,alpha3Code,flags`
    );
    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
