// Framework
import propTypes from 'prop-types';
import clsx from 'clsx';
import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillBagFill } from 'react-icons/bs';

// Style
import styles from './ProductItem.module.scss';

// Component
import Image from '../Image';
import Option from './Option';
import Name from './Name';

// Utils
import { AddCommasForThounsand } from '@/utils';
import Button from '../Button';

const ProductItem = ({ className, info }) => {
    const [currCapacity, setcurrCapacity] = useState(info.capacities[0]);
    const [currColors, setCurrColors] = useState(info.capacities.find((t) => t.value === currCapacity.value).colors);
    const [currColor, setcurrColor] = useState(currColors[0]);
    const [carted, SetCarted] = useState(false);

    return (
        <div className={clsx(styles.container, className)}>
            <div className={clsx(styles.info, 'row ali-start relative')}>
                <Link to={currColor.linkTo} className={clsx(styles.thumbnail)}>
                    <Image src={currColor.imgPath} />
                </Link>

                <div className="flex-1">
                    <Name className={styles.name} name={info.name} linkTo={currColor.linkTo} />

                    <div className={clsx(styles.options, 'row ali-center')}>
                        <Option
                            capacities={info.capacities}
                            currCapacity={currCapacity}
                            currColors={currColors}
                            setcurrCapacity={(capacity) => setcurrCapacity(capacity)}
                            setcurrColors={(colors) => setCurrColors(colors)}
                            setcurrColor={(color) => setcurrColor(color)}
                        />
                    </div>

                    <p className={clsx(styles.price)}>
                        <Link to={currColor.linkTo}>{AddCommasForThounsand(currCapacity.price)}</Link>
                    </p>
                </div>

                <div>
                    <Button
                        leftIcon={<BsFillBagFill />}
                        active={carted}
                        onClick={() => SetCarted(!carted)}
                        activeClass={clsx(styles.carted)}
                        leftIconClass={clsx(styles.cartIcon)}
                        className={clsx(styles.cart)}
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
