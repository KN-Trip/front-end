import { produce } from 'immer';
import * as api from '../lib/api';

const CHANGE_INPUT = 'login/CHANGE_INPUT';

const LOGIN = 'login/LOGIN';
const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'lgoin/LOGIN_FAILURE';

export const changeInput = (name, value) => ({
    type: CHANGE_INPUT,
    name,
    value,
});

export const postLoginRequest = (id, password) => async (dispatch) => {
    dispatch({ type: LOGIN }); // 요청이 시작됨
    try {
        const res = await api.login(id, password); // API 호출
        console.log(JSON.stringify(res, null, 4));

        if (res.data.message === 'fail') {
            dispatch({ type: LOGIN_FAILURE, res_error: 'error' });
        } else {
            dispatch({ type: LOGIN_SUCCESS }); // 성공
        }
    } catch (e) {
        dispatch({ type: LOGIN_FAILURE, res_error: e }); // 실패
    }
};

const initialState = {
    id: '',
    password: '',
    login_loading: false,
    login: false,
    login_error: null,
};

export default function login(state = initialState, action) {
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                [action.name]: action.value,
            };

        case LOGIN:
            return {
                ...state,
                login_loading: true,
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                login_loading: false,
                login: true,
            };

        case LOGIN_FAILURE:
            return {
                ...state,
                login_loading: false,
                login_error: action.res_error,
            };
        default:
            return state;
    }
}
