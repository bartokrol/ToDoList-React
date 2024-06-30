import { Link } from 'react-router-dom';
import { ROUTES_PATHS } from '../../../infrastructure/routing/constants';
import React from 'react';
import styles from './menu.module.scss';
import { MENU_LINKS } from './constants';

export const Menu = () => (
    <div className={styles.container}>
        <div className={styles.links}>
            {MENU_LINKS.map(link => (
                <Link className={styles.linkWrapper} to={link.href}>
                    <img className={styles.img} src={link.svg} alt={link.alt} />
                    <p className={styles.linkText}>{link.text}</p>
                </Link>
            ))}
        </div>

        <Link className={styles.homeButton} to={ROUTES_PATHS.mainPage}>{'Go back to main page'}</Link>
    </div>
);
