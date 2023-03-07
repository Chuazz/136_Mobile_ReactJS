// Framework
import propTypes from 'prop-types';
import clsx from 'clsx';
import { memo } from 'react';

// Component
import Button from '../Button';

// Style
import styles from './ProductList.module.scss';

function ProductList({
    className,
    headerClass,
    title,
    titleClass,
    showAllMessage,
    showAllIcon,
    showAllLinkTo,
    children,
    ...props
}) {
    const classNames = clsx(styles.container, className);
    const icon = <div className={clsx(styles.icon, 'row ali-center')}>{showAllIcon}</div>;

    return (
        <div>
            <div className={clsx('row ali-center ma-b-24', headerClass)}>
                <div className="h-9">
                    <Button
                        tag="link"
                        linkTo={showAllLinkTo}
                        className={clsx(styles.title, 'opcity-1 w-fit-content')}
                        textClass={clsx(styles.title, titleClass)}
                    >
                        {title}
                    </Button>
                </div>

                {showAllMessage && (
                    <div className="flex-1 row ali-center jus-end">
                        <Button
                            tag="link"
                            linkTo={showAllLinkTo}
                            className={clsx(styles.showAll, 'opcity-1')}
                            textClass={clsx(styles.showAllMess)}
                            rightIcon={icon}
                        >
                            {showAllMessage}
                        </Button>
                    </div>
                )}
            </div>

            <div className={clsx(classNames, 'row')} {...props}>
                {children}
            </div>
        </div>
    );
}

ProductList.propTypes = {
    headerClass: propTypes.string,
    className: propTypes.string,
    title: propTypes.node,
    titleClass: propTypes.string,
    showAllMessage: propTypes.node,
    showAllIcon: propTypes.node,
    showAllLinkTo: propTypes.string,
    children: propTypes.node.isRequired,
};

export default memo(ProductList);
