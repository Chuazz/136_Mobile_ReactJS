// Framework
import { DetailContext } from '@/contexts';
import clsx from 'clsx';
import { useContext } from 'react';

// Style
import styles from './Parameter.module.scss';
import ParameterItem from './ParameterItem';

function Parameter() {
    const context = useContext(DetailContext);
    const { product } = context;

    return (
        <div className={clsx(styles.container)}>
            {product.parameters.map((parameter) => (
                <ParameterItem data={parameter} key={parameter.id} />
            ))}
        </div>
    );
}

export default Parameter;
