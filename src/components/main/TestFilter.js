import React from "react";
import ARowTable from "../common/ARowTable";

import useTestOne from "../../hooks/useTestOne";
import useTestTwo from "../../hooks/useTestTwo";

import { divideArray } from "../../lib/divdeArray";

function TestFilter({ index }) {
  const [dataOne, checkedOne, onToggleOne] = useTestOne();
  const [dataTwo, checkedTwo, onToggleTwo] = useTestTwo();

  const data = index === 1 ? dataOne : dataTwo;
  const checked = index === 1 ? checkedOne : checkedTwo;
  const onToggle = index === 1 ? onToggleOne : onToggleTwo;

  return (
    <ARowTable
      A={6}
      data={divideArray(6, data)}
      filterStatus={divideArray(6, checked)}
      onToggle={onToggle}
    />
  );
}

export default TestFilter;
