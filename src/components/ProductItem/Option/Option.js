// Framework
import clsx from 'clsx';
import { memo } from 'react';

// Component
import DropDown from '@/components/DropDown';

// Style
import styles from './Option.module.scss';

const Option = ({ capacities, currCapacity, currColors, setCurrCapacity, setCurrColors, setCurrColor, setCurrImg }) => {
    return (
        <>
            <div className="row ali-center ma-b-12">
                <p className={clsx(styles.title)}>Bộ nhớ:</p>
                <DropDown
                    options={capacities}
                    onOptionClick={(selected) => {
                        setCurrColors(() => {
                            const currColors = capacities.find((t) => t.value === selected.value).colors;
                            return currColors;
                        });
                    }}
                />
            </div>

            <div className="row ali-center">
                <p className={clsx(styles.title)}>Màu sắc:</p>
                <DropDown
                    options={currColors}
                    isColorAfter
                    onOptionClick={(selected) => {
                        setCurrColor(selected);
                        setCurrImg(selected.value);
                    }}
                    onChange={(options, optionChange) => {
                        setCurrImg(optionChange.value);
                    }}
                />
            </div>
        </>
    );
};

export default memo(Option);
