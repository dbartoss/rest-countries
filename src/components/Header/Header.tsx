import React from 'react';
import styles from './Header.module.scss';

const Header = (): JSX.Element => {
    return (
        <nav className={styles.nav}>
            <header className={styles.title}>Where in the world?</header>
            <span className={styles.colorModeToggle}>Here will be color toggle</span>
        </nav>
    );
};

export default Header;
