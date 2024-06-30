import styles from './drawer.module.scss';
import { useDrawerState } from './hooks/useDrawerState';
import { DrawerType } from './index.model';
import { Link } from 'react-router-dom';
import { ROUTES_PATHS } from '../../infrastructure/routing/constants';

export const Drawer = ({ isOpen, dialogRef, closeAction }: DrawerType) => {
    const isInitialized = useDrawerState({ isOpen, dialogRef });

    return (
        <dialog className={styles.drawer} ref={dialogRef} data-css-is-open={isInitialized}>
            <div className={styles.wrapper}>
                <button className={styles.closeButton} onClick={closeAction}>{'X'}</button>
                <div className={styles.content}>
                    <Link to={ROUTES_PATHS.loginPage}>{'login'}</Link>
                    <Link to={ROUTES_PATHS.registrationPage}>{'registration'}</Link>
                    <Link to={ROUTES_PATHS.historyPage}>{'history'}</Link>
                    <Link to={ROUTES_PATHS.settingsPage}>{'settings'}</Link>
                    <Link to={ROUTES_PATHS.mainPage}>{'Go back to main page'}</Link>
                </div>
            </div>
        </dialog>);
};
