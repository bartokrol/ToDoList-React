import styles from './drawer.module.scss';
import { useDrawerState } from './hooks/useDrawerState';
import { DrawerType } from './index.model';

export const Drawer = ({ isOpen, dialogRef, closeAction }: DrawerType) => {
    const isInitialized = useDrawerState({ isOpen, dialogRef });

    return (
        <dialog className={styles.drawer} ref={dialogRef} data-css-is-open={isInitialized}>
            <div className={styles.wrapper}>
                <button className={styles.closeButton} onClick={closeAction}>{'X'}</button>
                <div className={styles.content}>{'Test'}</div>
            </div>
        </dialog>);
};
