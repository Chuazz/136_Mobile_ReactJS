// Framework
import clsx from 'clsx';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';
import propTypes from 'prop-types';

// Style
import styles from './CountMachine.module.scss';
import { useRef, useState } from 'react';

function CountMachine({ defaultValue = 1, min = 1, max = 3, onDecrease = () => {}, onIncrease = () => {} }) {
    const [value, setValue] = useState(defaultValue);
    const inputRef = useRef();
    const [prevValue, setPrevValue] = useState(0);

    function onChangeValue() {
        const currentValue = parseInt(inputRef.current.value);

        if (currentValue > prevValue) {
            onClickIncrease();
        } else if (currentValue < prevValue) {
            onClickDecrease();
        }
        setPrevValue(currentValue);
    }

    const onClickDecrease = () => {
        setValue((prev) => {
            let newValue = prev - 1;

            if (newValue >= min) {
                inputRef.current.value = newValue;
                return newValue;
            }

            inputRef.current.value = prev;
            return prev;
        });

        onDecrease();
    };

    const onClickIncrease = () => {
        setValue((prev) => {
            let newValue = prev + 1;

            if (newValue <= max) {
                inputRef.current.value = newValue;
                return newValue;
            }

            inputRef.current.value = prev;
            return prev;
        });

        onIncrease();
    };

    return (
        <div className={clsx(styles.container, 'row ali-center')}>
            <VscTriangleDown className={styles.icon} onClick={() => onClickDecrease()} />

            <input
                min={min}
                max={max}
                type="number"
                className={styles.input}
                defaultValue={value}
                ref={inputRef}
                onInput={() => onChangeValue()}
            />

            <VscTriangleUp className={styles.icon} onClick={() => onClickIncrease()} />
        </div>
    );
}

CountMachine.propTypes = {
    defaultValue: propTypes.number,
    min: propTypes.number,
    max: propTypes.number,
    onDecrease: propTypes.func,
    onIncrease: propTypes.func,
};

export default CountMachine;
