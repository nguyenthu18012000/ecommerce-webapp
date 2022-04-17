import axiosHelper from "../../helpers/axios";

const getAllCommentByIdProduct = async (
    params,
    onSuccess = () => { },
    onError = () => { }
) => {
    try {
        const getAllCommentByIdProductPath = `/customer/comment/${params}`;
        const res = await axiosHelper.sendGet(getAllCommentByIdProductPath);
        if (res) {
            onSuccess(res);
        }
    } catch (error) {
        console.log(error);
    }
}

const commentService = {
    getAllCommentByIdProduct,
};

export default commentService;
