// Framework
import clsx from 'clsx';
import { memo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { animated, useSpring } from '@react-spring/web';

// Component
import Button from '@/components/Button';
import DropDown from '@/components/DropDown';
import Image from '@/components/Image';

// Style
import styles from './CartItem.module.scss';

function CartItem({ data }) {
    const cartItemRef = useRef();

    const [currColor, setCurrColor] = useState(data.colors[0]);

    const [trashAnimate, setTrashAnimate] = useSpring(() => ({
        transform: 'scale(1)',
    }));

    const tippyProp = {
        appendTo: () => cartItemRef.current.parentElement,
    };

    return (
        <div className={clsx('relative ma-r-12')} ref={cartItemRef}>
            <animated.div style={trashAnimate} className={clsx(styles.container, 'row ali-center')}>
                <Link to={data.linkTo}>
                    <Image src={currColor.imgPath} className={styles.img} />
                </Link>

                <div className="ma-l-12">
                    <Link to={data.linkTo}>
                        <p className={clsx(styles.title)}>{data.title}</p>
                    </Link>

                    <DropDown
                        tippyProp={tippyProp}
                        options={data.colors}
                        isColorAfter
                        onOptionClick={(selected) => setCurrColor(selected)}
                    />
                </div>
            </animated.div>

            <Button
                leftIcon={<FaTrash />}
                className={clsx(styles.remove)}
                onClick={() => {
                    setTrashAnimate.start({
                        transform: 'scale(0)',
                    });
                    setTimeout(() => {
                        cartItemRef.current.remove();
                    }, 300);
                }}
            />
        </div>
    );
}

export default memo(CartItem);
