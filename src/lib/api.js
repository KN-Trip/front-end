import axios from "axios";
import { baseURL } from "../config/setting.js";

export const checkExistID = (id) => {
  return axios.get(`${baseURL}/chk-exist-id`, {
    params: {
      chkId: id,
    },
  });
};

export const signUp = (nickname, id, password) => {
  return axios({
    method: "post",
    url: `${baseURL}/sign-up`,
    data: {
      nickname,
      id,
      password,
    },
  });
};
