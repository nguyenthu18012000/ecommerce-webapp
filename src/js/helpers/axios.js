import axios from "axios";

const basePath = "localhost:4000/api";

const sendPost = (path, params) => {
  axios({
    method: "post",
    url: basePath + path,
    data: params,
  });
};

const sendGet = (path, params) => {
  axios({
    method: "get",
    url: basePath + path,
    data: params,
  });
};

const sendDelete = (path, params) => {
  axios({
    method: "delete",
    url: basePath + path,
    data: params,
  });
};

const axiosHelper = {
  sendPost,
  sendGet,
  sendDelete,
};

export default axiosHelper;
