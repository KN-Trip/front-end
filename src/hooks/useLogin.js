import { useSelector, useDispatch } from 'react-redux';
import { postLoginRequest, clearLogin } from '../modules/login';

export default function useLogin() {
  const {
    id,
    password,
    login,
    login_loading,
    login_error,
    nickname,
  } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const loginRequest = () => {
    dispatch(postLoginRequest(id, password));
  };

  const onClearLogin = () => {
    dispatch(clearLogin());
  };

  return [
    login,
    login_loading,
    login_error,
    loginRequest,
    nickname,
    onClearLogin,
  ];
}
