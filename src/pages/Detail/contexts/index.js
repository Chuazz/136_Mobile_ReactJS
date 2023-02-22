// Framework
import { products } from '@/data';
import { useParams, useSearchParams } from 'react-router-dom';
import { createContext, useState } from 'react';

const DetailContext = createContext();

function DetailProvider({ children }) {
    const [values] = useSearchParams();
    const name = useParams().name;

    const product = products.find((product) => product.id === name);
    const [currCapacity, setCurrCapacity] = useState(
        product.capacities.find((capacity) => capacity.value === values.get('v')),
    );
    const [currColor, setCurrColor] = useState(
        currCapacity.colors.find((color) => color.value === `#${values.get('c')}`),
    );
    const getImgs = (color) => {
        return product.sharedImgs.find((imgPath) => imgPath.colorValue === color.value).imgPaths;
    };
    const productImgs = getImgs(currColor);
    const sharedImgs = product.sharedImgs[product.sharedImgs.length - 1].imgPaths;
    const [currImgPaths, setcurrImgPaths] = useState([...productImgs, ...sharedImgs]);

    const value = {
        product,
        currCapacity,
        currColor,
        currImgPaths,
        getImgs(color) {
            return product.sharedImgs.find((imgPath) => imgPath.colorValue === color.value).imgPaths;
        },
        setCurrCapacity(capacity) {
            setCurrCapacity(capacity);
        },
        setCurrColor(color) {
            setCurrColor(color);
        },
        setcurrImgPaths(imgPaths) {
            setcurrImgPaths([...imgPaths, ...sharedImgs]);
        },
    };

    return <DetailContext.Provider value={value}>{children}</DetailContext.Provider>;
}

export default DetailProvider;
export { DetailContext };
