import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CountryCard from '../../components/CountryCard/CountryCard';
import { getAllCountries } from '../../utils/api';
import { Country } from '../../models/Country';

const Home = (): JSX.Element => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    getAllCountries().then(setCountries);
  }, []);

  return (
    <div className="home">
      {countries.map((country: Country) => (
        <Link to={`/country/${country.alpha3Code}`}>
          <CountryCard key={country.alpha3Code} country={country} />
        </Link>
      ))}
    </div>
  );
};

export default Home;
