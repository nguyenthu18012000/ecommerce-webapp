import axiosHelper from "../../helpers/axios";

const getAll = async (
    params,
    onSucces = () => { },
    onError = () => { }
) => {
    try {
        const GET_ALL_TAG_PATH = `/admin/category/all`
        const res = await axiosHelper.sendGet(GET_ALL_TAG_PATH);
        if (res?.code === 200) {
            onSucces(res?.data);
        }
    } catch (error) {
        console.log(error);
    }
};

const searchCategory = async (
    params,
    onSucces = () => { },
    onError = () => { }
) => {
    try {
        const SEARCH_TAG_PATH = `/admin/category/search`
        const res = await axiosHelper.sendPost(SEARCH_TAG_PATH, params);
        if (res?.code === 200) {
            onSucces(res?.data);
        }
    } catch (error) {
        console.log(error);
    }
};

const addTag = async (
    params,
    onSucces = () => { },
    onError = () => { }
) => {
    try {
        const GET_ALL_PRODUCT_PATH = `/admin/category/add`
        const res = await axiosHelper.sendPost(GET_ALL_PRODUCT_PATH, params, null, true);
        if (res?.code === 200) {
            onSucces(res?.data);
        }
    } catch (error) {
        console.log(error);
    }
};

const deleteTag = async (
    params,
    onSucces = () => { },
    onError = () => { }
) => {
    try {
        const DELETE_CATEGORY_PATH = `/admin/category/${params.id}`
        const res = await axiosHelper.sendDelete(DELETE_CATEGORY_PATH, null, true);
        if (res?.code === 200) {
            onSucces(res?.data);
        }
    } catch (error) {
        console.log(error);
    }
};


const tagService = {
    getAll,
    addTag,
    searchCategory,
    deleteTag
}

export default tagService;