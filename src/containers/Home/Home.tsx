import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';
import CountryCard from '../../components/CountryCard/CountryCard';
import { getAllCountries, getCountriesByRegion } from '../../utils/api';
import { Country } from '../../models/Country';
import { Region } from '../../models/Region';
import { Regions } from '../../constants/Regions';
import { SelectOptions } from '../../models/SelectOptions';

const Home = (): JSX.Element => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [region, setRegion] = useState<Region | undefined>();

  const getCountries = useCallback(async () => {
    if (region) {
      return await getCountriesByRegion(region);
    }

    return await getAllCountries();
  }, [region]);

  function handleRegionChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ): void {
    setRegion(event.target.value as Region);
  }

  useEffect(() => {
    getCountries().then(setCountries);
  }, [region]);

  return (
    <div className="home">
      <select
        name="region"
        id="select-region"
        value={region}
        onChange={handleRegionChange}
      >
        <option value="">--nothing--</option>
        {Regions.map(({ label, value }: SelectOptions) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      {countries.map((country: Country) => (
        <Link
          key={country.alpha3Code}
          to={`/country/${country.alpha3Code}`}
          className="link"
        >
          <CountryCard country={country} />
        </Link>
      ))}
    </div>
  );
};

export default Home;
