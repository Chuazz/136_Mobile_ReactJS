import Button from '@/components/Button';
import { productPolicys } from '@/data';
import clsx from 'clsx';

import styles from './ProductPolicy.module.scss';

function ProductPolicy() {
    return (
        <div className={clsx(styles.container)}>
            {productPolicys.map((productPolicy) => (
                <Button leftIcon={productPolicy.icon} leftIconClass={clsx(styles.icon)} className={styles.item} key={productPolicy.id} textClass={clsx(styles.itemContent)}>
                    {productPolicy.value}
                </Button>
            ))}
        </div>
    );
}

export default ProductPolicy;
