import React from 'react';
import styles from './errorPage.module.scss';
import { Link } from 'react-router-dom';

export const ErrorPage = () => (
    <div className={styles.container}>
        <h1 className={styles.oops}>{'Ooops!!!'}</h1>
        <p className={styles.text}>{`The page you are looking for doesn't exist`}</p>
        <Link className={styles.link} to={`/`}>{'Return to Homepage'}</Link>
    </div>
);
