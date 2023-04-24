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

const ProductItem = ({ className, product, direction = 'horizontal' }) => {
    // const [capacities] = useState(product.capacities);
    // const [currColor, setCurrColor] = useState(capacities[0].colors[0]);
    // const [currCapacity, setCurrCapacity] = useState(capacities[0]);
    // const [currImg, setCurrImg] = useState(product.sharedImgs[0].imgPaths[0]);

    const [capacities] = useState();
    const [currColor, setCurrColor] = useState();
    const [currCapacity, setCurrCapacity] = useState();
    const [currImg, setCurrImg] = useState();

    const handleSetCurrImg = (color) => {
        // const foundImg = product.sharedImgs.find((t) => t.colorValue === color.value).imgPaths[0];
        // setCurrImg(foundImg);
    };

    return (
        <div className={clsx(styles.container, className)}>
            <div
                className={clsx(styles.info, 'row ali-start relative', {
                    [styles.vertical]: direction === 'vertical' ? true : false,
                })}
            >
                {currColor && (
                    <Link to={`/detail/${currColor.linkTo}`} className={clsx(styles.thumbnail)}>
                        <Image src={currImg} />
                    </Link>
                )}

                <div className="flex-1">
                    <Name className={styles.name} name={product.Ten_SP} />

                    {capacities && (
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
                    )}

                    {currCapacity && (
                        <Price
                            className={'jus-end'}
                            disCount={currCapacity.discount}
                            price={currCapacity.price}
                            disCountClass={clsx(styles.discount)}
                            priceClass={clsx(styles.price)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

ProductItem.propTypes = {
    className: propTypes.string,
    info: propTypes.object,
    direction: propTypes.oneOf(['horizontal', 'vertical']),
};

export default memo(ProductItem);
