// Framework
import { AddCommasForThounsand } from '@/utils';
import clsx from 'clsx';
import propTypes from 'prop-types';

// Style
import styles from './Price.module.scss';

function Price({ disCount, price, disCountClass, priceClass, className }) {
    return (
        <div className={clsx(styles.container, 'row ali-baseline', className)}>
            {disCount && <p className={clsx(styles.discount, disCountClass)}>{AddCommasForThounsand(disCount)}</p>}
            <p className={clsx(styles.price, priceClass)}>{AddCommasForThounsand(price)}</p>
        </div>
    );
}

Price.propTypes = {
    disCount: propTypes.node,
    price: propTypes.node.isRequired,
    disCountClass: propTypes.string,
    priceClass: propTypes.string,
};

export default Price;
