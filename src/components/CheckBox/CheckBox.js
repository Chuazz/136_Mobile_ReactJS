// Framwork
import clsx from 'clsx';
import propTypes from 'prop-types';
import { BsCheckLg } from 'react-icons/bs';
import { useEffect, useState } from 'react';

// Style
import styles from './CheckBox.module.scss';

function CheckBox({ className, isCheck = false, onCheck = () => {} }) {
    const [active, setActive] = useState(isCheck);

    const onClick = () => {
        setActive(!active);

        onCheck();
    };

    return (
        <div
            className={clsx(styles.container, className, 'row ali-center jus-center', {
                [styles.active]: active,
            })}
            onClick={() => onClick()}
        >
            {active && <BsCheckLg className={clsx(styles.icon)} />}
        </div>
    );
}

CheckBox.propTypes = {
    className: propTypes.string,
    isCheck: propTypes.bool,
    onCheck: propTypes.func,
};

export default CheckBox;
