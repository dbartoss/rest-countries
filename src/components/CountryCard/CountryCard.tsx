import React from 'react';
import styles from './CountryCard.module.scss';
import { Country } from '../../models/Country';

const CountryCard = ({ country }: { country: Country }): JSX.Element => {
  const { name, flags, population, capital, region } = country;

  return (
    <section className={styles.card}>
      <img src={flags.svg} alt={`${name} flag`} className={styles.image} />
      <article className={styles.info}>
        <h4 className={styles.name}>{name}</h4>
        <ul className={styles.details}>
          <li>
            <strong>Population:</strong>
            <span>{population}</span>
          </li>
          <li>
            <strong>Region:</strong>
            <span>{region}</span>
          </li>
          <li>
            <strong>Capital:</strong>
            <span>{capital}</span>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default CountryCard;
