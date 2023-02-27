// Framework
import clsx from 'clsx';
import { useContext } from 'react';
import { DetailContext } from '@/contexts';

// Component
import CapacityColorOption from '@/components/CapacityColorOption';

// Style
import styles from '../../General.module.scss';

function Option() {
    const context = useContext(DetailContext);
    const {
        product,
        currCapacity,
        currColor,
        setCurrCapacity,
        setCurrColor,
        setCurrImgPaths,
        setCurrPromotion,
        setCurrPackage,
    } = context;

    return (
        <CapacityColorOption
            product={product}
            className={clsx(styles.options, 'row ali-center ma-t-24')}
            CapacityClassName={clsx(styles.capacity)}
            CapacitySeletedValue={currCapacity}
            ColorSeletedValue={currColor}
            CapcityOptionClick={(selected) => {
                setCurrCapacity(selected);
                setCurrPromotion(selected);
                setCurrPackage();
            }}
            ColorOptionClick={(selected) => {
                setCurrColor(selected);
                setCurrImgPaths(selected);
            }}
            ColorOptionChange={(options, optionChange) => {
                setCurrImgPaths(optionChange);
            }}
        />
    );
}

export default Option;
