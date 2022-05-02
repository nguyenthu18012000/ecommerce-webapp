import axiosHelper from "../../helpers/axios";

const authorizeUser = async (
    params,
    onSuccess = () => { },
    onError = () => { }
) => {
    try {
        const authorizeUserPath = `/customer/auth/authenticate`;
        const res = await axiosHelper.sendPost(authorizeUserPath, params);
        if (res?.code === 200 || 400) {
            onSuccess(res);
        }
    } catch (error) {
        console.log(error);
    }
}

const verifiedMail = async (
    params,
    onSuccess = () => { },
    onError = () => { }
) => {
    try {
        const verifiedMailPath = `/customer/auth/verifiedMail/${params}`;
        const res = await axiosHelper.sendGet(verifiedMailPath);
        if (res) {
            onSuccess(res);
        }
    } catch (error) {
        console.log(error);
    }
}

const userAuth = {
    authorizeUser,
    verifiedMail,
};

export default userAuth;
