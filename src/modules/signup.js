import produce from "immer";
import * as api from "../lib/api";

const SET_STEP = "signup/SET_STEP";

const SIGNUP = "signup/LOGIN";
const SIGNUP_SUCCESS = "signup/LOGIN_SUCCESS";
const SIGNUP_FAILURE = "signup/LOGIN_FAILURE";

const CHECKID = "signup/CHECKID";
const CHECKID_SUCCESS = "signup/CHECKID_SUCCESS";
const CHECKID_FAILURE = "signup/CHECKID_FAILURE";

const CHANGE_INPUT = "signup/CHANGE_INPUT";

export const setStep = (step) => ({
  type: SET_STEP,
  step,
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
    if (res.data.message === "fail") {
      dispatch({ type: SIGNUP_FAILURE, res_error: "error" });
    } else {
      alert("회원가입이 완료 되었습니다!");
      dispatch({ type: SIGNUP_SUCCESS }); // 성공
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
      dispatch({ type: CHECKID_FAILURE, res_error: "error" });
    } else {
      dispatch({ type: CHECKID_SUCCESS, isExist: res.data.message }); // 성공
      if (res.data.message) {
        alert("존재하는 아이디 입니다.");
      } else {
        dispatch(setStep(2));
      }
    }
  } catch (e) {
    dispatch({ type: CHECKID_FAILURE, res_error: e }); // 실패
  }
};

const initialState = {
  step: 1,

  nickname: "",
  id: "",
  password: "",
  checkPassword: "",

  signup: false,
  signup_loading: false,
  signup_error: null,

  checkID: false,
  checkID_loading: false,
  checkID_error: null,
  isIDExist: false,
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

    default:
      return state;
  }
}
