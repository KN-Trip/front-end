import * as api from '../lib/api';

const CHANGE_INPUT = 'mypage/CHANGE_INPUT';

const BASKET = 'mypage/BASKET';
const BASKET_SUCCESS = 'mypage/BASKET_SUCCESS';
const BASKET_FAILURE = 'mypage/BASKET_FAILURE';

const SEARCH = 'mypage/SEARCH';
const SEARCH_SUCCESS = 'mypage/SEARCH_SUCCESS';
const SEARCH_FAILURE = 'mypage/SEARCH_FAILURE';

const NEWINFO = 'mypage/NEWINFO';
const NEWINFO_SUCCESS = 'mypage/NEWINFO_SUCCESS';
const NEWINFO_FAILURE = 'mypage/NEWINFO_FAILURE';

export const changeInput = (name, value) => ({
  type: CHANGE_INPUT,
  name,
  value,
});

export const getBasketRequest = () => async (dispatch) => {
  dispatch({ type: BASKET }); // 요청이 시작됨
  try {
    const res = await api.getBasketPlace(); // API 호출

    if (res.status === 200) {
      dispatch({ type: BASKET_SUCCESS, basket: res.data }); // 성공
    } else {
      dispatch({ type: BASKET_FAILURE, res_error: 'error' }); // 실패
    }
  } catch (e) {
    dispatch({ type: BASKET_FAILURE, res_error: e }); // 실패
  }
};

export const getSearchPlaceRequest = () => async (dispatch) => {
  dispatch({ type: SEARCH });
  try {
    const res = await api.getSearchPlace(); // API 호출

    if (res.status === 200) {
      dispatch({ type: SEARCH_SUCCESS, basket: res.data }); // 성공
    } else {
      dispatch({ type: SEARCH_FAILURE, res_error: 'error' }); // 실패
    }
  } catch (e) {
    dispatch({ type: SEARCH_FAILURE, res_error: e }); // 실패
  }
};

export const putNewInfoRequest = (updateObject) => async (dispatch) => {
  dispatch({ type: NEWINFO });
  try {
    const res = await api.putChangeInfo(updateObject); // API 호출

    if (res.data.message === 'success') {
      dispatch({ type: NEWINFO_SUCCESS }); // 성공
    } else {
      dispatch({ type: NEWINFO_FAILURE, res_error: 'error' }); // 실패
    }
  } catch (e) {
    dispatch({ type: NEWINFO_FAILURE, res_error: e }); // 실패
  }
};

const initialState = {
  basket_loading: false,
  basket: false,
  basket_error: null,
  basket_data: null,

  search_loading: false,
  search: false,
  search_error: null,
  search_data: null,

  newinfo_loading: false,
  newinfo: false,
  newinfo_error: null,

  nickname: '',
  id: '',
  password: '',
};

export default function basket(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };

    case BASKET:
      return {
        ...state,
        basket_loading: true,
      };

    case BASKET_SUCCESS:
      return {
        ...state,
        basket_loading: false,
        basket: true,
        basket_data: action.basket,
      };

    case BASKET_FAILURE:
      return {
        ...state,
        basket_loading: false,
        basket_error: action.res_error,
      };

    case SEARCH:
      return {
        ...state,
        search_loading: true,
      };

    case SEARCH_SUCCESS:
      return {
        ...state,
        search_loading: false,
        search: true,
        search_data: action.basket,
      };

    case SEARCH_FAILURE:
      return {
        ...state,
        search_loading: false,
        search_error: action.res_error,
      };

    case NEWINFO:
      return {
        ...state,
        newinfo_loading: true,
      };

    case NEWINFO_SUCCESS:
      return {
        ...state,
        newinfo_loading: false,
        newinfo: true,
      };

    case NEWINFO_FAILURE:
      return {
        ...state,
        newinfo_loading: false,
        newinfo_error: action.res_error,
      };

    default:
      return state;
  }
}
