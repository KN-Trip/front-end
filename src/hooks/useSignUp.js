import { useSelector, useDispatch } from "react-redux";
import { postSignUpRequest, changeInput } from "../modules/signup";

function useSignUp() {
  const {
    nickname,
    id,
    password,
    checkPassword,
    signup,
    signup_loading,
    signup_error,
  } = useSelector((state) => state.signup);

  const dispatch = useDispatch();

  const postSignUp = () => {
    dispatch(postSignUpRequest(nickname, id, password));
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
  };
}

export default useSignUp;
