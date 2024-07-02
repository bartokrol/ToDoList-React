import styles from './drawer.module.scss';
import { useDrawerState } from './hooks/useDrawerState';
import { DrawerType } from './index.model';
import closeIcon from '../../public/svgs/close_icon.svg';

export const Drawer = ({ isOpen, children, dialogRef, closeAction }: DrawerType) => {
    const isInitialized = useDrawerState({ isOpen, dialogRef, closeAction });

    return (
        <dialog className={styles.drawer} ref={dialogRef} data-css-is-open={isInitialized}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    {children.header}
                    <button className={styles.closeButton} onClick={closeAction}>
                        <img className={styles.close} src={closeIcon} alt={'Close Button'} />
                    </button>
                </div>
                <div className={styles.content}>
                    {children.content}
                </div>
            </div>
        </dialog>);
};
