import produce from 'immer';

const CHECK_ANYWHERE = 'testOneFilter/CHECK_ANYWHERE';
const CHECK_OTHERS = 'testOneFilter/CHECK_OTHERS';
const RESET_FILTER_ONE = 'testOneFilter/RESET_FILTER_ONE';

export const toggleCheck = (index) => {
  if (index !== 0) {
    return {
      type: CHECK_OTHERS,
      index: index,
    };
  } else {
    return {
      type: CHECK_ANYWHERE,
      index: index,
    };
  }
};

export const resetFilterOne = () => ({
  type: RESET_FILTER_ONE,
});

const initialState = {
  name: [
    '아무데나',
    '서울특별시',
    '인천광역시',
    '대전광역시',
    '대구광역시',
    '광주광역시',
    '울산광역시',
    '세종특별시',
    '경기도',
    '강원도',
    '충청북도',
    '충청남도',
    '경상북도',
    '경상남도',
    '전라북도',
    '전라남도',
    '부산광역시',
    '제주도',
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
    case CHECK_ANYWHERE:
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

      if (trueCnt >= 3 && state.checked[action.index] === false) {
        alert('최대 3개까지 선택 가능합니다!');
        return state;
      }

      return produce(state, (draft) => {
        const now = state.checked[action.index];
        if (trueCnt === 2 && now === true) {
          draft.checked[action.index] = !now;
          draft.checked[0] = false;
          return;
        }

        draft.checked[action.index] = !now;
        draft.checked[0] = false;
      });

    case RESET_FILTER_ONE:
      return produce(state, (draft) => {
        for (let i = 0; i < draft.checked.length; i++) {
          draft.checked[i] = false;
        }
      });

    default:
      return produce(state, (draft) => {});
  }
}
