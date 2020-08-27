import { produce } from "immer";

const CHANGE_INPUT = "login/CHANGE_INPUT";

export const changeInput = (name, value) => ({
  type: CHANGE_INPUT,
  name,
  value,
});

const initialState = {
  id: "",
  password: "",
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
}
