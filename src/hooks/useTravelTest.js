import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import useTestIndex from "./useTestIndex";
import { resetFilterOne } from "../modules/testOneFilter";
import { resetFilterTwo } from "../modules/testTwoFilter";

export default function useTravelTest(index = 1) {
  const filterOne = useSelector((state) => state.testOneFilter);
  const filterTwo = useSelector((state) => state.testTwoFilter);

  const dispatch = useDispatch();

  const onResetOne = () => {
    dispatch(resetFilterOne());
  };

  const onResetTwo = () => {
    dispatch(resetFilterTwo());
  };

  const title =
    index === 1
      ? "연인과 한 번쯤 가보고 싶은 곳은?"
      : "원하는 여행 컨셉을 설정해주세요!";

  const desc =
    index === 1
      ? "가고 싶은 여행지가 있나요? 어디 갈지 정하지 못해도 괜찮아요! 꽁냥트립이 찾아드릴게요."
      : "원하는 여행 컨셉을 설정하면 상대방과 공통되는 해시태그만 보여집니다. ";

  const onReset = index === 1 ? onResetOne : onResetTwo;

  return [index, title, desc, onReset];
}
