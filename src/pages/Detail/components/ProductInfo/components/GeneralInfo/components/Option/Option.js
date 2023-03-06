// Framework
import clsx from 'clsx';
import { useContext } from 'react';
import { DetailContext } from '@/contexts';

// Component
import CapacityColorOption from '@/components/CapacityColorOption';

// Style
import styles from '../../General.module.scss';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';

function Option() {
    const {
        product,
        currCapacity,
        currColor,
        currPackage,
        getComments,
        setCurrCapacity,
        setCurrColor,
        setCurrImgPaths,
        setCurrPromotion,
        setCurrPackage,
        setCurrComments,
    } = useContext(DetailContext);

    const navigate = useNavigate();

    const { resetField } = useFormContext();

    return (
        <CapacityColorOption
            product={product}
            className={clsx(styles.options, 'row ali-center ma-t-24')}
            CapacityClassName={clsx(styles.capacity)}
            SelectedCapacity={currCapacity}
            SelectedColor={currColor}
            CapcityOptionClick={(selected) => {
                setCurrCapacity(selected);
                setCurrPromotion(selected);
                setCurrComments(getComments(product.id, selected, currColor));
                navigate(`?v=${selected.value}&c=${currColor.value.replace('#', '')}`);

                if (currPackage && !selected.promotion.packages.find((t) => t.value === currPackage.value)) {
                    setCurrPackage();
                    resetField('package');
                }
            }}
            ColorOptionClick={(selected) => {
                setCurrColor(selected);
                setCurrImgPaths(selected);
                setCurrComments(getComments(product.id, currCapacity, selected));
                navigate(`?v=${currCapacity.value}&c=${selected.value.replace('#', '')}`);
            }}
            ColorOptionChange={(options, optionChange) => {
                setCurrImgPaths(optionChange);
                navigate(`?v=${currCapacity.value}&c=${optionChange.value.replace('#', '')}`);
                setCurrComments(getComments(product.id, currCapacity, optionChange));
            }}
        />
    );
}

export default Option;
