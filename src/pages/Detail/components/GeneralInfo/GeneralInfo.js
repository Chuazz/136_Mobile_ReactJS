// Framework
import CapacityColorOption from '@/components/CapacityColorOption';
import Price from '@/components/Price/Price';
import clsx from 'clsx';
import { useContext } from 'react';
import { DetailContext } from '../../contexts';

// Style
import styles from './General.module.scss';

function GeneralInfo() {
    const context = useContext(DetailContext);
    const { product, currCapacity, currColor, setCurrCapacity, setCurrColor, setcurrImgPaths, getImgs } = context;

    return (
        <div className={clsx(styles.container)}>
            <div className="row ali-baseline jus-between">
                <p className={clsx(styles.title)}>{product.name},</p>

                <Price
                    className={'jus-end'}
                    price={currCapacity.price}
                    priceClass={clsx(styles.price)}
                    disCountClass={clsx(styles.discount)}
                    disCount={currCapacity.discount}
                />
            </div>

            <p className={clsx(styles.description)}>{product.description}</p>

            <CapacityColorOption
                product={product}
                className={clsx(styles.options, 'row ali-center ma-t-24')}
                CapacityClassName={clsx(styles.capacity)}
                CapacitySeletedValue={currCapacity}
                ColorSeletedValue={currColor}
                CapcityOptionClick={(selected) => setCurrCapacity(selected)}
                ColorOptionClick={(selected) => {
                    setCurrColor(selected);
                    setcurrImgPaths(getImgs(selected));
                }}
                ColorOptionChange={(options, optionChange) => {
                    setcurrImgPaths(getImgs(optionChange));
                }}
            />
        </div>
    );
}

export default GeneralInfo;
