// Component
import { DetailProvider } from '@/contexts';
import AccessoryInclude from './components/AccessoryInclude';
import ProductImage from './components/ProductImage';
import ProductInfo from './components/ProductInfo';

const Detail = () => {
    return (
        <DetailProvider>
            <div style={{ padding: '0 40px' }}>
                <div className="row" id="detail">
                    <div className="h-5">
                        <ProductImage />
                    </div>

                    <div className="h-7">
                        <ProductInfo />
                    </div>
                </div>

                <div>
                    <AccessoryInclude />
                </div>
            </div>
        </DetailProvider>
    );
};

export default Detail;
