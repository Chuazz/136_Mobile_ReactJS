// Framework
import clsx from 'clsx';
import { memo } from 'react';

// Style
import styles from './Header.module.scss';

// Component
import Action from '../Action';
import Logo from '../../../components/Logo';
import Search from '../Search';

function Header() {
    return (
        <div className={clsx(styles.container)}>
            <div className={clsx('row ali-center jus-betwwen wide h-100')}>
                <div className="h-4">
                    <Logo />
                </div>

                <div className="h-4">
                    <Search />
                </div>

                <div className="h-4">
                    <Action />
                </div>
            </div>
        </div>
    );
}

export default memo(Header);
