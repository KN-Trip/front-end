import React from "react";
import styled from "styled-components";
import ARowTable from "../common/ARowTable";

import useTestOne from "../../hooks/useTestOne";
import useTestTwo from "../../hooks/useTestTwo";

import { divideArray } from "../../lib/divdeArray";

const PC = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }

  @media (min-width: 1025px) {
    display: block;
  }
`;

const Mobile = styled.div`
  @media (max-width: 1024px) {
    display: block;
  }

  @media (min-width: 1025px) {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 36px;
  padding: 19px 12px 19px 30px;

  width: 226px;

  border-radius: 10px;
  box-shadow: 1px 2px 30px 0 rgba(22, 27, 96, 0.1);
  background-color: #ffffff;
  box-sizing: border-box;
`;

const ScrollWrapper = styled.div`
  width: 100%;
  height: 341px;
  overflow-y: scroll;

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background-color: #e0e0e0;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #f85c5c;
  }
`;
function TestFilter({ index }) {
  const [dataOne, checkedOne, onToggleOne] = useTestOne();
  const [dataTwo, checkedTwo, onToggleTwo] = useTestTwo();

  const data = index === 1 ? dataOne : dataTwo;
  const checked = index === 1 ? checkedOne : checkedTwo;
  const onToggle = index === 1 ? onToggleOne : onToggleTwo;

  return (
    <>
      <PC>
        <ARowTable
          A={6}
          data={divideArray(6, data)}
          filterStatus={divideArray(6, checked)}
          onToggle={onToggle}
        />
      </PC>

      <Mobile>
        <MobileWrapper>
          <ScrollWrapper>
            <ARowTable
              A={1}
              data={divideArray(1, data)}
              filterStatus={divideArray(1, checked)}
              onToggle={onToggle}
            />
          </ScrollWrapper>
        </MobileWrapper>
      </Mobile>
    </>
  );
}

export default TestFilter;
