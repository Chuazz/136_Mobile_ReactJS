import Popup from '@/components/Popup';
import clsx from 'clsx';
import { memo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Name.module.scss';

function Name({ className, name, linkTo }) {
    const [visible, setVisible] = useState(false);

    const linkRef = useRef();

    const tippyRender = <p>{name}</p>;
    const tippyProp = {
        placement: 'top-start',
        visible: visible,
    };

    const onHover = (e) => {
        if (e.target.clientHeight > linkRef.current.clientHeight) {
            setVisible(true);
        }
    };

    return (
        <Popup tippyRender={tippyRender} tippyProp={tippyProp} renderClass={clsx(styles.content)}>
            <Link
                to={linkTo}
                className={clsx(styles.name)}
                onMouseOver={onHover}
                onMouseOut={() => setVisible(false)}
                ref={linkRef}
            >
                <p>{name}</p>
            </Link>
        </Popup>
    );
}

export default memo(Name);
