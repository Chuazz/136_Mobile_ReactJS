// Component
import ProductImage from './components/ProductImage';
import ProductInfo from './components/ProductInfo';
import { DetailProvider } from './contexts';

const Detail = () => {
    return (
        <DetailProvider>
            <div className="row" id="detail" style={{ padding: '0 40px' }}>
                <div className="h-5">
                    <ProductImage />
                </div>

                <div className="h-7">
                    <ProductInfo />
                </div>
            </div>
        </DetailProvider>
    );
};

export default Detail;
