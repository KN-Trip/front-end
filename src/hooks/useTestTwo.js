import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCheck } from "../modules/testTwoFilter";

export default function useTestTwo() {
  const { name, checked } = useSelector((state) => state.testTwoFilter);
  const dispatch = useDispatch();

  const onCheck = useCallback(
    (index) => {
      dispatch(toggleCheck(index));
    },
    [dispatch]
  );

  return [name, checked, onCheck];
}
