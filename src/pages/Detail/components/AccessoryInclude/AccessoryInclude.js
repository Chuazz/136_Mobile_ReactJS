// Framework
import clsx from 'clsx';
import Slider from 'react-slick';

// Component
import ProductItem from '@/components/ProductItem';
import ProductList from '@/components/ProductList';
import { NextArrow, PrevArrow } from '@/components/Arrow';

// Data
import { products } from '@/data';

// Style
import styles from './AccessoryInclude.module.scss';

function AccessoryInclude({ accessories }) {
    const settings = {
        prevArrow: <PrevArrow classNames={clsx(styles.arrow)} />,
        nextArrow: <NextArrow classNames={clsx(styles.arrow)} />,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
    };
    return (
        <div className={clsx(styles.container)}>
            <ProductList title="Phụ kiện nên có cho iPhone 14 Pro Max" className={clsx(styles.ProductList)}>
                <Slider {...settings}>
                    <ProductItem product={products[0]} direction="vertical" />
                    <ProductItem product={products[0]} direction="vertical" />
                    <ProductItem product={products[0]} direction="vertical" />
                    <ProductItem product={products[0]} direction="vertical" />
                    <ProductItem product={products[0]} direction="vertical" />
                    <ProductItem product={products[0]} direction="vertical" />
                </Slider>
            </ProductList>
        </div>
    );
}

export default AccessoryInclude;
