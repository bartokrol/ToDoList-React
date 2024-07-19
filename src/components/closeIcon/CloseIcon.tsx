import styles from './closeIcon.module.scss';
import closeIcon from '../../public/svgs/close_icon.svg';

export const CloseIcon = ({ closeAction }: { closeAction: () => void }) => {
    console.log('dupa');
    return (
        <button className={styles.closeButton} onClick={closeAction}>
            <img className={styles.close} src={closeIcon} alt={'Close Button'} />
        </button>
    );
};
