import { useSelector, useDispatch } from 'react-redux';
import { getLogoutRequest } from '../modules/logout';
import { clearLogin } from '../modules/login';

export default function useLogout() {
  const { logout, logout_loading, logout_error } = useSelector(
    (state) => state.logout
  );
  const dispatch = useDispatch();

  const logoutRequest = () => {
    dispatch(getLogoutRequest());
  };

  return {
    logout,
    logout_loading,
    logout_error,
    logoutRequest,
    clearLogin,
  };
}
