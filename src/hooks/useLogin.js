import { useSelector, useDispatch } from 'react-redux';
import { postLoginRequest } from '../modules/login';

export default function useLoginInput() {
    const { id, password, login, login_loading, login_error } = useSelector(
        (state) => state.login
    );
    const dispatch = useDispatch();

    const loginRequest = () => {
        dispatch(postLoginRequest(id, password));
    };

    return [login, login_loading, login_error, loginRequest];
}
