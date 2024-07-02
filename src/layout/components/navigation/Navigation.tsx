import React, { useRef, useState } from 'react';
import styles from './navigation.module.scss';
import { Burger } from '../burger/Burger';
import { Drawer } from '../../../components/drawer/Drawer';
import { Menu } from '../menu/Menu';
import { useTranslation } from 'react-i18next';
import { HeaderFlags } from '../../../infrastructure/translations/components/headerFlags/HeaderFlags';

export const Navigation = () => {
    const { t } = useTranslation();
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
                {t('navigation.toDoList')}
                <p className={styles.author}>{t('navigation.author')}</p>
            </div>
            <Burger clickAction={handleBurgerClick} />
            <Drawer isOpen={isOpen} dialogRef={dialogRef} closeAction={handleCloseDrawer}>
                {{
                    header: <HeaderFlags />,
                    content: <Menu />,
                }}
            </Drawer>
        </div>
    );
};
