import React from 'react';
import styles from './errorPage.module.scss';
import { ErrorStructure } from './components/errorStructure/ErrorStructure';

export const ErrorPage = () => (
    <div className={styles.container}>
        <ErrorStructure statusText={'Something went wrong...'} />
    </div>
);
