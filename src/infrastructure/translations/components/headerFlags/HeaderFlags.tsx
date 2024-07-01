import styles from './headerFlags.module.scss';
import plIcon from '../../../../public/pngs/pl_flag.png';
import enIcon from '../../../../public/pngs/en_flag.png';

export const HeaderFlags = () => (
    <>
        <button className={styles.flagButton}>
            <img className={styles.flag} src={plIcon} alt={'PL flag'} />
        </button>
        <button className={styles.flagButton}>
            <img className={styles.flag} src={enIcon} alt={'EN flag'} />
        </button>
    </>
);
