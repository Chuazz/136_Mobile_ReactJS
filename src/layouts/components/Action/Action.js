// Framework
import clsx from 'clsx';
import { memo } from 'react';

// Component
import Account from './components/Account';
import Cart from './components/Cart';
import Notification from './components/Notification';

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
