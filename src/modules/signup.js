import produce from "immer";

const SET_STEP = "signup/SET_STEP";

export const setStep = (step) => ({
  type: SET_STEP,
  step,
});

const initialState = {
  step: 1,
};

export default function signup(state = initialState, action) {
  switch (action.type) {
    case SET_STEP:
      return produce(state, (draft) => {
        draft.step = action.step;
      });
    default:
      return state;
  }
}
