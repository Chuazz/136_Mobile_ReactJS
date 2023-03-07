// Framework
import clsx from 'clsx';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Component
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

// Style
import styles from './DefaultLayout.module.scss';

function DefaultLayout({ children }) {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <Header />

            <div className={clsx(styles.container, 'row wide')}>
                <div className={clsx(styles.sidebar)}>
                    <Sidebar />
                </div>

                <div className={clsx(styles.content)}>{children}</div>
            </div>

            <Footer />
        </>
    );
}

export default DefaultLayout;
