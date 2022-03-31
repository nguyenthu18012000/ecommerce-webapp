import axios from "axios";
import envApp from "./envApp";
// import { history } from "../Root";
import storageFC from "./storage";

const axiosInstance = axios.create({
  baseURL: envApp.API,
  timeout: 30000,
  // headers: {
  //   "X-Requested-With": "XMLHttpRequest",
  // },
});

const logout = () => {
  storageFC.clearToken();
  // history.push("/");
};

axiosInstance.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line no-param-reassign
    const { pathname } = window?.location;
    if (pathname?.includes("/amdin")) {
      config.headers.Authorization = `Bearer ${storageFC.getAdminToken()}`;
    } else {
      config.headers.Authorization = `Bearer ${storageFC.getToken()}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // if (error.response.status !== 404) {
    //   history.push("/not-found");
    // }
    if (error?.response?.status === 401) {
      // logout();
    }
    if (error?.response?.status === 103) {
      // history.push("/logout");
    }
    return error.response;
  }
);

export const sendGet = (url = "", params) => axiosInstance.get(url, { params }).then((res) => res.data);
export const sendPost = (url = "", params, queryParams) => axiosInstance
  .post(url, params, { params: queryParams, timeout: queryParams?.timeout })
  .then((res) => res.data);
export const sendPut = (url = "", params) => axiosInstance.put(url, params).then((res) => res.data);
export const sendPatch = (url = "", params) => axiosInstance.patch(url, params).then((res) => res.data);
export const sendDelete = (url = "", params) => axiosInstance.delete(url, { data: params }).then((res) => res.data);
export const sendCustom = (params = {}) => axiosInstance(params).then((res) => res.data);

export default {
  sendGet,
  sendPost,
  sendPut,
  sendPatch,
  sendDelete,
  sendCustom
}