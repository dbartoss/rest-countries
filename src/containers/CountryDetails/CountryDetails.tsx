import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSpecificCountry } from '../../utils/api';
import { Country } from '../../models/Country';
import CountryCard from '../../components/CountryCard/CountryCard';

const CountryDetails = (): JSX.Element => {
  const { countryCode } = useParams();
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    if (!countryCode) {
      throw new Error('Country code must exists!');
    }
    getSpecificCountry(countryCode).then(setCountry);
  }, [countryCode]);

  return (
    <div className="home">{country && <CountryCard country={country} />}</div>
  );
};

export default CountryDetails;
