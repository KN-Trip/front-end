import { useSelector, useDispatch } from 'react-redux';
import {
  postSignUpRequest,
  changeInput,
  checkIDRequest,
  clearSignUpProcess,
  getCandidateRequest,
  setRadio,
  postCoupleRequest,
  getNaverLogin,
  getKakaoLogin,
} from '../modules/signup';

function useSignUp() {
  const {
    nickname,
    id,
    password,
    checkPassword,
    signup,
    signup_loading,
    signup_error,
    checkID,
    checkID_loading,
    checkID_error,
    isIDExist,
    candidatesData,
    candidates,
    candidates_loading,
    candidates_error,
    targetID,
    radio,
    postCouple,
    postCouple_error,
    postCouple_loading,
    naverlogin,
    naverlogin_loading,
    naverlogin_error,
    naverlogin_data,
    kakaologin,
    kakaologin_loading,
    kakaologin_error,
    kakaologin_data,
  } = useSelector((state) => state.signup);

  const dispatch = useDispatch();

  const postSignUp = () => {
    dispatch(postSignUpRequest(nickname, id, password));
  };

  const checkExistID = () => {
    dispatch(checkIDRequest(id));
  };

  const clearSignUp = () => {
    dispatch(clearSignUpProcess());
  };

  const onChangeInput = (e) => dispatch(changeInput(e));

  const candidateRequest = () => {
    dispatch(getCandidateRequest(targetID));
  };

  const onSetRadio = () => {
    dispatch(setRadio());
  };

  const onPostCoupleRequest = (index, option) => {
    dispatch(postCoupleRequest(index, option));
  };

  const getNaverLoginRequest = () => {
    dispatch(getNaverLogin());
  };

  const getKakaoLoginRequest = () => {
    dispatch(getKakaoLogin());
  };

  return {
    id,
    nickname,
    password,
    checkPassword,
    signup,
    signup_loading,
    signup_error,
    postSignUp,
    onChangeInput,
    checkExistID,
    checkID,
    checkID_loading,
    checkID_error,
    isIDExist,
    clearSignUp,
    candidatesData,
    candidates,
    candidates_loading,
    candidates_error,
    candidateRequest,
    targetID,
    radio,
    onSetRadio,
    postCouple,
    postCouple_loading,
    postCouple_error,
    onPostCoupleRequest,
    naverlogin,
    naverlogin_loading,
    naverlogin_error,
    naverlogin_data,
    getNaverLoginRequest,
    kakaologin,
    kakaologin_loading,
    kakaologin_error,
    kakaologin_data,
    getKakaoLoginRequest,
  };
}

export default useSignUp;
