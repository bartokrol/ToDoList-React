import React from 'react';
import styles from './App.module.scss';
import { Layout } from './layout/Layout';

const App = () => (
    <Layout>
        <div className={styles.app}>
            {'Test'}
        </div>
    </Layout>
);

export default App;
