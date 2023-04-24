// Framework
import clsx from 'clsx';
import { memo, useEffect, useState } from 'react';
import { MdOutlineChevronRight } from 'react-icons/md';
import axios from 'axios';

// Component
import ProductList from '@/components/ProductList';
import Banner from './components/Banner';
import ProductItem from '@/components/ProductItem';

// Style
import styles from './Home.module.scss';
import './components/Banner/CustomSlick.scss';

// Date
import { products } from '@/data';

// Config
import { productAPI, routes } from '@/config';

function Home() {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        axios.get(productAPI.list()).then((res) => {
            setProductList(res.data);
        });
    }, []);

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
                    {productList.map((product) => (
                        <ProductItem className={clsx(styles.item, 'h-4')} key={product.Ma_SP} product={product} />
                    ))}
                </ProductList>
            </div>
        </div>
    );
}

export default memo(Home);
