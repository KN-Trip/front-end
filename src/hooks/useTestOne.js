import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCheck } from "../modules/testOneFilter";

export default function useTestOne() {
  const { name, checked } = useSelector((state) => state.testOneFilter);
  const dispatch = useDispatch();

  const onCheck = useCallback(
    (index) => {
      dispatch(toggleCheck(index));
    },
    [dispatch]
  );

  return [name, checked, onCheck];
}
