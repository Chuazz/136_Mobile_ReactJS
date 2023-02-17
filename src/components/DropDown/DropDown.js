// Framework
import propTypes from 'prop-types';
import clsx from 'clsx';
import { FaChevronDown } from 'react-icons/fa';
import { animated, useSpring } from '@react-spring/web';
import { memo, useEffect, useRef, useState } from 'react';

// Component
import Button from '../Button';

// Styles
import styles from './DropDown.module.scss';
import Popup from '../Popup';

const DropDown = ({
    className,
    options,
    titleClass,
    colorAfterClass,
    selectedValue,
    isColorAfter = false,
    tippyProp,
    onClick = () => {},
    onOptionClick = () => {},
    onChange = () => {},
}) => {
    const [currOptions, setcurrOptions] = useState(options);
    const [currOption, setcurrOption] = useState(selectedValue || options[0]);

    const [arrowAnimate, setArrowAnimate] = useSpring(() => ({
        transform: 'rotate(0deg)',
    }));

    const popupRef = useRef();

    const dropDownOnHide = () => {
        setArrowAnimate.start({
            transform: 'rotate(0deg)',
        });

        if (tippyProp && tippyProp.onHide) {
            tippyProp.onHide();
        }
    };

    const dropDownOnClick = () => {
        setArrowAnimate.start({
            transform: 'rotate(-180deg)',
        });
        onClick();
    };

    const optionOnClick = (option) => {
        setcurrOption(option);
        popupRef.current._tippy.hide();
        setArrowAnimate.start({
            transform: 'rotate(0deg)',
        });
        onOptionClick(option);
    };

    const onOptionsChange = () => {
        if (options !== currOptions) {
            if (options.filter((option) => option.value === currOption.value).length <= 0) {
                setcurrOption(options[0]);
                onChange(options, options[0]);
            }
            setcurrOptions(options);
        }
    };

    useEffect(() => {
        onOptionsChange();
    }, [options]);

    const tippyRender = options.map((option) => (
        <div key={option.value}>
            <Button
                className={clsx(styles.option, styles.dropdown)}
                active={option.value === currOption.value ? true : false}
                onClick={() => optionOnClick(option)}
                leftIcon={
                    isColorAfter ? (
                        <span
                            style={{ '--bg-color': option.value }}
                            className={clsx(styles.colorAfter, colorAfterClass)}
                        ></span>
                    ) : undefined
                }
            >
                <p>{option.label || option.value}</p>
            </Button>
        </div>
    ));

    const tippyNewProp = {
        duration: 0,
        trigger: 'click',
        interactive: true,
        placement: 'bottom-start',
        appendTo: () => document.body,
        ...tippyProp,
        onHide: dropDownOnHide,
    };

    return (
        <div className={clsx(styles.container, className)}>
            <Popup
                tippyRender={tippyRender}
                tippyProp={tippyNewProp}
                renderClass={clsx(styles.colors)}
                ref={popupRef}
                className={clsx(styles.tippyClass)}
            >
                <Button
                    className={clsx(styles.dropdown, titleClass)}
                    leftIcon={
                        isColorAfter ? (
                            <span
                                style={{ '--bg-color': currOption.value }}
                                className={clsx(styles.colorAfter, colorAfterClass)}
                            ></span>
                        ) : undefined
                    }
                    rightIcon={
                        <animated.div style={arrowAnimate} className="row ali-center jus-center">
                            <FaChevronDown />
                        </animated.div>
                    }
                    rightIconClass={clsx(styles.arrow)}
                    active
                    onClick={dropDownOnClick}
                >
                    <p className={clsx(styles.title)}>{currOption.label || currOption.value}</p>
                </Button>
            </Popup>
        </div>
    );
};

DropDown.propTypes = {
    className: propTypes.string,
    options: propTypes.array.isRequired,
    titleClass: propTypes.string,
    colorAfterClass: propTypes.string,
    selectedValue: propTypes.object,
    isColorAfter: propTypes.bool,
    tippyProp: propTypes.object,
    onClick: propTypes.func,
    onOptionClick: propTypes.func,
    onChange: propTypes.func,
};

export default memo(DropDown);
