import styles from './burger.module.scss';
import React from 'react';

export const Burger = ({ clickAction }: { clickAction: () => void }) => (
    <button className={styles.burger} onClick={clickAction}>
        <div className={styles.burgerLine} />
        <div className={styles.burgerLine} />
        <div className={styles.burgerLine} />
    </button>
);
