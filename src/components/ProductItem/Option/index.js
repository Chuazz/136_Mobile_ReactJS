import DropDown from '@/components/DropDown';
import clsx from 'clsx';
import { memo } from 'react';

// Style
import styles from './Option.module.scss';

const Option = ({ capacities, currCapacity, currColors, setcurrCapacity, setcurrColors, setcurrColor }) => {
    return (
        <>
            <div className="row ali-center ma-b-12">
                <p className={clsx(styles.title)}>Bộ nhớ:</p>
                <DropDown
                    options={capacities}
                    onOptionClick={(selected) => {
                        setcurrCapacity(selected);
                        setcurrColors(capacities.find((t) => t.value === selected.value).colors);
                    }}
                />
            </div>

            <div className="row ali-center">
                <p className={clsx(styles.title)}>Màu sắc:</p>
                <DropDown
                    options={currColors}
                    isColorAfter
                    onOptionClick={(selected) => {
                        setcurrColor(selected);
                    }}
                    onChange={(options) => setcurrColor(options[0])}
                />
            </div>
        </>
    );
};

export default memo(Option);
