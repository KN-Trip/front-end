import { produce } from 'immer';
import * as api from '../lib/api';

const TRIP_INFO = 'tripinfo/TRIP_INFO';
const TRIP_INFO_SUCCESS = 'tripinfo/TRIP_INFO_SUCCESS';
const TRIP_INFO_FAILURE = 'tripinfo/TRIP_INFO_FAILURE';

const RECOMMEND_PLACES = 'tripinfo/RECOMMEND_PLACES';
const RECOMMEND_PLACES_SUCCESS = 'tripinfo/RECOMMEND_PLACES_SUCCESS';
const RECOMMEND_PLACES_FAILURE = 'tripinfo/RECOMMEND_PLACES_FAILURE';

const TRIP_INFO_DETAIL = 'tripinfo/TRIP_INFO_DETAIL';
const TRIP_INFO_DETAIL_SUCCESS = 'tripinfo/TRIP_INFO_DETAIL_SUCCESS';
const TRIP_INFO_DETAIL_FAILURE = 'tripinfo/TRIP_INFO_DETAIL_FAILURE';

const PLACE_TO_BASKET = 'tripinfo/PLACE_TO_BASKET';
const PLACE_TO_BASKET_SUCCESS = 'tripinfo/PLACE_TO_BASKET_SUCCESS';
const PLACE_TO_BASKET_FAILURE = 'tripinfo/PLACE_TO_BASKET_FAILURE';

const STAY_PLACE = 'tripinfo/STAY_PLACE';
const STAY_PLACE_SUCCESS = 'tripinfo/STAY_PLACE_SUCCESS';
const STAY_PLACE_FAILURE = 'tripinfo/STAY_PLACE_FAILURE';

const HOT_PLACE = 'tripinfo/HOT_PLACE';
const HOT_PLACE_SUCCESS = 'tripinfo/HOT_PLACE_SUCCESS';
const HOT_PLACE_FAILURE = 'tripinfo/HOT_PLACE_FAILURE';

const CHANGE_FILTER = 'tripinfo/CHANGE_FILTER';

export const getTripInfoRequest = (option) => async (dispatch) => {
  dispatch({ type: TRIP_INFO }); // 요청이 시작됨
  try {
    const res = await api.getTripInfo(option); // API 호출

    if (res.data.totalCount >= 0) {
      dispatch({ type: TRIP_INFO_SUCCESS, data: res.data }); // 성공
    } else {
      dispatch({ type: TRIP_INFO_FAILURE, res_error: 'error' });
    }
  } catch (e) {
    dispatch({ type: TRIP_INFO_FAILURE, res_error: e }); // 실패
  }
};

export const getTripInfoDetailRequest = (id, type) => async (dispatch) => {
  dispatch({ type: TRIP_INFO_DETAIL }); // 요청이 시작됨
  try {
    const res = await api.getTripInfoDetail(id, type); // API 호출

    if (res.data) {
      dispatch({ type: TRIP_INFO_DETAIL_SUCCESS, data: res.data }); // 성공
    } else {
      dispatch({ type: TRIP_INFO_DETAIL_FAILURE, res_error: 'error' });
    }
  } catch (e) {
    dispatch({ type: TRIP_INFO_DETAIL_FAILURE, res_error: e }); // 실패
  }
};

export const getRecommendPlaces = (
  locationX,
  locationY,
  nowContentId
) => async (dispatch) => {
  dispatch({ type: RECOMMEND_PLACES }); // 요청이 시작됨
  try {
    const res = await api.getRecommendedPlaces(
      locationX,
      locationY,
      nowContentId
    ); // API 호출

    if (res.status === 200) {
      dispatch({ type: RECOMMEND_PLACES_SUCCESS, data: res.data }); // 성공
    } else {
      dispatch({ type: RECOMMEND_PLACES_FAILURE, res_error: 'error' });
    }
  } catch (e) {
    dispatch({ type: RECOMMEND_PLACES_FAILURE, res_error: e }); // 실패
  }
};

export const postPlaceToBasket = (contentId) => async (dispatch) => {
  dispatch({ type: PLACE_TO_BASKET }); // 요청이 시작됨
  try {
    const res = await api.postBasket(contentId); // API 호출

    if (res.status === 200) {
      dispatch({ type: PLACE_TO_BASKET_SUCCESS, data: res.data }); // 성공
    } else {
      dispatch({ type: PLACE_TO_BASKET_FAILURE, res_error: 'error' });
    }
  } catch (e) {
    dispatch({ type: PLACE_TO_BASKET_FAILURE, res_error: e }); // 실패
  }
};

export const getStayPlace = (areaCode, nowContentId) => async (dispatch) => {
  dispatch({ type: STAY_PLACE }); // 요청이 시작됨
  try {
    const res = await api.getStayPlace(areaCode, nowContentId); // API 호출

    if (res.data) {
      dispatch({ type: STAY_PLACE_SUCCESS, data: res.data }); // 성공
    } else {
      dispatch({ type: STAY_PLACE_FAILURE, res_error: 'error' });
    }
  } catch (e) {
    dispatch({ type: STAY_PLACE_FAILURE, res_error: e }); // 실패
  }
};

export const getHotPlace = (areaCode, nowContentId) => async (dispatch) => {
  dispatch({ type: HOT_PLACE }); // 요청이 시작됨
  try {
    const res = await api.getHotPlace(areaCode, nowContentId); // API 호출

    if (res.data) {
      dispatch({ type: HOT_PLACE_SUCCESS, data: res.data }); // 성공
    } else {
      dispatch({ type: HOT_PLACE_FAILURE, res_error: 'error' });
    }
  } catch (e) {
    dispatch({ type: HOT_PLACE_FAILURE, res_error: e }); // 실패
  }
};

export const changeFilter = (filterNum) => {
  return { type: CHANGE_FILTER, filterNum };
};

const initialState = {
  tripinfo_loading: false,
  tripinfo: false,
  tripinfo_error: null,
  tripinfo_data: null,

  tripinfo_detail_loading: false,
  tripinfo_detail: false,
  tripinfo_detail_error: null,
  tripinfo_detail_data: null,

  recommendPlace_loading: false,
  recommendPlace: false,
  recommendPlace_error: null,
  recommendPlace_data: null,

  placeToBasket_loading: false,
  placeToBasket: false,
  placeToBasket_error: null,
  placeToBasket_data: null,

  stayplace_loading: false,
  stayplace: false,
  stayplace_error: null,
  stayplace_data: null,

  hotplace_loading: false,
  hotplace: false,
  hotplace_error: null,
  hotplace_data: null,

  filterNum: 0,
};

export default function tripinfo(state = initialState, action) {
  switch (action.type) {
    case TRIP_INFO:
      return {
        ...state,
        tripinfo_loading: true,
      };

    case TRIP_INFO_SUCCESS:
      return {
        ...state,
        tripinfo_loading: false,
        tripinfo: true,
        tripinfo_data: action.data,
      };

    case TRIP_INFO_FAILURE:
      return {
        ...state,
        tripinfo_loading: false,
        tripinfo_error: action.res_error,
      };

    case TRIP_INFO_DETAIL:
      return {
        ...state,
        tripinfo_detail_loading: true,
      };

    case TRIP_INFO_DETAIL_SUCCESS:
      return {
        ...state,
        tripinfo_detail_loading: false,
        tripinfo_detail: true,
        tripinfo_detail_data: action.data,
      };

    case TRIP_INFO_DETAIL_FAILURE:
      return {
        ...state,
        tripinfo_detail_loading: false,
        tripinfo_detail_error: action.res_error,
      };

    case CHANGE_FILTER:
      return {
        ...state,
        filterNum: action.filterNum,
      };

    case RECOMMEND_PLACES:
      return {
        ...state,
        recommendPlace_loading: true,
      };

    case RECOMMEND_PLACES_SUCCESS:
      return {
        ...state,
        recommendPlace_loading: false,
        recommendPlace: true,
        recommendPlace_data: action.data,
      };

    case RECOMMEND_PLACES_FAILURE:
      return {
        ...state,
        recommendPlace_loading: false,
        recommendPlace_error: action.res_error,
      };

    case PLACE_TO_BASKET:
      return {
        ...state,
        placeToBasket_loading: true,
      };

    case PLACE_TO_BASKET_SUCCESS:
      return {
        ...state,
        placeToBasket_loading: false,
        placeToBasket: true,
        placeToBasket_data: action.data,
      };

    case PLACE_TO_BASKET_FAILURE:
      return {
        ...state,
        placeToBasket_loading: false,
        placeToBasket_error: action.res_error,
      };

    case STAY_PLACE:
      return {
        ...state,
        stayplace_loading: true,
      };

    case STAY_PLACE_SUCCESS:
      return {
        ...state,
        stayplace_loading: false,
        stayplace: true,
        stayplace_data: action.data,
      };

    case STAY_PLACE_FAILURE:
      return {
        ...state,
        stayplace_loading: false,
        stayplace_error: action.res_error,
      };

    case HOT_PLACE:
      return {
        ...state,
        hotplace_loading: true,
      };

    case HOT_PLACE_SUCCESS:
      return {
        ...state,
        hotplace_loading: false,
        hotplace: true,
        hotplace_data: action.data,
      };

    case HOT_PLACE_FAILURE:
      return {
        ...state,
        hotplace_loading: false,
        hotplace_error: action.res_error,
      };

    default:
      return state;
  }
}
