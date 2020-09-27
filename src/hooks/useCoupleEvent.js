import { useSelector, useDispatch } from 'react-redux';
import { getCoupleEventRequest, postCoupleProcess } from '../modules/couple';

export default function useCoupleEvent() {
  const {
    getCouple_data,
    getCouple_loading,
    getCouple,
    getCouple_error,

    processCouple_data,
    processCouple_loading,
    processCouple,
    processCouple_error,
  } = useSelector((state) => state.couple);
  const dispatch = useDispatch();

  const getCoupleRequest = () => {
    dispatch(getCoupleEventRequest());
  };

  const postCoupleProcessRequest = (acceptOption) => {
    dispatch(postCoupleProcess(acceptOption));
  };

  return {
    getCouple_data,
    getCouple_loading,
    getCouple,
    getCouple_error,
    getCoupleRequest,

    processCouple_data,
    processCouple_loading,
    processCouple,
    processCouple_error,
    postCoupleProcessRequest,
  };
}
