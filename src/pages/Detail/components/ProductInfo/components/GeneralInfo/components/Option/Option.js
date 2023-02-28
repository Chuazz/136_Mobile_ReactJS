// Framework
import clsx from 'clsx';
import { useContext, useEffect } from 'react';
import { DetailContext } from '@/contexts';

// Component
import CapacityColorOption from '@/components/CapacityColorOption';

// Style
import styles from '../../General.module.scss';
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();

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
                navigate(`?v=${selected.value}&c=${currColor.value.replace('#', '')}`);
            }}
            ColorOptionClick={(selected) => {
                setCurrColor(selected);
                setCurrImgPaths(selected);
                navigate(`?v=${currCapacity.value}&c=${selected.value.replace('#', '')}`);
            }}
            ColorOptionChange={(options, optionChange) => {
                setCurrImgPaths(optionChange);
                navigate(`?v=${currCapacity.value}&c=${currColor.value.replace('#', '')}`);
                setCurrPackage();
            }}
        />
    );
}

export default Option;
