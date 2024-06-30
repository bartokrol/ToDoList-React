import React, { useRef, useState } from 'react';
import styles from './navigation.module.scss';
import { Burger } from '../burger/Burger';
import { Drawer } from '../../../components/drawer/Drawer';
import { Menu } from '../menu/Menu';

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);

    const handleBurgerClick = () => {
        setIsOpen(true);
    };

    const handleCloseDrawer = () => {
        setIsOpen(false);
    };

    return (
        <div className={styles.nav}>
            <div className={styles.title}>
                {'ToDoList '}
                <p className={styles.author}>{'by Bartosz Król'}</p>
            </div>
            <Burger clickAction={handleBurgerClick} />
            <Drawer isOpen={isOpen} dialogRef={dialogRef} closeAction={handleCloseDrawer}>
                <Menu />
            </Drawer>
        </div>
    );
};
