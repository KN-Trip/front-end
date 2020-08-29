import produce from "immer";
import * as api from "../lib/api";

const SET_STEP = "signup/SET_STEP";

const SIGNUP = "signup/LOGIN";
const SIGNUP_SUCCESS = "signup/LOGIN_SUCCESS";
const SIGNUP_FAILURE = "signup/LOGIN_FAILURE";

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

const initialState = {
  step: 1,

  nickname: "",
  id: "",
  password: "",
  checkPassword: "",

  signup: false,
  signup_loading: "",
  signup_error: "",
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
    default:
      return state;
  }
}
