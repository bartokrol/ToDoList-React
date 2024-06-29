import React from 'react';
import styles from './navigation.module.scss';

export const Navigation = () => {
    console.log('nav');

    return (
        <div className={styles.nav}>
            <div className={styles.title}>
                {'ToDoList '}
                <p className={styles.author}>{'by Bartosz Król'}</p>
            </div>
            <div>{'burger'}</div>
        </div>
    );
};
