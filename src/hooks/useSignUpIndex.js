import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setStep } from "../modules/signup";

export default function useSignUpIndex() {
  const { step } = useSelector((state) => state.signup);
  const dispatch = useDispatch();

  const setIndex = useCallback(
    (index) => {
      dispatch(setStep(index));
    },
    [dispatch]
  );

  return [step, setIndex];
}
