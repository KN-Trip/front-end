import axios from 'axios';
import { baseURL } from '../config/setting.js';

export const checkExistID = (id) => {
  return axios.get(`${baseURL}/chk-exist-id`, {
    params: {
      chkId: id,
    },
  });
};

export const signUp = (nickname, id, password) => {
  return axios({
    method: 'post',
    url: `${baseURL}/sign-up`,
    data: {
      nickname,
      id,
      password,
    },
  });
};

export const login = (id, password) => {
  return axios.post(
    `${baseURL}/login`,
    { id, password },
    { withCredentials: true }
  );
};

export const logout = () => {
  return axios.get(`${baseURL}/logout`);
};

export const getCandidateID = (id) => {
  return axios.get(`${baseURL}/get-candidate-id`, {
    params: {
      targetId: id,
    },
    withCredentials: true,
  });
};

export const postCouple = (targetId, connectionOption) => {
  return axios.post(
    `${baseURL}/my-info/post-event`,
    {
      targetId,
      connectionOption,
    },
    { withCredentials: true }
  );
};

export const getTest = () => {
  return axios.get(`${baseURL}/test/get-test`, {
    withCredentials: true,
  });
};

export const postTest = (test) => {
  return axios.post(
    `${baseURL}/test/post-test`,
    { test },
    {
      withCredentials: true,
    }
  );
};

export const getBasketPlace = () => {
  return axios.get(`${baseURL}/my-info/basket`, { withCredentials: true });
};

export const getSearchPlace = () => {
  return axios.get(`${baseURL}/my-info/search`, { withCredentials: true });
};

export const putChangeInfo = (updateObject) => {
  return axios.put(
    `${baseURL}/my-info/change-info`,
    {
      updateObject,
    },
    { withCredentials: true }
  );
};

//GET EVENT
//PROCESS COUPLE

//ALL ABOUT TRIP

export const getTripInfo = (order = 0) => {
  return axios.get(`${baseURL}/trip-info`, {
    params: {
      order,
    },
    withCredentials: true,
  });
};

export const getTripInfoDetail = (contentId, contentTypeId) => {
  return axios.get(`${baseURL}/trip-info/detail`, {
    params: { contentId, contentTypeId },
    withCredentials: true,
  });
};

export const getRecommendedPlaces = (locationX, locationY, nowContentId) => {
  return axios.get(`${baseURL}/trip-info/location`, {
    params: {
      locationX,
      locationY,
      nowContentId,
    },
    withCredentials: true,
  });
};

export const postBasket = (contentID) => {
  return axios.post(
    `${baseURL}/trip-info/post-basket`,
    { contentID },
    { withCredentials: true }
  );
};

export const getStayPlace = (areaCode, nowContentId) => {
  return axios.get(`${baseURL}/trip-info/stay`, {
    params: {
      areaCode,
      nowContentId,
    },
    withCredentials: true,
  });
};

export const getHotPlace = (areaCode, nowContentId) => {
  return axios.get(`${baseURL}/trip-info/area`, {
    params: {
      areaCode,
      nowContentId,
    },
    withCredentials: true,
  });
};
