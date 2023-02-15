// Framework
import { FaUser } from 'react-icons/fa';
import clsx from 'clsx';

// Component
import Button from '@/components/Button';
import Popup from '@/components/Popup';

// Style
import styles from './Account.module.scss';

function Account() {
    const tippyProp = {
        trigger: 'click',
    };
    const tippyRender = <div className={clsx(styles.container)}>Tài khoản</div>;

    return (
        <Popup tippyProp={tippyProp} tippyRender={tippyRender}>
            <Button leftIcon={<FaUser />} className={clsx(styles.icon)} />
        </Popup>
    );
}

export default Account;
