// Framework
import clsx from 'clsx';
import { memo } from 'react';

// Component
import Button from '@/components/Button';

// Style
import styles from './Navigation.module.scss';

// Data
import { navigations } from '@/data';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <div className={clsx(styles.container, 'row flex-column  h-100')}>
            {navigations.map((navigation) => {
                return (
                    <div key={navigation.id}>
                        <NavLink
                            className={(nav) => clsx(styles.link, { [styles.active]: nav.isActive })}
                            to={navigation.linkTo}
                        >
                            <Button
                                textClass={clsx(styles.title)}
                                className={clsx(styles.item, 'w-100')}
                                leftIcon={navigation.icon}
                                linkTo={navigation.linkTo}
                            >
                                {navigation.name}
                            </Button>
                        </NavLink>
                    </div>
                );
            })}
        </div>
    );
}

export default memo(Navigation);
