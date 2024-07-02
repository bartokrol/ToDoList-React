import styles from './headerFlags.module.scss';
import plIcon from '../../../../public/pngs/pl_flag.png';
import enIcon from '../../../../public/pngs/en_flag.png';
import i18n from 'i18next';

export const HeaderFlags = () => {
    const handleLanguageChange = (lang: 'pl' | 'en') => {
        i18n.changeLanguage(lang);
    };

    return (
        <>
            <button className={styles.flagButton} onClick={() => handleLanguageChange('pl')}>
                <img className={styles.flag} src={plIcon} alt={'PL flag'} />
            </button>
            <button className={styles.flagButton} onClick={() => handleLanguageChange('en')}>
                <img className={styles.flag} src={enIcon} alt={'EN flag'} />
            </button>
        </>
    );
};
