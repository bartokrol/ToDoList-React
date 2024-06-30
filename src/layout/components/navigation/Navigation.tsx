import React, { useState } from 'react';
import styles from './navigation.module.scss';
import { Burger } from '../burger/Burger';

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleBurgerClick = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div className={styles.nav}>
            <div className={styles.title}>
                {'ToDoList '}
                <p className={styles.author}>{'by Bartosz Król'}</p>
            </div>
            <Burger clickAction={handleBurgerClick} />
        </div>
    );
};
