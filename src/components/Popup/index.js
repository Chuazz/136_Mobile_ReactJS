// Framework
import propTypes from 'prop-types';
import clsx from 'clsx';
import { forwardRef, memo } from 'react';
import { animated, useSpring } from '@react-spring/web';
import Tippy from '@tippyjs/react/headless';

// Style
import styles from './Popup.module.scss';

const Popup = forwardRef(({ className, tippyRender, renderClass, children, tippyProp = {}, ...props }, ref) => {
    const animateConfig = { duration: 100 };
    const [animate, setAnimate] = useSpring(() => ({
        opacity: 0,
        transform: 'translateY(-20px)',
    }));

    const onMount = () => {
        setAnimate.start({
            opacity: 1,
            transform: 'translateY(0)',
            config: animateConfig,
        });
    };

    const onHide = () => {
        setAnimate.start({
            opacity: 0,
            transform: 'translateY(-20px)',
            config: animateConfig,
        });
    };

    if (tippyProp.visible) {
        delete tippyProp.trigger;
    } else if (tippyProp.trigger) {
        delete tippyProp.visible;
    }

    const tippyNewProp = {
        onMount: onMount,
        onHidden: onHide,
        placement: 'bottom-end',
        interactive: true,
        ...tippyProp,
    };

    return (
        <span>
            <Tippy
                {...tippyNewProp}
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <animated.div style={animate} className={clsx(styles.container, renderClass)}>
                            {tippyRender}
                        </animated.div>
                    </div>
                )}
            >
                <div className={className} {...props} ref={ref}>
                    {children}
                </div>
            </Tippy>
        </span>
    );
});

Popup.propTypes = {
    className: propTypes.string,
    tippyRender: propTypes.node,
    renderClass: propTypes.string,
    children: propTypes.node.isRequired,
    tippyProp: propTypes.object,
};

Popup.displayName = 'Popup';

export default memo(Popup);
