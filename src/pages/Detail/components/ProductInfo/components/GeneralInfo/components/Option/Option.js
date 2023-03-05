// Framework
import clsx from 'clsx';
import { useContext } from 'react';
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
        getComments,
        setCurrCapacity,
        setCurrColor,
        setCurrImgPaths,
        setCurrPromotion,
        setCurrPackage,
        setCurrComments,
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
                setCurrComments(getComments(product.id, selected, currColor));
                navigate(`?v=${selected.value}&c=${currColor.value.replace('#', '')}`);
            }}
            ColorOptionClick={(selected) => {
                setCurrColor(selected);
                setCurrImgPaths(selected);
                setCurrComments(getComments(product.id, currCapacity, selected));
                navigate(`?v=${currCapacity.value}&c=${selected.value.replace('#', '')}`);
            }}
            ColorOptionChange={(options, optionChange) => {
                setCurrImgPaths(optionChange);
                navigate(`?v=${currCapacity.value}&c=${currColor.value.replace('#', '')}`);
                setCurrComments(getComments(product.id, currCapacity, optionChange));
                setCurrPackage();
            }}
        />
    );
}

export default Option;
