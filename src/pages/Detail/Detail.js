// Framework
import { products } from '@/data';
import { useCallback } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';

// Component
import ProductImage from './ProductImage';

const Detail = () => {
    const [values] = useSearchParams();
    const name = useParams().name;

    const product = products.find((product) => product.id === name);
    const capacity = product.capacities.find((capacity) => capacity.value === values.get('v'));
    const color = capacity.colors.find((color) => color.value === `#${values.get('c')}`);
    const productImgs = product.sharedImgs.find((imgPath) => imgPath.colorValue === color.value).imgPaths;
    const imgPaths = [...productImgs, ...product.sharedImgs[product.sharedImgs.length - 1].imgPaths];

    return (
        <div className="row" id="detail">
            <div className="h-5">
                <ProductImage images={imgPaths} />
            </div>

            <div className="h-7"></div>
        </div>
    );
};

export default Detail;
