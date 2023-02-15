// Framework
import { PageContext } from '@/contexts/pageProvider';
import clsx from 'clsx';
import { memo, useContext } from 'react';

// Component
import Button from '../Button';

// Style
import styles from './ProductList.module.scss';

function ProductList({ className, title, titleClass, showAllMessage, showAllIcon, showAllLinkTo, children, ...props }) {
    const classNames = clsx(styles.container, className);
    const icon = <div className={clsx(styles.icon, 'row ali-center')}>{showAllIcon}</div>;

    const context = useContext(PageContext);

    const titleClick = () => {
        context.onClick(showAllLinkTo);
    };

    return (
        <div>
            <div className="row ali-center ma-b-24">
                <div className="h-9">
                    <Button
                        tag="link"
                        linkTo={showAllLinkTo}
                        onClick={titleClick}
                        className={clsx(styles.title, 'opcity-1 w-fit-content')}
                        textClass={clsx(styles.title, titleClass)}
                    >
                        {title}
                    </Button>
                </div>

                <div className="flex-1 row ali-center jus-end">
                    <Button
                        tag="link"
                        linkTo={showAllLinkTo}
                        className={clsx(styles.showAll, 'opcity-1')}
                        textClass={clsx(styles.showAllMess)}
                        rightIcon={icon}
                        onClick={titleClick}
                    >
                        {showAllMessage}
                    </Button>
                </div>
            </div>

            <div className={clsx(classNames, 'row')} {...props}>
                {children}
            </div>
        </div>
    );
}

export default memo(ProductList);
