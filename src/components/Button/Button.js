// Framework
import propTypes from 'prop-types';
import clsx from 'clsx';
import { forwardRef, memo } from 'react';
import { Link } from 'react-router-dom';

// Style
import styles from './Button.module.scss';

const Button = forwardRef(
    (
        {
            tag = 'button',
            className,
            textClass,
            leftIcon,
            leftIconClass,
            rightIcon,
            rightIconClass,
            linkTo,
            href,
            active = false,
            activeClass,
            shape = 'rectangle',
            children,
            onClick,
            slideCount,
            currentSlide,
            ...props
        },
        ref,
    ) => {
        let Tag = tag;
        let newProps = { ...props, to: linkTo, href: href };

        const classNames = clsx(styles.container, 'customeBtn row', className, {
            [styles.active]: active,
            [activeClass]: activeClass && active ? true : false,
            [styles.rectangle]: shape === 'rectangle',
            [styles.circle]: shape === 'circle',
        });

        if (Tag === 'a') {
            delete newProps.to;
        } else if (tag === 'link') {
            Tag = Link;
            delete newProps.href;
        } else if (tag === 'button') {
            delete newProps.href;
            delete newProps.to;
        }

        if (newProps.to === 'current') {
            newProps.to = window.location.pathname;
        }

        return (
            <Tag className={classNames} onClick={onClick} {...newProps} ref={ref}>
                {leftIcon && <div className={clsx(styles.leftIcon, leftIconClass)}>{leftIcon}</div>}

                {children && <div className={clsx(styles.text, textClass)}>{children}</div>}

                {rightIcon && <div className={clsx(styles.rightIcon, rightIconClass)}>{rightIcon}</div>}
            </Tag>
        );
    },
);

Button.propTypes = {
    tag: propTypes.oneOf(['a', 'link', 'button']),
    className: propTypes.string,
    textClass: propTypes.string,
    leftIconClass: propTypes.string,
    rightIconClass: propTypes.string,
    leftIcon: propTypes.node,
    rightIcon: propTypes.node,
    linkTo: propTypes.string,
    href: propTypes.string,
    active: propTypes.bool,
    activeClass: propTypes.string,
    shape: propTypes.oneOf(['rectangle', 'circle']),
    children: propTypes.node,
    onClick: propTypes.func,
};

Button.displayName = 'Button';

export default memo(Button);
