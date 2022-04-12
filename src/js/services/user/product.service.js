import axiosHelper from "../../helpers/axios";

const getNewestProduct = async (
    params,
    onSuccess = () => { },
    onError = () => { }
) => {
    try {
        const listNewestProductPath = `/customer/product/newest`;
        const res = await axiosHelper.sendGet(listNewestProductPath, params);
        if (res?.code === 200) {
            onSuccess(res?.data);
        }
    } catch (error) {
        console.log(error);
    }
}

const getListProducts = async (
    params,
    onSuccess = () => { },
    onError = () => { }
) => {
    try {
        const listAllProductPath = `/customer/product/all`;
        const res = await axiosHelper.sendGet(listAllProductPath, params);
        if (res?.code === 200) {
            onSuccess(res?.data);
        }
    } catch (error) {
        console.log(error);
    }
}

const getProductById = async (
    params,
    onSuccess = () => { },
    onError = () => { }
) => {
    try {
        const productByIdPath = `customer/product/${params}`;
        const res = await axiosHelper.sendGet(productByIdPath, params);
        if (res?.code === 200) {
            onSuccess(res?.data);
        }
    } catch (error) {
        console.log(error);
    }
}

const productService = {
    getNewestProduct,
    getListProducts,
    getProductById,
};

export default productService;
