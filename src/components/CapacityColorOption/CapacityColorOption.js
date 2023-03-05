// Framework
import propTypes from 'prop-types';
import clsx from 'clsx';
import { memo, useState } from 'react';

// Component
import DropDown from '@/components/DropDown';

// Style
import styles from './CapacityColorOption.module.scss';

const CapacityColorOption = ({
    className,
    CapacityClassName,
    SelectedCapacity,
    ColorClassName,
    SelectedColor,
    product,
    CapcityOptionClick = () => {},
    ColorOptionClick = () => {},
    ColorOptionChange = () => {},
}) => {
    const capacities = product.capacities;
    const [currColors, setCurrColors] = useState(
        SelectedCapacity ? capacities.find((t) => t.value === SelectedCapacity.value).colors : capacities[0].colors,
    );

    return (
        <div className={className}>
            <div className={clsx('row ali-center', CapacityClassName)}>
                <p className={clsx(styles.title)}>Bộ nhớ:</p>
                <DropDown
                    options={capacities}
                    selectedValue={SelectedCapacity}
                    onOptionClick={(selected) => {
                        setCurrColors(capacities.find((t) => t.value === selected.value).colors);
                        CapcityOptionClick(selected);
                    }}
                />
            </div>

            <div className={clsx('row ali-center', ColorClassName)}>
                <p className={clsx(styles.title)}>Màu sắc:</p>
                <DropDown
                    options={currColors}
                    selectedValue={SelectedColor}
                    isColorAfter
                    onOptionClick={(selected) => {
                        ColorOptionClick(selected);
                    }}
                    onChange={(options, optionChange) => {
                        ColorOptionChange(options, optionChange);
                    }}
                />
            </div>
        </div>
    );
};

CapacityColorOption.propTypes = {
    product: propTypes.object.isRequired,
    SelectedColor: propTypes.object,
    SelectedCapacity: propTypes.object,
    className: propTypes.string,
    CapacityClassName: propTypes.string,
    ColorClassName: propTypes.string,
    CapcityOptionClick: propTypes.func,
    ColorOptionClick: propTypes.func,
    ColorOptionChange: propTypes.func,
};

export default memo(CapacityColorOption);
