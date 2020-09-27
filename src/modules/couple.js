import * as api from '../lib/api';

const GET_COUPLE_EVENT = 'getcouple/GET_COUPLE_EVENT';
const GET_COUPLE_EVENT_SUCCESS = 'getcouple/GET_COUPLE_EVENT_SUCCESS';
const GET_COUPLE_EVENT_FAILURE = 'getcouple/GET_COUPLE_EVENT_FAILURE';

const PROCESS_COUPLE = 'couple/PROCESS_COUPLE';
const PROCESS_COUPLE_SUCCESS = 'couple/PROCESS_COUPLE_SUCCESS';
const PROCESS_COUPLE_FAILURE = 'couple/PROCESS_COUPLE_FAILURE';

export const getCoupleEventRequest = () => async (dispatch) => {
  dispatch({ type: GET_COUPLE_EVENT }); // 요청이 시작됨
  try {
    const res = await api.getCoupleEvent();
    dispatch({ type: GET_COUPLE_EVENT_SUCCESS, data: res.data }); // 성공
  } catch (e) {
    dispatch({ type: GET_COUPLE_EVENT_FAILURE, res_error: e }); // 실패
  }
};

export const postCoupleProcess = (acceptOption) => async (dispatch) => {
  dispatch({ type: PROCESS_COUPLE }); // 요청이 시작됨
  try {
    const res = await api.processCoupleEvent(acceptOption);
    dispatch({ type: PROCESS_COUPLE_SUCCESS, data: res.data }); // 성공
  } catch (e) {
    dispatch({ type: PROCESS_COUPLE_FAILURE, res_error: e }); // 실패
  }
};

const initialState = {
  getCouple_data: null,
  getCouple_loading: false,
  getCouple: false,
  getCouple_error: null,

  processCouple_data: null,
  processCouple_loading: false,
  processCouple: false,
  processCouple_error: null,
};

export default function couple(state = initialState, action) {
  switch (action.type) {
    case GET_COUPLE_EVENT:
      return {
        ...state,
        getCouple_loading: true,
      };

    case GET_COUPLE_EVENT_SUCCESS:
      return {
        ...state,
        getCouple_loading: false,
        getCouple: true,
        getCouple_data: action.data,
      };

    case GET_COUPLE_EVENT_FAILURE:
      return {
        ...state,
        getCouple_loading: false,
        getCouple_error: action.res_error,
      };

    case PROCESS_COUPLE:
      return {
        ...state,
        processCouple_loading: true,
      };

    case PROCESS_COUPLE_SUCCESS:
      return {
        ...state,
        processCouple_loading: false,
        processCouple: true,
        processCouple_data: action.data,
      };

    case PROCESS_COUPLE_FAILURE:
      return {
        ...state,
        processCouple_loading: false,
        processCouple_error: action.res_error,
      };
    default:
      return state;
  }
}
