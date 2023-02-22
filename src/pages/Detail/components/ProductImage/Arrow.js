// Framework
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import clsx from 'clsx';

// Component
import Button from '@/components/Button';

// Style
import styles from './ProductImage.module.scss';

const PrevArrow = ({ onClick }) => (
    <Button
        className={clsx(styles.arrow, styles.arrowLeft)}
        shape="circle"
        leftIcon={<IoChevronBack />}
        onClick={onClick}
    />
);

const NextArrow = ({ onClick }) => (
    <Button
        className={clsx(styles.arrow, styles.arrowRight)}
        shape="circle"
        leftIcon={<IoChevronForward />}
        onClick={onClick}
    />
);

export { PrevArrow, NextArrow };
