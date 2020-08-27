import { produce } from "immer";

export const divideArray = (A, data) => {
  let result = [];
  let splitedData = [];
  let cnt = 0;
  let producedData;

  producedData = produce(data, (draft) => {});

  while (true) {
    if (producedData.length === 1) {
      const item = producedData[0];

      producedData = produce(producedData, (draft) => {
        draft.shift();
      });

      splitedData = produce(splitedData, (draft) => {
        draft.push(item);
      });

      result = produce(result, (draft) => {
        draft.push(splitedData);
      });

      break;
    }
    if (cnt === A) {
      result = produce(result, (draft) => {
        draft.push(splitedData);
      });

      splitedData = [];
      cnt = 0;
      continue;
    }

    const item2 = producedData[0];
    producedData = produce(producedData, (draft) => {
      draft.shift();
    });

    splitedData = produce(splitedData, (draft) => {
      draft.push(item2);
    });

    cnt++;
  }

  return result;
};
