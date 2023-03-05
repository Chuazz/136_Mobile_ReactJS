// Framework
import clsx from 'clsx';
import { memo } from 'react';

// Style
import styles from './Name.module.scss';

const Name = ({ className, name, lineDisplay = 1 }) => {
    return (
        <p
            className={clsx(styles.name, className)}
            style={{ maxHeight: `calc(16px * 1.6 * ${lineDisplay})` }}
        >
            {name}
        </p>
    );
};

export default memo(Name);
