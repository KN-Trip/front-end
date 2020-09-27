import { produce } from 'immer';
import { useHistory } from 'react-router-dom';
import * as api from '../lib/api';

const TEST = 'TEST/TEST';
const TEST_SUCCESS = 'TEST/TEST_SUCCESS';
const TEST_FAILURE = 'TEST/TEST_FAILURE';

const GET_TEST = 'TEST/GET_TEST';
const GET_TEST_SUCCESS = 'TEST/GET_TEST_SUCCESS';
const GET_TEST_FAILURE = 'TEST/GET_TEST_FAILRUE';

export const postTESTRequest = (test) => async (dispatch) => {
  dispatch({ type: TEST }); // 요청이 시작됨
  try {
    const res = await api.postTest(test); // API 호출
    if (res.status !== 200) {
      alert('에러가 발생했습니다.\n잠시 뒤에 다시 시도해 주세요.');
      dispatch({ type: TEST_FAILURE, res_error: 'fail' });
    } else {
      dispatch({ type: TEST_SUCCESS }); // 성공
    }
  } catch (e) {
    alert(`${e}`);
    alert('에러가 발생했습니다.\n잠시 뒤에 다시 시도해 주세요.');
    dispatch({ type: TEST_FAILURE, res_error: e }); // 실패
  }
};

export const getTESTRequest = () => async (dispatch) => {
  dispatch({ type: GET_TEST });
  try {
    const res = await api.getTest(); // API 호출

    if (res.status !== 200) {
      alert('에러가 발생했습니다.\n잠시 뒤에 다시 시도해 주세요.');
      dispatch({ type: GET_TEST_FAILURE, res_error: 'fail' });
    } else {
      dispatch({ type: GET_TEST_SUCCESS, data: res.data }); // 성공
    }
  } catch (e) {
    alert('에러가 발생했습니다.\n잠시 뒤에 다시 시도해 주세요.');
    dispatch({ type: GET_TEST_FAILURE, res_error: e }); // 실패
  }
};

const initialState = {
  TEST_loading: false,
  TEST: false,
  TEST_error: null,

  GET_TEST_loading: false,
  GET_TEST: false,
  GET_TEST_error: null,
  GET_TEST_data: null,
};

export default function testpost(state = initialState, action) {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        TEST_loading: true,
      };

    case TEST_SUCCESS:
      return {
        ...state,
        TEST_loading: false,
        TEST: true,
      };

    case TEST_FAILURE:
      return {
        ...state,
        TEST_loading: false,
        TEST_error: action.res_error,
      };

    case GET_TEST:
      return {
        ...state,
        GET_TEST_loading: true,
      };

    case GET_TEST_SUCCESS:
      return {
        ...state,
        GET_TEST_loading: false,
        GET_TEST: true,
        GET_TEST_data: action.data,
      };

    case GET_TEST_FAILURE:
      return {
        ...state,
        GET_TEST_loading: false,
        GET_TEST_error: action.res_error,
      };
    default:
      return state;
  }
}
