import axiosHelper from "../../helpers/axios";

const getAll = async (
    params,
    onSucces = () => { },
    onError = () => { }
) => {
    try {
        const GET_ALL_PRODUCT_PATH = `/admin/product/all/${params?.page || 0}`
        const data = {
            perPage: params?.perPage
        }
        const res = await axiosHelper.sendGet(GET_ALL_PRODUCT_PATH);
        if (res?.code === 200) {
            onSucces(res?.data);
        }
    } catch (error) {
        console.log(error);
    }
};

const addProduct = async (
    params,
    onSucces = () => { },
    onError = () => { }
) => {
    try {
        const ADD_PRODUCT_PATH = `/admin/product/add`
        const res = await axiosHelper.sendPost(ADD_PRODUCT_PATH, params);
        if (res?.code === 200) {
            onSucces(res?.data);
        }
    } catch (error) {
        console.log(error);
    }
};

export default {
    getAll,
    addProduct
}