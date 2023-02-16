// Framework
import clsx from 'clsx';
import { memo } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';

// Component
import Button from '@/components/Button';
import Image from '@/components/Image';

// Style
import styles from './Banner.module.scss';

// Data
import { homeBanners as banners } from '@/data';

function Banner({ className }) {
    const settings = {
        customPaging: () => <a className={clsx(styles.dot)}></a>,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: true,
        nextArrow: <Button className={'slider-button'} shape="circle" leftIcon={<IoChevronForward />} />,
        prevArrow: <Button className={'slider-button'} shape="circle" leftIcon={<IoChevronBack />} />,
    };

    return (
        <div className={clsx(styles.container, 'relative', className)}>
            <Slider {...settings}>
                {banners.map((banner) => (
                    <Image src={banner.image} key={banner.id} />
                ))}
            </Slider>
        </div>
    );
}

export default memo(Banner);
