// Framework
import clsx from 'clsx';
import { memo } from 'react';

// Component
import Cart from './Cart';
import Notification from './Notification';
import Account from './Account';

function Action() {
    return (
        <div className={clsx('row ali-center jus-end')}>
            <Notification />
            <Cart />
            <Account />
        </div>
    );
}

export default memo(Action);
