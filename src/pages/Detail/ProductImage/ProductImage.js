// Framework
import Slider from 'react-slick';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

// Component
import Image from '@/components/Image';
import { NextArrow, PrevArrow } from './Arrow';

// Style
import styles from './ProductImage.module.scss';
import './CustomSlick.scss';

const ProductImage = ({ images }) => {
    const [navs, setNavs] = useState({ nav1: null, nav2: null });
    let slider1, slider2;

    const settings = {
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 3,
        speed: 500,
    };

    useEffect(() => {
        setNavs({
            nav1: slider1,
            nav2: slider2,
        });
    }, [slider1, slider2]);

    return (
        <div className={clsx(styles.container)}>
            <Slider asNavFor={navs.nav2} ref={(slider) => (slider1 = slider)} arrows={false}>
                {images.map((image) => (
                    <div key={image}>
                        <Image src={image} className={clsx(styles.img)} />
                    </div>
                ))}
            </Slider>

            <Slider
                {...settings}
                asNavFor={navs.nav1}
                ref={(slider) => (slider2 = slider)}
                focusOnSelect
                className={clsx(styles.imgs, 'imgs')}
            >
                {images.map((image) => (
                    <div key={image}>
                        <Image src={image} className={clsx(styles.img)} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProductImage;
