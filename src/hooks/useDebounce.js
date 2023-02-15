import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debouceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => clearTimeout(timeOutId);
    }, [value]);

    return debouceValue;
}

export default useDebounce;
