import produce from 'immer';
import * as api from '../lib/api';

const SET_STEP = 'signup/SET_STEP';
const CLEAR_SIGNUP_PROCESS = 'signup/CLEAR_SIGNUP_PROCESS';

const SIGNUP = 'signup/SIGNUP';
const SIGNUP_SUCCESS = 'signup/SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'signup/SIGNUP_FAILURE';

const CANDIDATES = 'signup/CANDIDATES';
const CANDIDATES_SUCCESS = 'signup/CANDIDATES_SUCCESS';
const CANDIDATES_FAILURE = 'signup/CANDIDATES_FAILURE';

const CHECKID = 'signup/CHECKID';
const CHECKID_SUCCESS = 'signup/CHECKID_SUCCESS';
const CHECKID_FAILURE = 'signup/CHECKID_FAILURE';

const CHANGE_INPUT = 'signup/CHANGE_INPUT';

const SET_RADIO = 'signup/SET_RADIO';

const POST_COUPLE = 'signup/POST_COUPLE';
const POST_COUPLE_SUCCESS = 'signup/POST_COUPLE_SUCCESS';
const POST_COUPLE_FAILURE = 'signup/POST_COUPLE_FAILURE';

export const setStep = (step) => ({
  type: SET_STEP,
  step,
});

export const clearSignUpProcess = () => ({
  type: CLEAR_SIGNUP_PROCESS,
});
export const changeInput = (e) => {
  const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
  return { type: CHANGE_INPUT, value, name };
};

export const postSignUpRequest = (nickname, id, password) => async (
  dispatch
) => {
  dispatch({ type: SIGNUP }); // 요청이 시작됨
  try {
    const res = await api.signUp(nickname, id, password); // API 호출
    if (res.data.message === 'fail') {
      dispatch({ type: SIGNUP_FAILURE, res_error: 'error' });
    } else {
      dispatch({ type: SIGNUP_SUCCESS }); // 성공
      dispatch(setStep(3));
    }
  } catch (e) {
    dispatch({ type: SIGNUP_FAILURE, res_error: e }); // 실패
  }
};

export const checkIDRequest = (id) => async (dispatch) => {
  dispatch({ type: CHECKID }); // 요청이 시작됨
  try {
    const res = await api.checkExistID(id); // API 호출
    if (res.data.message !== true && res.data.message !== false) {
      dispatch({ type: CHECKID_FAILURE, res_error: 'error' });
    } else {
      dispatch({ type: CHECKID_SUCCESS, isExist: res.data.message }); // 성공
      if (res.data.message) {
        alert('존재하는 아이디 입니다.');
        dispatch(clearSignUpProcess());
      } else {
        dispatch(setStep(2));
      }
    }
  } catch (e) {
    dispatch({ type: CHECKID_FAILURE, res_error: e }); // 실패
  }
};

export const getCandidateRequest = (id) => async (dispatch) => {
  dispatch({ type: CANDIDATES }); // 요청이 시작됨
  try {
    const res = await api.getCandidateID(id); // API 호출
    if (res.status !== 200) {
      dispatch({ type: CANDIDATES_FAILURE, res_error: 'error' });
    } else {
      dispatch({ type: CANDIDATES_SUCCESS, candiates: res.data }); // 성공
    }
  } catch (e) {
    dispatch({ type: CANDIDATES_FAILURE, res_error: e }); // 실패
  }
};

export const setRadio = () => ({ type: SET_RADIO });

export const postCoupleRequest = (option, index = null) => async (dispatch) => {
  dispatch({ type: POST_COUPLE }); // 요청이 시작됨
  try {
    const res = await api.postCouple(option, index); // API 호출
    if (res.data.message === 'post event success') {
      dispatch({ type: POST_COUPLE_SUCCESS }); // 성공
    } else {
      dispatch({ type: POST_COUPLE_FAILURE }); // 실패
      dispatch(setStep(3));
    }
  } catch (e) {
    dispatch({ type: POST_COUPLE_FAILURE, res_error: e }); // 실패
  }
};

const initialState = {
  step: 1,

  nickname: '',
  id: '',
  password: '',
  checkPassword: '',

  signup: false,
  signup_loading: false,
  signup_error: null,

  checkID: false,
  checkID_loading: false,
  checkID_error: null,
  isIDExist: false,

  targetID: '',

  candidatesData: [],
  candidates: false,
  candidates_loading: false,
  candidates_error: null,

  radio: false,

  postCouple: false,
  postCouple_loading: false,
  postCouple_error: null,
};

export default function signup(state = initialState, action) {
  switch (action.type) {
    case SET_STEP:
      return produce(state, (draft) => {
        draft.step = action.step;
      });

    case SIGNUP:
      return {
        ...state,
        signup_loading: true,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        signup_loading: false,
        signup: true,
      };

    case SIGNUP_FAILURE:
      return {
        ...state,
        signup_loading: false,
        signup_error: action.res_error,
      };

    case CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };

    case CHECKID:
      return {
        ...state,
        checkID_loading: true,
      };

    case CHECKID_SUCCESS:
      return {
        ...state,
        checkID_loading: false,
        isIDExist: action.isExist,
      };

    case CHECKID_FAILURE:
      return {
        ...state,
        checkID_loading: false,
        checkID_error: action.res_error,
      };

    case CANDIDATES:
      return {
        ...state,
        candidates_loading: true,
      };

    case CANDIDATES_SUCCESS:
      return {
        ...state,
        candidates_loading: false,
        candidatesData: action.candiates,
      };

    case CANDIDATES_FAILURE:
      return {
        ...state,
        candidates_loading: false,
        candidates_error: action.res_error,
      };

    case POST_COUPLE:
      return {
        ...state,
        postCouple_loading: true,
      };

    case POST_COUPLE_SUCCESS:
      return {
        ...state,
        postCouple_loading: false,
        postCouple: true,
      };

    case POST_COUPLE_FAILURE:
      return {
        ...state,
        postCouple_loading: false,
        postCouple_error: action.res_error,
      };

    case CLEAR_SIGNUP_PROCESS:
      return {
        step: 1,

        nickname: '',
        id: '',
        password: '',
        checkPassword: '',

        signup: false,
        signup_loading: false,
        signup_error: null,

        checkID: false,
        checkID_loading: false,
        checkID_error: null,
        isIDExist: false,

        candidatesData: null,
        candidates: false,
        candidates_loading: false,
        candidates_error: null,
      };

    case SET_RADIO:
      return {
        ...state,
        radio: !state.radio,
      };

    default:
      return state;
  }
}
