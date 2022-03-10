import { Flag } from './Flag';
import { Region } from './Region';

export interface Country {
  name: string;
  capital: string;
  population: number;
  independent: boolean;
  alpha3Code: string;
  flags: Flag;
  region: Region;
}
