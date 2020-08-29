import { useSelector, useDispatch } from "react-redux";
import {
  postSignUpRequest,
  changeInput,
  checkIDRequest,
} from "../modules/signup";

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
  } = useSelector((state) => state.signup);

  const dispatch = useDispatch();

  const postSignUp = () => {
    dispatch(postSignUpRequest(nickname, id, password));
  };

  const checkExistID = () => {
    dispatch(checkIDRequest(id));
  };

  const onChangeInput = (e) => dispatch(changeInput(e));

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
  };
}

export default useSignUp;
