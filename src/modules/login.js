import { produce } from 'immer';
import * as api from '../lib/api';

const CHANGE_INPUT = 'login/CHANGE_INPUT';

const LOGIN = 'login/LOGIN';
const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'login/LOGIN_FAILURE';
const CLEAR_LOGIN = 'login/CLEAR_LOGIN';

export const changeInput = (name, value) => ({
  type: CHANGE_INPUT,
  name,
  value,
});

export const postLoginRequest = (id, password) => async (dispatch) => {
  dispatch({ type: LOGIN }); // 요청이 시작됨
  try {
    const res = await api.login(id, password); // API 호출

    if (res.data.message === 'fail') {
      alert('아이디와 비밀번호가 일치하지 않습니다.');
      dispatch({ type: LOGIN_FAILURE, res_error: 'fail' });
    } else {
      dispatch({ type: LOGIN_SUCCESS, nickname: res.data.nickname }); // 성공
    }
  } catch (e) {
    dispatch({ type: LOGIN_FAILURE, res_error: e }); // 실패
  }
};

export const clearLogin = () => ({
  type: CLEAR_LOGIN,
});

const initialState = {
  id: '',
  password: '',
  login_loading: false,
  login: false,
  login_error: null,
  nickname: '',
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };

    case LOGIN:
      return {
        ...state,
        login_loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        login_loading: false,
        login: true,
        nickname: action.nickname,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        login_loading: false,
        login_error: action.res_error,
      };
    case CLEAR_LOGIN:
      return {
        ...state,
        id: '',
        password: '',
        login_loading: false,
        login: false,
        login_error: null,
        nickname: '',
      };
    default:
      return state;
  }
}
