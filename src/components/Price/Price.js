// Framework
import { addCommasForThounsand } from '@/utils';
import clsx from 'clsx';
import propTypes from 'prop-types';

// Style
import styles from './Price.module.scss';

function Price({ disCount, price, disCountClass, priceClass, className, direction = 'horizental' }) {
    return (
        <div className={clsx(styles.container, 'row ali-baseline', className, styles[direction])}>
            {disCount && <p className={clsx(styles.discount, disCountClass)}>{addCommasForThounsand(disCount)}</p>}
            <p className={clsx(styles.price, priceClass)}>{addCommasForThounsand(price)}</p>
        </div>
    );
}

Price.propTypes = {
    direction: propTypes.oneOf(['vertical', 'horizental']),
    disCount: propTypes.node,
    price: propTypes.node.isRequired,
    disCountClass: propTypes.string,
    priceClass: propTypes.string,
};

export default Price;
