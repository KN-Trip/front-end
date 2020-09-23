import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getBasketRequest,
  getSearchPlaceRequest,
  putNewInfoRequest,
  changeInput,
} from '../modules/mypage';

export default function useMyPage() {
  const {
    basket_loading,
    basket,
    basket_error,
    basket_data,
    search_loading,
    search,
    search_error,
    search_data,
    newinfo,
    newinfo_error,
    newinfo_loading,
    nickname,
    id,
    password,
  } = useSelector((state) => state.mypage);
  const dispatch = useDispatch();

  const basketRequest = () => {
    dispatch(getBasketRequest());
  };

  const searchRequest = () => {
    dispatch(getSearchPlaceRequest());
  };

  const newInfoRequest = () => {
    dispatch(
      putNewInfoRequest({
        nickname,
        id,
        password,
      })
    );
  };

  const onChangeInput = useCallback(
    (e) => {
      dispatch(changeInput(e.target.name, e.target.value));
    },
    [dispatch]
  );

  return {
    basket_loading,
    basket,
    basket_error,
    basket_data,
    basketRequest,
    search_loading,
    search,
    search_error,
    search_data,
    searchRequest,
    newinfo,
    newinfo_error,
    newinfo_loading,
    newInfoRequest,
    onChangeInput,
    nickname,
    id,
    password,
  };
}
