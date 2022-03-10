import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetails = (): JSX.Element => {
  const { countryCode } = useParams();

  useEffect(() => {}, []);

  return <div className="home">{countryCode}</div>;
};

export default CountryDetails;
