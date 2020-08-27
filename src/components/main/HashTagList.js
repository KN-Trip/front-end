import React from "react";
import styled from "styled-components";
import useTestOne from "../../hooks/useTestOne";
import useTestTwo from "../../hooks/useTestTwo";
import { getExistItem } from "../../lib/getExistItem";

const Wrapper = styled.div`
  display: flex;
  overflow-x: auto;
`;

const HashTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 27px;

  margin-right: 8px;
  padding: 4px 13px 5px 12px;

  box-sizing: border-box;

  border-radius: 14px;
  border: solid 1px #f85c5c;

  font-size: 16px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: -0.64px;

  color: #f85c5c;

  user-select: none;
`;

function HashTagList({ index }) {
  const [nameOne, checkedOne] = useTestOne();
  const [nameTwo, checkedTwo] = useTestTwo();

  const name = index === 1 ? nameOne : nameTwo;
  const checked = index === 1 ? checkedOne : checkedTwo;
  const existItems = getExistItem(name, checked);

  return (
    <Wrapper>
      {existItems && existItems.map((item) => <HashTag>{`# ${item}`}</HashTag>)}
    </Wrapper>
  );
}

export default HashTagList;
