import axiosHelper from "../../helpers/axios";

const listAllProductPath = "/customer/product/all";

const getListProducts = async (
    params,
    onSuccess = () => { },
    onError = () => { }
) => {
    try {
        const res = await axiosHelper.sendGet(listAllProductPath, params);
        if (res?.code === 200) {
            onSuccess(res?.data);
        }
    } catch (error) {
        console.log(error);
    }
}

const productService = {
    getListProducts,
};

export default productService;
