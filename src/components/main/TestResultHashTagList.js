import React from "react";
import styled from "styled-components";
import XIcon from "../../assets/XIcon.png";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const HashTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 27px;

  margin-bottom: 10px;
  margin-right: 12px;
  padding: 4px 13px 5px 12px;

  border-radius: 14px;
  border: 1px solid #bdbdbd;
  background-color: #ffffff;

  box-sizing: border-box;

  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: -0.64px;
  text-align: left;
  color: #757575;

  user-select: none;
`;

const TempList = ["전체", "아무데나", "우리 집"];

function TestResultHashTagList() {
  return (
    <Wrapper>
      {TempList.map((tag) => (
        <HashTag>
          <span>{`# ${tag}`}</span>
        </HashTag>
      ))}
    </Wrapper>
  );
}

export default TestResultHashTagList;
