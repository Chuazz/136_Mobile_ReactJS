// Framework
import clsx from 'clsx';
import { memo } from 'react';
import { MdOutlineChevronRight } from 'react-icons/md';

// Component
import ProductList from '@/components/ProductList';
import Banner from './components/Banner';
import ProductItem from '@/components/ProductItem';

// Style
import styles from './Home.module.scss';
import './components/Banner/CustomSlick.scss';

// Config
import { routes } from '@/config';

// Data
import { products } from '@/data';

function Home() {
    return (
        <div id="home">
            <Banner className={clsx(styles.banner)} />

            <div className={clsx(styles.container)}>
                <ProductList
                    title="iPhone"
                    showAllMessage="Xem tất cả"
                    showAllLinkTo={routes.phone}
                    showAllIcon={<MdOutlineChevronRight />}
                    className={clsx(styles.list)}
                >
                    {products.map((product) => (
                        <ProductItem className={clsx(styles.item, 'h-4')} key={product.name} product={product} />
                    ))}
                </ProductList>
            </div>
        </div>
    );
}

export default memo(Home);
