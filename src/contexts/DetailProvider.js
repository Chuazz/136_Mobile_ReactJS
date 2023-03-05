// Framework
import { products } from '@/data';
import { useParams, useSearchParams } from 'react-router-dom';
import { createContext, useState } from 'react';

const DetailContext = createContext();

function DetailProvider({ children }) {
    const [values] = useSearchParams();
    const name = useParams().name;

    const product = products.find((product) => product.id === name);
    const getImgs = (color) => {
        return product.sharedImgs.find((imgPath) => imgPath.colorValue === color.value).imgPaths;
    };
    const getPromtion = ({ promotion }) => {
        let result = {
            time: promotion.time,
            packages: [],
        };

        promotion.packages.forEach((id) => {
            let promotion = product.packages.find((t) => t.id === id);
            if (promotion) {
                result.packages.push(promotion);
            }
        });

        return result;
    };
    const getComments = (productId, capacity, color) => {
        const comments = product.comments.find(
            (comment) =>
                comment.productId === productId &&
                comment.capacityValue === capacity.value &&
                comment.colorValue === color.value,
        );

        return comments || { conversations: [] };
    };

    const [currCapacity, setCurrCapacity] = useState(
        product.capacities.find((capacity) => capacity.value === values.get('v')),
    );
    const [currColor, setCurrColor] = useState(
        currCapacity.colors.find((color) => color.value === `#${values.get('c')}`),
    );
    const productImgs = getImgs(currColor);
    const sharedImgs = product.sharedImgs[product.sharedImgs.length - 1].imgPaths;
    const [currImgPaths, setCurrImgPaths] = useState([...productImgs, ...sharedImgs]);
    const [currPromotion, setCurrPromotion] = useState(getPromtion(currCapacity));
    const [currPackages, setCurrPackages] = useState(currPromotion.packages);
    const [currPackage, setCurrPackage] = useState();
    const [currComments, setCurrComments] = useState(getComments(product.id, currCapacity, currColor));

    const value = {
        product,
        currCapacity,
        currColor,
        currImgPaths,
        currPromotion,
        currPackages,
        currComments,
        getComments,
        setCurrPackages(packages) {
            setCurrPackages(packages);
        },
        currPackage,
        setCurrCapacity(capacity) {
            setCurrCapacity(capacity);
        },
        setCurrColor(color) {
            setCurrColor(color);
        },
        setCurrImgPaths(color) {
            setCurrImgPaths([...getImgs(color), ...sharedImgs]);
        },
        setCurrPromotion(capacity) {
            setCurrPromotion(getPromtion(capacity));
        },
        setCurrPackage(item) {
            setCurrPackage(item);
        },
        setCurrComments(comments) {
            setCurrComments(comments);
        },
    };

    return <DetailContext.Provider value={value}>{children}</DetailContext.Provider>;
}

export default DetailProvider;
export { DetailContext };
