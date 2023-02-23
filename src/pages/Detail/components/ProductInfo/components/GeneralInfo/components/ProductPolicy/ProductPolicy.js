// Framework
import clsx from 'clsx';

// Component
import Button from '@/components/Button';

// Style
import styles from './ProductPolicy.module.scss';

// Data
import { productPolicys } from '@/data';

function ProductPolicy() {
    return (
        <div className={clsx(styles.container)}>
            {productPolicys.map((productPolicy) => (
                <Button
                    leftIcon={productPolicy.icon}
                    leftIconClass={clsx(styles.icon)}
                    className={styles.item}
                    key={productPolicy.id}
                    textClass={clsx(styles.itemContent)}
                >
                    {productPolicy.value}
                </Button>
            ))}
        </div>
    );
}

export default ProductPolicy;
