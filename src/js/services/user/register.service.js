import axiosHelper from "../../helpers/axios";

const registerUserPath = "/customer/auth/register";

const registerUser = async (
    params,
    onSuccess = () => { },
    onError = () => { }
) => {
    try {
        const res = await axiosHelper.sendPost(registerUserPath, params);
        if (res?.code === 200) {
            onSuccess(res?.data);
        }
    } catch (error) {
        console.log(error);
    }
}

const userRegister = {
    registerUser,
};

export default userRegister;
