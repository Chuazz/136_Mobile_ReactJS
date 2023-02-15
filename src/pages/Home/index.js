// Framework
import clsx from 'clsx';
import { memo } from 'react';
import Banner from './components/Banner';
import { MdOutlineChevronRight } from 'react-icons/md';

// Component
import ProductList from '@/components/ProductList';

// Style
import styles from './Home.module.scss';
import ProductItem from '@/components/ProductItem';
import routes from '@/config/routes';
import { products } from '@/data';

function Home() {
    return (
        <>
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
                        <ProductItem className={clsx(styles.item, 'h-4')} key={product.name} info={product} />
                    ))}
                </ProductList>
            </div>
        </>
    );
}

export default memo(Home);
