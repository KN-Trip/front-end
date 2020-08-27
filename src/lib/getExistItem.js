import { produce } from "immer";

export const getExistItem = (name, checked) => {
  let indexArray = [];
  let nameArray = [];
  indexArray = produce(checked, (draft) => {});

  for (let i = 0; i < checked.length; i++) {
    indexArray = produce(indexArray, (draft) => {
      if (checked[i] === true) {
        draft.push(i);
      }
    });
  }

  for (let i = 0; i < indexArray.length; i++) {
    nameArray = produce(nameArray, (draft) => {
      if (indexArray.indexOf(i) > -1) {
        draft.push(name[i]);
      }
    });
  }

  return nameArray;
};
