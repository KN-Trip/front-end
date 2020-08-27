import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTestIndex } from "../modules/testIndex";

export default function useTestIndex() {
  const { index } = useSelector((state) => state.testIndex);
  const dispatch = useDispatch();

  const setIndex = useCallback(
    (index) => {
      dispatch(setTestIndex(index));
    },
    [dispatch]
  );

  return [index, setIndex];
}
