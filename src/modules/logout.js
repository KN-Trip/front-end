import { produce } from 'immer';
import * as api from '../lib/api';

const LOGOUT = 'login/LOGOUT';
const LOGOUT_SUCCESS = 'login/LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'lgoin/LOGOUT_FAILURE';

export const getLogoutRequest = () => async (dispatch) => {
  dispatch({ type: LOGOUT }); // 요청이 시작됨
  try {
    const res = await api.logout(); // API 호출

    if (res.data.message === 'logout') {
      dispatch({ type: LOGOUT_SUCCESS }); // 성공
    } else {
      dispatch({ type: LOGOUT_FAILURE, res_error: 'error' });
    }
  } catch (e) {
    dispatch({ type: LOGOUT_FAILURE, res_error: e }); // 실패
  }
};

const initialState = {
  logout_loading: false,
  logout: false,
  logout_error: null,
};

export default function logout(state = initialState, action) {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        logout_loading: true,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        logout_loading: false,
        logout: true,
      };

    case LOGOUT_FAILURE:
      return {
        ...state,
        logout_loading: false,
        logout_error: action.res_error,
      };
    default:
      return state;
  }
}
