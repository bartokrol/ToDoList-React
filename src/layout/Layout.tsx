import { ReactNode } from 'react';
import styles from './layout.module.scss';
import { Navigation } from './components/navigation/Navigation';

export const Layout = ({ children }: { children: ReactNode }) => (
    <div className={styles.layout}>
        <Navigation />
        <div className={styles.main}>
            {children}
        </div>
        <div id={'dialogs'} />
    </div>
);
