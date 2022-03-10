import React from 'react';
import styles from './CountryCard.module.scss';

const CountryCard = (): JSX.Element => {
    return (
        <section className={styles.card}>
            <div className={styles.image}>to replace with image</div>
            <article className={styles.info}>
                <h4 className={styles.name}>Country Name</h4>
                <ul className={styles.details}>
                    <li>
                        <strong>Population:</strong>
                        <span>xxxx</span>
                    </li>
                </ul>
            </article>
        </section>
    );
};

export default CountryCard;
