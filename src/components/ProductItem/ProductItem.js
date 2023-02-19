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
import Option from './Option';

// Utils
import { AddCommasForThounsand } from '@/utils';

const ProductItem = ({ className, product }) => {
    const [currCapacity, setCurrCapacity] = useState(product.capacities[0]);
    const [currColors, setCurrColors] = useState(product.capacities.find((t) => t.value === currCapacity.value).colors);
    const [currColor, setCurrColor] = useState(currColors[0]);
    const [currImg, setCurrImg] = useState(() => {
        const [currImgs] = product.sharedImgs.filter((sharedImg) => sharedImg.colorValue === currColor.value);

        return currImgs.imgPaths[0];
    });

    const hanldeSetCurrImg = (colorValue) => {
        const [currImgs] = product.sharedImgs.filter((sharedImg) => sharedImg.colorValue === colorValue);

        setCurrImg(currImgs.imgPaths[0]);
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
                            capacities={product.capacities}
                            currColors={currColors}
                            setCurrCapacity={(capacity) => setCurrCapacity(capacity)}
                            setCurrColors={(colors) => setCurrColors(colors)}
                            setCurrColor={(color) => setCurrColor(color)}
                            setCurrImg={(imgPath) => hanldeSetCurrImg(imgPath)}
                        />
                    </div>

                    <p className="row ali-center jus-end">
                        {currCapacity.discount && (
                            <Link to={currColor.linkTo} className={clsx(styles.discount)}>
                                {AddCommasForThounsand(currCapacity.discount)}
                            </Link>
                        )}
                        <Link to={currColor.linkTo} className={clsx(styles.price)}>
                            {AddCommasForThounsand(currCapacity.price)}
                        </Link>
                    </p>
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
