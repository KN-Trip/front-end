import { useSelector, useDispatch } from 'react-redux';
import {
  postSignUpRequest,
  changeInput,
  checkIDRequest,
  clearSignUpProcess,
  getCandidateRequest,
  setRadio,
  postCoupleRequest,
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

  const onPostCoupleRequest = (option, index = null) => {
    dispatch(postCoupleRequest(option, index));
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
  };
}

export default useSignUp;
