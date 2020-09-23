import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import {
  getTripInfoRequest,
  changeFilter,
  getTripInfoDetailRequest,
  getRecommendPlaces,
  postPlaceToBasket,
  getStayPlace,
  getHotPlace,
} from '../modules/tripinfo';
import { getTESTRequest } from '../modules/testpost';

export default function useTrip() {
  const {
    tripinfo,
    tripinfo_loading,
    tripinfo_error,
    tripinfo_data,

    filterNum,

    tripinfo_detail_loading,
    tripinfo_detail,
    tripinfo_detail_error,
    tripinfo_detail_data,

    recommendPlace_loading,
    recommendPlace,
    recommendPlace_error,
    recommendPlace_data,

    placeToBasket_loading,
    placeToBasket,
    placeToBasket_error,
    placeToBasket_data,

    stayplace_loading,
    stayplace,
    stayplace_error,
    stayplace_data,

    hotplace_loading,
    hotplace,
    hotplace_error,
    hotplace_data,
  } = useSelector((state) => state.tripinfo);

  const {
    GET_TEST_loading,
    GET_TEST,
    GET_TEST_error,
    GET_TEST_data,
  } = useSelector((state) => state.testpost);

  const dispatch = useDispatch();

  const tripInfoRequest = (option) => {
    dispatch(getTripInfoRequest(option));
  };

  const tripInfoDetailRequest = (id, type) => {
    dispatch(getTripInfoDetailRequest(id, type));
  };

  const getTest = () => {
    dispatch(getTESTRequest());
  };

  const getRecommendPlacesRequest = (locationX, locationY, nowContentId) => {
    dispatch(getRecommendPlaces(locationX, locationY, nowContentId));
  };

  const postPlaceToBasketRequest = (contentId) => {
    dispatch(postPlaceToBasket(contentId));
  };

  const getStayPlaceRequest = (areaCode, nowContentId) => {
    dispatch(getStayPlace(areaCode, nowContentId));
  };

  const getHotPlaceRequest = (areaCode, nowContentId) => {
    dispatch(getHotPlace(areaCode, nowContentId));
  };

  const setFilter = useCallback(
    (filterNum) => {
      dispatch(changeFilter(filterNum));
    },
    [dispatch]
  );

  return {
    tripinfo,
    tripinfo_loading,
    tripinfo_error,
    tripinfo_data,
    tripInfoRequest,
    GET_TEST_loading,
    GET_TEST,
    GET_TEST_error,
    GET_TEST_data,
    getTest,
    filterNum,
    setFilter,
    tripinfo_detail,
    tripinfo_detail_loading,
    tripinfo_detail_error,
    tripinfo_detail_data,
    tripInfoDetailRequest,
    recommendPlace_loading,
    recommendPlace,
    recommendPlace_error,
    recommendPlace_data,
    getRecommendPlacesRequest,
    placeToBasket_loading,
    placeToBasket,
    placeToBasket_error,
    placeToBasket_data,
    postPlaceToBasketRequest,

    stayplace_loading,
    stayplace,
    stayplace_error,
    stayplace_data,

    getStayPlaceRequest,

    hotplace_loading,
    hotplace,
    hotplace_error,
    hotplace_data,
    getHotPlaceRequest,
  };
}
