// Framework
import propTypes from 'prop-types';
import clsx from 'clsx';
import { memo, useState } from 'react';
import { Link } from 'react-router-dom';

// Style
import styles from './ProductItem.module.scss';

// Component
import Image from '../Image';
import Name from './Name';
import Option from '../CapacityColorOption';

// Utils
import Price from '../Price/Price';

const ProductItem = ({ className, product }) => {
    const capacities = product.capacities;
    const [currColor, setCurrColor] = useState(capacities[0].colors[0]);

    const [currCapacity, setCurrCapacity] = useState(capacities[0]);
    const [currImg, setCurrImg] = useState(product.sharedImgs[0].imgPaths[0]);

    const handleSetCurrImg = (color) => {
        const foundImg = product.sharedImgs.find((t) => t.colorValue === color.value).imgPaths[0];
        setCurrImg(foundImg);
    };

    return (
        <div className={clsx(styles.container, className)}>
            <div className={clsx(styles.info, 'row ali-start relative')}>
                <Link to={`/${currColor.linkTo}`} className={clsx(styles.thumbnail)}>
                    <Image src={currImg} />
                </Link>

                <div className="flex-1">
                    <Name className={styles.name} name={product.name} linkTo={currColor.linkTo} />

                    <div className={clsx(styles.options, 'row ali-center')}>
                        <Option
                            product={product}
                            CapacityClassName="ma-b-12"
                            CapcityOptionClick={(selected) => setCurrCapacity(selected)}
                            ColorOptionClick={(selected) => {
                                handleSetCurrImg(selected);
                                setCurrColor(selected);
                            }}
                            ColorOptionChange={(options, optionChange) => {
                                setCurrColor(optionChange);
                                handleSetCurrImg(optionChange);
                            }}
                        />
                    </div>

                    <Price
                        className={'jus-end'}
                        disCount={currCapacity.discount}
                        price={currCapacity.price}
                        disCountClass={clsx(styles.discount)}
                        priceClass={clsx(styles.price)}
                    />
                </div>
            </div>
        </div>
    );
};

ProductItem.propTypes = {
    className: propTypes.string,
    info: propTypes.object,
};

export default memo(ProductItem);
