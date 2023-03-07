// Framework
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import clsx from 'clsx';

// Style
import styles from './Arrow.module.scss';

const PrevArrow = ({ classNames, onClick }) => {
    return (
        <div onClick={onClick}>
            <div className={clsx(styles.arrow, styles.arrowLeft, classNames, 'row ali-center jus-center')}>
                <IoChevronBack />
            </div>
        </div>
    );
};

const NextArrow = ({ classNames, onClick }) => {
    return (
        <div onClick={onClick}>
            <div className={clsx(styles.arrow, styles.arrowRight, classNames, 'row ali-center jus-center')}>
                <IoChevronForward />
            </div>
        </div>
    );
};

export { PrevArrow, NextArrow };
