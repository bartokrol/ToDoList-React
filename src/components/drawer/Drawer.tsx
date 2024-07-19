import styles from './drawer.module.scss';
import { useDrawerState } from './hooks/useDrawerState';
import { DrawerType } from './index.model';
import { CloseIcon } from '../closeIcon/CloseIcon';

export const Drawer = ({ isOpen, children, dialogRef, closeAction }: DrawerType) => {
    const isInitialized = useDrawerState({ isOpen, dialogRef, closeAction });

    return (
        <dialog className={styles.drawer} ref={dialogRef} data-css-is-open={isInitialized}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    {children.header}
                    <CloseIcon closeAction={closeAction} />
                </div>
                <div className={styles.content}>
                    {children.content}
                </div>
            </div>
        </dialog>);
};
