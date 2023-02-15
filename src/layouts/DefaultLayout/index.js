// Framework
import clsx from 'clsx';
import Footer from '../components/Footer';

// Component
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

// Style
import styles from './DefaultLayout.module.scss';

function DefaultLayout({ children }) {
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
