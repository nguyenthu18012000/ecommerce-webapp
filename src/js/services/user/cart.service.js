import axiosHelper from "../../helpers/axios";

const addProductToCart = async (
    params,
    onSuccess = () => { },
    onError = () => { }
) => {
    try {
        const addProductToCartPath = `/customer/cart`;
        const res = await axiosHelper.sendPost(addProductToCartPath, params);
        if (res?.code === 200) {
            onSuccess(res?.data);
        }
    } catch (error) {
        console.log(error);
    }
}

const cartService = {
    addProductToCart,
};

export default cartService;
