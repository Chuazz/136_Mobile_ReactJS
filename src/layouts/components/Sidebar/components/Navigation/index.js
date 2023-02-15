// Framework
import clsx from 'clsx';
import { memo, useContext } from 'react';
import { PageContext } from '@/contexts/pageProvider';

// Style
import styles from './Navigation.module.scss';

// Component
import Button from '@/components/Button';

// Data
import { navigations } from '@/data';

function Navigation() {
    const context = useContext(PageContext);
    const active = context.active;

    return (
        <div className={clsx(styles.container, 'row flex-column  h-100')}>
            {navigations.map((navigation) => {
                let isActive = active === navigation.id ? true : false;

                return (
                    <div key={navigation.id}>
                        <Button
                            tag="link"
                            textClass={clsx(styles.title)}
                            className={clsx(styles.item)}
                            leftIcon={navigation.icon}
                            linkTo={navigation.path}
                            active={isActive}
                            onClick={() => context.onClick(navigation.id)}
                        >
                            {navigation.name}
                        </Button>
                    </div>
                );
            })}
        </div>
    );
}

export default memo(Navigation);
