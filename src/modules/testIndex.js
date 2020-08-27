const SET_TEST_INDEX = "testIndex/SET_INDEX";

export const setTestIndex = (index) => ({
  type: SET_TEST_INDEX,
  index: index,
});

const initialState = {
  index: 1,
};

export default function testIndex(state = initialState, action) {
  switch (action.type) {
    case SET_TEST_INDEX:
      return {
        ...state,
        index: action.index,
      };
    default:
      return state;
  }
}
