// Framework
import clsx from 'clsx';
import { memo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Component
import Popup from '@/components/Popup';

// Style
import styles from './Name.module.scss';

const Name = ({ className, name, linkTo }) => {
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
                className={clsx(styles.name, className)}
                onMouseOver={onHover}
                onMouseOut={() => setVisible(false)}
                ref={linkRef}
            >
                <p>{name}</p>
            </Link>
        </Popup>
    );
};

export default memo(Name);
