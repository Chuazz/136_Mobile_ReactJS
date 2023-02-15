// Framework
import { memo } from 'react';
import { BsFillBagFill } from 'react-icons/bs';
import clsx from 'clsx';

// Component
import Popup from '@/components/Popup';
import Button from '@/components/Button';
import Box from '@/components/Box';

// Style
import styles from './Cart.module.scss';
import CartItem from './CartItem';
import { carts } from '@/data';
import { useRef } from 'react';

function Cart() {
    const tippyRender = (
        <Box
            title="Giỏ hàng của tôi"
            titleClass={clsx(styles.title)}
            showMore="Xem tất cả"
            showMoreClass={clsx(styles.showMore)}
            showMoreLink="test"
            headerClass={clsx(styles.header)}
            className={clsx(styles.items)}
        >
            {carts.map((cart) => (
                <CartItem data={cart} key={cart.title} />
            ))}
        </Box>
    );
    const tippyProp = {
        trigger: 'click',
    };
    return (
        <Popup tippyProp={tippyProp} tippyRender={tippyRender} renderClass={clsx(styles.container)}>
            <Button leftIcon={<BsFillBagFill />} />
        </Popup>
    );
}

export default memo(Cart);
