// Framework
import { forwardRef, memo, useState } from 'react';

function Image({ src, className, alt = 'error', onClick, ...props }, ref) {
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
}

export default memo(forwardRef(Image));
