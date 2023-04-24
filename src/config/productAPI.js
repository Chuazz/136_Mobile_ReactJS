const PRODUCT_API = process.env.REACT_APP_PRODUCT_API;

const productAPI = {
    list: (productType = 'sanpham') => `${PRODUCT_API}/${productType}`,
};

export default productAPI;
