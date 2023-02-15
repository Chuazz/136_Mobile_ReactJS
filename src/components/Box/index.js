// Framework
import propTypes from 'prop-types';
import clsx from 'clsx';
import { memo } from 'react';

// Style
import styles from './Box.module.scss';

// Component
import Button from '../Button';
import { useRef } from 'react';
import { forwardRef } from 'react';

const Box = forwardRef(
    (
        {
            className,
            title,
            showMore,
            showMoreLink,
            isDevided = false,
            titleClass,
            headerClass,
            showMoreClass,
            children,
        },
        ref,
    ) => {
        const boxRef = useRef();

        const classNames = clsx(styles.container, className, {
            [styles.devided]: isDevided,
        });

        let tag = showMoreLink ? 'link' : 'button';

        return (
            <div className={classNames} ref={boxRef}>
                <div className={clsx(styles.header, headerClass, 'row ali-center jus-between')}>
                    <p className={clsx(styles.title, titleClass)}>{title}</p>
                    <Button tag={tag} linkTo={showMoreLink} className={clsx(styles.showMore, showMoreClass)}>
                        {showMore}
                    </Button>
                </div>

                {children}
            </div>
        );
    },
);

Box.propTypes = {
    className: propTypes.string,
    title: propTypes.node,
    showMore: propTypes.node,
    showMoreLink: propTypes.string,
    isDevided: propTypes.bool,
    titleClass: propTypes.string,
    headerClass: propTypes.string,
    showMoreClass: propTypes.string,
    children: propTypes.node.isRequired,
};

Box.displayName = 'Box';

export default memo(Box);
