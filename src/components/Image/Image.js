// Framework
import propTypes from 'prop-types';
import { forwardRef, memo, useState } from 'react';

const Image = forwardRef(({ src, className, alt = 'error', onClick, ...props }, ref) => {
    const [errSrc, setErrSrc] = useState('');

    return (
        <img
            className={className}
            src={errSrc || src}
            alt={alt}
            ref={ref}
            onError={() => setErrSrc('https://placehold.co/400')}
            onClick={onclick}
            {...props}
        />
    );
});

Image.propTypes = {
    src: propTypes.string.isRequired,
    className: propTypes.string,
    alt: propTypes.string,
    onClick: propTypes.func,
};

export default memo(Image);
