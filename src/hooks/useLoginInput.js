import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeInput } from "../modules/login";

export default function useLoginInput() {
  const { id, password } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const onChange = useCallback(
    (e) => {
      dispatch(changeInput(e.target.name, e.target.value));
    },
    [dispatch]
  );

  return [id, password, onChange];
}
