import axiosHelper from "../../helpers/axios";

const authorizeAdminPath = "/admin/authenticate"

const authorizeAdmin = async (
  params,
  onSucces = () => {},
  onError = () => {}
) => {
  try {
    const res = await axiosHelper.sendGet(authorizeAdminPath, params);
    if (res?.code === 200) {
      onSucces(res?.data);
    }
  } catch (error) {
    console.log(error);
  }
};

const adminAuth = {
  authorizeAdmin,
};

export default adminAuth;
