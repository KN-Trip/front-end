import axios from "axios";
import { baseURL } from "../config/setting.js";

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
