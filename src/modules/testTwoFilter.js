import produce from "immer";

const CHECK_ALL = "testTwoFilter/CHECK_ALL";
const CHECK_OTHERS = "testTwoFilter/CHECK_OTHERS";
const RESET_FILTER_TWO = "testTwoFilter/RESET_FILTER_TWO";

export const toggleCheck = (index) => {
  if (index !== 0) {
    return {
      type: CHECK_OTHERS,
      index: index,
    };
  } else {
    return {
      type: CHECK_ALL,
      index: index,
    };
  }
};

export const resetFilterTwo = () => ({
  type: RESET_FILTER_TWO,
});

const initialState = {
  name: [
    "전체",
    "바다",
    "산",
    "계곡",
    "해안절경",
    "체험",
    "박물관",
    "미술관",
    "전시관",
    "공연장",
    "도서관",
    "축제",
    "역사",
    "쇼핑",
    "음식점",
    "액티비티",
    "수목원",
    "관광지",
  ],
  checked: [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
};

export default function testOneFilter(state = initialState, action) {
  switch (action.type) {
    case CHECK_ALL:
      return produce(state, (draft) => {
        const now = state.checked[0];
        draft.checked[0] = !now;

        for (let i = 1; i < draft.checked.length; i++) {
          draft.checked[i] = false;
        }
      });
    case CHECK_OTHERS:
      let trueCnt = 0;
      state.checked.forEach((v) => {
        if (v) trueCnt += 1;
      });

      if (trueCnt >= 5) {
        alert("최대 5개까지 선택 가능합니다.");
        return state;
      }

      return produce(state, (draft) => {
        const now = state.checked[action.index];
        draft.checked[action.index] = !now;
        draft.checked[0] = false;
      });

    case RESET_FILTER_TWO:
      return produce(state, (draft) => {
        for (let i = 0; i < draft.checked.length; i++) {
          draft.checked[i] = false;
        }
      });

    default:
      return produce(state, (draft) => {});
  }
}
